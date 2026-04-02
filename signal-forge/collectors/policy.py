from __future__ import annotations

import subprocess
import time
from datetime import datetime
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

from collectors.common import create_supabase, utc_now

LIST_URL = "https://www.fsc.go.kr/no010101"
BASE_URL = "https://www.fsc.go.kr"
BOK_LIST_URL = "https://www.bok.or.kr/portal/singl/newsData/listCont.do"
BOK_BASE_URL = "https://www.bok.or.kr"
BOK_ALLOWED_CATEGORIES = {
    "보도자료",
    "공개시장운영 공지",
    "주간보도계획",
}


def fetch_list_html() -> str:
    request_headers = {
        "User-Agent": "Mozilla/5.0",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        "Referer": BASE_URL,
        "Connection": "keep-alive",
    }

    last_error: Exception | None = None
    for _ in range(3):
        try:
            response = requests.get(
                LIST_URL,
                headers=request_headers,
                timeout=30,
            )
            response.raise_for_status()
            response.encoding = response.apparent_encoding or response.encoding
            return response.text
        except requests.RequestException as exc:
            last_error = exc
            time.sleep(2)

    for _ in range(3):
        try:
            completed = subprocess.run(
                [
                    "curl",
                    "--http1.1",
                    "-L",
                    "--silent",
                    "--show-error",
                    "--fail",
                    "-A",
                    "Mozilla/5.0",
                    "-H",
                    "Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
                    "-e",
                    BASE_URL,
                    LIST_URL,
                ],
                check=True,
                capture_output=True,
                text=True,
                encoding="utf-8",
            )
            return completed.stdout
        except subprocess.CalledProcessError as exc:
            last_error = exc
            time.sleep(2)

    raise RuntimeError(f"Failed to fetch FSC policy list: {last_error}")


def fetch_policy_docs(limit: int = 10) -> list[dict[str, object]]:
    soup = BeautifulSoup(fetch_list_html(), "html.parser")
    rows = soup.select(".board-list-wrap > ul > li")
    if not rows:
        raise RuntimeError("Failed to locate FSC press release list container.")

    items: list[dict[str, object]] = []
    collected_at = utc_now()

    for row in rows[:limit]:
        title_link = row.select_one(".subject a")
        day_node = row.select_one(".day")
        if title_link is None or day_node is None:
            continue

        metadata: dict[str, object] = {
            "collector": "collectors.policy",
            "collected_at": collected_at,
            "list_url": LIST_URL,
        }

        info_spans = row.select(".info span")
        for span in info_spans:
            text = span.get_text(" ", strip=True)
            if text.startswith("담당부서"):
                metadata["department"] = text.replace("담당부서", "", 1).strip(" :")
            elif text.startswith("조회수"):
                view_text = text.replace("조회수", "", 1).strip(" :").replace(",", "")
                if view_text.isdigit():
                    metadata["views"] = int(view_text)

        attachments: list[dict[str, str]] = []
        for file_link in row.select(".file-list > a[title]"):
            href = file_link.get("href", "")
            attachments.append(
                {
                    "name": file_link.get("title", "").strip(),
                    "url": urljoin(BASE_URL, href),
                }
            )
        if attachments:
            metadata["attachments"] = attachments

        published_at = datetime.strptime(
            day_node.get_text(" ", strip=True), "%Y-%m-%d"
        ).date().isoformat()

        items.append(
            {
                "source_org": "금융위원회",
                "title": title_link.get_text(" ", strip=True),
                "source_url": urljoin(BASE_URL, title_link.get("href", "")),
                "published_at": published_at,
                "summary": None,
                "topics": ["fsc", "press_release"],
                "impact_area": "policy",
                "metadata": metadata,
            }
        )
    return items


def fetch_bok_policy_docs(limit: int = 10) -> list[dict[str, object]]:
    response = requests.get(
        BOK_LIST_URL,
        params={
            "pageIndex": "1",
            "targetDepth": "3",
            "menuNo": "201263",
            "syncMenuChekKey": "0",
            "depthSubMain": "",
            "subMainAt": "",
            "searchCnd": "1",
            "searchKwd": "",
        },
        headers={
            "User-Agent": "Mozilla/5.0",
            "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
            "Referer": "https://www.bok.or.kr/portal/singl/newsData/list.do?menuNo=201263",
        },
        timeout=30,
    )
    response.raise_for_status()

    soup = BeautifulSoup(response.text, "html.parser")
    rows = soup.select("li.bbsRowCls")
    items: list[dict[str, object]] = []
    collected_at = utc_now()

    for row in rows[:limit]:
        title_link = row.select_one("a.title")
        category = row.select_one(".t1")
        department = row.select_one(".depart")
        date_node = row.select_one(".date")
        hits = row.select_one(".hits")
        if title_link is None or date_node is None:
            continue

        category_text = category.get_text(" ", strip=True) if category else ""
        if category_text not in BOK_ALLOWED_CATEGORIES:
            continue

        date_text = date_node.get_text(" ", strip=True).replace("등록일", "").strip()
        try:
            published_at = datetime.strptime(date_text, "%Y.%m.%d").date().isoformat()
        except ValueError:
            continue

        metadata: dict[str, object] = {
            "collector": "collectors.policy",
            "collected_at": collected_at,
            "source_name": "BOK",
            "source_category": category_text,
        }
        if department is not None:
            metadata["department"] = department.get_text(" ", strip=True).replace("담당부서", "").strip()
        if hits is not None:
            hit_text = hits.get_text(" ", strip=True).replace("조회수", "").strip().replace(",", "")
            if hit_text.isdigit():
                metadata["views"] = int(hit_text)

        items.append(
            {
                "source_org": "한국은행",
                "title": title_link.get_text(" ", strip=True),
                "source_url": urljoin(BOK_BASE_URL, title_link.get("href", "")),
                "published_at": published_at,
                "summary": None,
                "topics": ["bok", "news_data"],
                "impact_area": "policy",
                "metadata": metadata,
            }
        )

    return items


def run() -> int:
    client = create_supabase()
    payload: list[dict[str, object]] = []

    try:
        payload.extend(fetch_policy_docs())
    except Exception as exc:
        print(f"[collector:policy] FSC source failed: {exc}")

    try:
        payload.extend(fetch_bok_policy_docs())
    except Exception as exc:
        print(f"[collector:policy] BOK source failed: {exc}")

    if payload:
        client.table("policy_docs").upsert(payload, on_conflict="source_url").execute()
    else:
        raise RuntimeError("No policy documents collected from FSC or BOK.")
    return 0


if __name__ == "__main__":
    raise SystemExit(run())
