from __future__ import annotations

from datetime import date, datetime, timedelta
from typing import Any
from zoneinfo import ZoneInfo

from collectors.common import create_supabase, utc_now


def current_week_start() -> date:
    today = datetime.now(ZoneInfo("Asia/Seoul")).date()
    return today - timedelta(days=today.weekday())


def _fetch_table_range(
    table: str,
    columns: str,
    date_column: str,
    start_date: date,
    end_date: date,
    *,
    limit: int | None = None,
    desc: bool = True,
) -> list[dict[str, Any]]:
    client = create_supabase()
    query = (
        client.table(table)
        .select(columns)
        .gte(date_column, start_date.isoformat())
        .lte(date_column, f"{end_date.isoformat()}T23:59:59" if "at" in date_column else end_date.isoformat())
        .order(date_column, desc=desc)
    )
    if limit is not None:
        query = query.limit(limit)
    return query.execute().data


def _to_float(value: Any) -> float | None:
    if value is None:
        return None
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def _latest_by_key(rows: list[dict[str, Any]], key: str) -> dict[str, dict[str, Any]]:
    latest: dict[str, dict[str, Any]] = {}
    for row in rows:
        latest.setdefault(str(row[key]), row)
    return latest


def _macro_lookup(rows: list[dict[str, Any]]) -> dict[str, dict[str, Any]]:
    latest: dict[str, dict[str, Any]] = {}
    for row in rows:
        latest.setdefault(str(row["metric_name"]), row)
    return latest


def _ecos_rows(rows: list[dict[str, Any]]) -> list[dict[str, Any]]:
    return [row for row in rows if str(row.get("metric_name", "")).startswith("ECOS_")]


def _market_line(
    current: dict[str, Any] | None,
    previous: dict[str, Any] | None,
    current_macro: dict[str, dict[str, Any]],
    previous_macro: dict[str, dict[str, Any]],
) -> tuple[str, str]:
    if current is None:
        return ("- 데이터 없음", "- 데이터 없음")

    index_name = str(current["index_name"])
    close_now = _to_float(current.get("close"))
    change_now = _to_float(current.get("change_pct"))
    close_prev = _to_float(previous.get("close")) if previous else None

    close_delta = None
    if close_now is not None and close_prev is not None:
        close_delta = close_now - close_prev

    adv_now = _to_float(current_macro.get(f"{index_name}_ADVANCERS", {}).get("metric_value"))
    dec_now = _to_float(current_macro.get(f"{index_name}_DECLINERS", {}).get("metric_value"))
    adv_prev = _to_float(previous_macro.get(f"{index_name}_ADVANCERS", {}).get("metric_value"))
    dec_prev = _to_float(previous_macro.get(f"{index_name}_DECLINERS", {}).get("metric_value"))

    breadth_now = None if adv_now is None or dec_now is None else adv_now - dec_now
    breadth_prev = None if adv_prev is None or dec_prev is None else adv_prev - dec_prev
    breadth_delta = None if breadth_now is None or breadth_prev is None else breadth_now - breadth_prev

    summary = f"- {index_name}: 종가 `{close_now}` / 일간 등락률 `{change_now}%`"
    if close_delta is not None:
        summary += f" / 전주 대비 `{close_delta:+.2f}`"

    breadth = f"- {index_name} 시장 폭: 상승 `{adv_now}`, 하락 `{dec_now}`"
    if breadth_now is not None:
        breadth += f" / 순폭 `{breadth_now:+.0f}`"
    if breadth_delta is not None:
        breadth += f" / 전주 대비 `{breadth_delta:+.0f}`"

    return summary, breadth


def _policy_summary(current_rows: list[dict[str, Any]], previous_rows: list[dict[str, Any]]) -> list[str]:
    lines: list[str] = []
    current_count = len(current_rows)
    previous_count = len(previous_rows)
    delta = current_count - previous_count
    lines.append(
        f"- 이번 주 정책 문서 `{current_count}`건 / 전주 대비 `{delta:+d}`건"
    )

    if current_rows:
        dept_counts: dict[str, int] = {}
        for row in current_rows:
            department = str((row.get("metadata") or {}).get("department") or "미상")
            dept_counts[department] = dept_counts.get(department, 0) + 1
        top_departments = sorted(dept_counts.items(), key=lambda item: (-item[1], item[0]))[:3]
        lines.append(
            "- 문서 집중 부서: "
            + ", ".join(f"`{name}` {count}건" for name, count in top_departments)
        )
        lines.append("- 주요 문서:")
        for row in current_rows[:5]:
            published_at = str(row["published_at"])[:10]
            department = (row.get("metadata") or {}).get("department")
            suffix = f" / {department}" if department else ""
            lines.append(f"- {published_at} {row['title']}{suffix}")
    else:
        lines.append("- 이번 주 수집된 정책 문서가 없습니다.")

    return lines


