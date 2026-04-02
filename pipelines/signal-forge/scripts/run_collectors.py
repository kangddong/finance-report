from __future__ import annotations

import traceback

from collectors import briefs, ecos, market, policy


def main() -> int:
    hard_failures: list[str] = []

    for name, runner, required in (
        ("market", market.run, True),
        ("ecos", ecos.run, False),
        ("policy", policy.run, False),
        ("briefs", briefs.run, True),
    ):
        try:
            runner()
        except Exception as exc:  # pragma: no cover - workflow safety
            print(f"[collector:{name}] failed: {exc}")
            traceback.print_exc()
            if required:
                hard_failures.append(name)

    return 1 if hard_failures else 0


if __name__ == "__main__":
    raise SystemExit(main())