def _policy_source_breakdown(current_rows: list[dict[str, Any]]) -> list[str]:
    if not current_rows:
        return ["- 소스별 요약 없음"]

    grouped: dict[str, list[dict[str, Any]]] = {}
    for row in current_rows:
        source = str(row.get("source_org") or "미상")
        grouped.setdefault(source, []).append(row)

    lines: list[str] = []
    for source, rows in sorted(grouped.items(), key=lambda item: item[0]):
        lines.append(f"- {source}: `{len(rows)}`건")

        category_counts: dict[str, int] = {}
        for row in rows:
            metadata = row.get("metadata") or {}
            category = str(metadata.get("source_category") or "미분류")
            category_counts[category] = category_counts.get(category, 0) + 1

        top_categories = sorted(category_counts.items(), key=lambda item: (-item[1], item[0]))[:3]
        if top_categories:
            lines.append(
                "- 카테고리: "
                + ", ".join(f"`{name}` {count}건" for name, count in top_categories)
            )

        for row in rows[:3]:
            published_at = str(row["published_at"])[:10]
            lines.append(f"- {published_at} {row['title']}")

    return lines


def _ecos_summary(current_rows: list[dict[str, Any]], previous_rows: list[dict[str, Any]]) -> list[str]:
    lines: list[str] = []
    current_latest = _latest_by_key(current_rows, "metric_name")
    previous_latest = _latest_by_key(previous_rows, "metric_name")

    if not current_latest:
        return ["- 이번 주 수집된 ECOS 거시 지표가 없습니다."]

    lines.append(f"- 이번 주 ECOS 지표 `{len(current_latest)}`개")

    for metric_name, row in list(current_latest.items())[:8]:
        current_value = _to_float(row.get("metric_value"))
        previous_value = _to_float(previous_latest.get(metric_name, {}).get("metric_value"))
        delta = None if current_value is None or previous_value is None else current_value - previous_value
        stat_name = str((row.get("metadata") or {}).get("stat_name") or metric_name)
        cycle = str((row.get("metadata") or {}).get("cycle") or row.get("unit") or "")

        line = f"- {stat_name}: `{current_value}`"
        if cycle:
            line += f" / 주기 `{cycle}`"
        if delta is not None:
            line += f" / 전주 대비 `{delta:+.4f}`"
        lines.append(line)

    return lines


def _observation_lines(
    current_market: dict[str, dict[str, Any]],
    previous_market: dict[str, dict[str, Any]],
    current_macro: dict[str, dict[str, Any]],
    previous_macro: dict[str, dict[str, Any]],
    current_policy: list[dict[str, Any]],
    previous_policy: list[dict[str, Any]],
) -> list[str]:
    lines: list[str] = []

    for index_name in ("KOSPI", "KOSDAQ"):
        cur = current_market.get(index_name)
        prev = previous_market.get(index_name)
        if not cur:
            continue

        change_now = _to_float(cur.get("change_pct")) or 0.0
        close_now = _to_float(cur.get("close"))
        close_prev = _to_float(prev.get("close")) if prev else None
        adv_now = _to_float(current_macro.get(f"{index_name}_ADVANCERS", {}).get("metric_value")) or 0.0
        dec_now = _to_float(current_macro.get(f"{index_name}_DECLINERS", {}).get("metric_value")) or 0.0
        breadth_now = adv_now - dec_now

        if close_prev is not None and close_now is not None:
            if close_now > close_prev and breadth_now > 0:
                lines.append(f"- {index_name}는 지수와 시장 폭이 같이 개선됐습니다.")
            elif close_now > close_prev and breadth_now <= 0:
                lines.append(f"- {index_name}는 지수는 올랐지만 시장 폭은 약합니다. 대형주 주도 가능성이 있습니다.")
            elif close_now <= close_prev and breadth_now > 0:
                lines.append(f"- {index_name}는 지수는 약했지만 상승 종목 수가 더 많습니다. 내부 확산 여부를 더 봐야 합니다.")
            else:
                lines.append(f"- {index_name}는 지수와 시장 폭이 모두 약합니다.")
        else:
            direction = "강세" if change_now > 0 else "약세" if change_now < 0 else "보합"
            lines.append(f"- {index_name}는 현재 수집 기준 `{direction}` 흐름입니다.")

    policy_delta = len(current_policy) - len(previous_policy)
    if policy_delta > 0:
        lines.append("- 정책 문서 흐름은 전주 대비 증가했습니다.")
    elif policy_delta < 0:
        lines.append("- 정책 문서 흐름은 전주 대비 감소했습니다.")
    else:
        lines.append("- 정책 문서 건수는 전주와 유사합니다.")

    return lines[:5]


def _checklist_lines(
    current_macro: dict[str, dict[str, Any]],
    current_policy: list[dict[str, Any]],
) -> list[str]:
    lines = [
        "- KOSPI/KOSDAQ 상승-하락 종목 수 격차가 다음 실행에서도 유지되는지 확인",
        "- 금융위 문서가 특정 부서에 집중되는지 확인",
    ]

    kospi_adv = _to_float(current_macro.get("KOSPI_ADVANCERS", {}).get("metric_value"))
    kospi_dec = _to_float(current_macro.get("KOSPI_DECLINERS", {}).get("metric_value"))
    if kospi_adv is not None and kospi_dec is not None and kospi_adv < kospi_dec:
        lines.append("- 코스피 시장 폭이 약하므로 대형주 쏠림 여부 점검")

    if current_policy:
        lines.append("- 상위 정책 문서 2~3건은 본문/첨부파일까지 확장 수집할지 검토")

    return lines[:4]


def generate_weekly_brief() -> dict[str, object]:
    week_start = current_week_start()
    week_end = week_start + timedelta(days=6)
    previous_week_start = week_start - timedelta(days=7)
    previous_week_end = week_start - timedelta(days=1)

    current_market_rows = _fetch_table_range(
        "market_daily",
        "trade_date,index_name,close,change_pct,metadata",
        "trade_date",
        week_start,
        week_end,
    )
    previous_market_rows = _fetch_table_range(
        "market_daily",
        "trade_date,index_name,close,change_pct,metadata",
        "trade_date",
        previous_week_start,
        previous_week_end,
    )
    current_macro_rows = _fetch_table_range(
        "macro_daily",
        "metric_date,metric_name,metric_value",
        "metric_date",
        week_start,
        week_end,
    )
    previous_macro_rows = _fetch_table_range(
        "macro_daily",
        "metric_date,metric_name,metric_value",
        "metric_date",
        previous_week_start,
        previous_week_end,
    )
    current_policy_rows = _fetch_table_range(
        "policy_docs",
        "published_at,title,source_org,source_url,metadata",
        "published_at",
        week_start,
        week_end,
        limit=20,
    )
    previous_policy_rows = _fetch_table_range(
        "policy_docs",
        "published_at,title,source_org,source_url,metadata",
        "published_at",
        previous_week_start,
        previous_week_end,
        limit=20,
    )

    current_market = _latest_by_key(current_market_rows, "index_name")
    previous_market = _latest_by_key(previous_market_rows, "index_name")
    current_macro = _macro_lookup(current_macro_rows)
    previous_macro = _macro_lookup(previous_macro_rows)
    current_ecos_rows = _ecos_rows(current_macro_rows)
    previous_ecos_rows = _ecos_rows(previous_macro_rows)

    title = f"Signal Forge Weekly Brief - {week_start.isoformat()}"
    lines = [
        f"# {title}",
        "",
        f"- 기준 주간: `{week_start.isoformat()} ~ {week_end.isoformat()}`",
        f"- 생성 시각: `{utc_now()}`",
        "",
        "## 이번 주 핵심 변화",
        "",
    ]

    observation_lines = _observation_lines(
        current_market,
        previous_market,
        current_macro,
        previous_macro,
        current_policy_rows,
        previous_policy_rows,
    )
    lines.extend(observation_lines or ["- 해석 가능한 변화가 아직 충분하지 않습니다."])

    lines.extend(["", "## 시장 요약", ""])
    for index_name in ("KOSPI", "KOSDAQ"):
        summary, breadth = _market_line(
            current_market.get(index_name),
            previous_market.get(index_name),
            current_macro,
            previous_macro,
        )
        lines.append(summary)
        lines.append(breadth)

    lines.extend(["", "## 정책 흐름", ""])
    lines.extend(_policy_summary(current_policy_rows, previous_policy_rows))
    lines.extend(["", "## 정책 소스별 요약", ""])
    lines.extend(_policy_source_breakdown(current_policy_rows))

    lines.extend(["", "## 거시 지표", ""])
    lines.extend(_ecos_summary(current_ecos_rows, previous_ecos_rows))

    lines.extend(["", "## 다음 주 체크리스트", ""])
    lines.extend(_checklist_lines(current_macro, current_policy_rows))

    lines.extend(
        [
            "",
            "## 데이터 범위",
            "",
            f"- market_daily rows: `{len(current_market_rows)}`",
            f"- macro_daily rows: `{len(current_macro_rows)}`",
            f"- policy_docs rows: `{len(current_policy_rows)}`",
            "",
        ]
    )

    summary = " / ".join(observation_lines[:3]) if observation_lines else "주간 요약 데이터 부족"

    return {
        "week_start": week_start.isoformat(),
        "title": title,
        "summary": summary,
        "body_md": "\n".join(lines).rstrip() + "\n",
        "metadata": {
            "collector": "collectors.briefs",
            "generated_at": utc_now(),
            "current_market_rows": len(current_market_rows),
            "previous_market_rows": len(previous_market_rows),
            "current_macro_rows": len(current_macro_rows),
            "previous_macro_rows": len(previous_macro_rows),
            "current_policy_rows": len(current_policy_rows),
            "previous_policy_rows": len(previous_policy_rows),
        },
    }


def run() -> int:
    client = create_supabase()
    payload = generate_weekly_brief()
    client.table("weekly_briefs").upsert(payload, on_conflict="week_start").execute()
    return 0


if __name__ == "__main__":
    raise SystemExit(run())
