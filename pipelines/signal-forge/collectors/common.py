from __future__ import annotations

import os
from dataclasses import dataclass
from datetime import UTC, datetime

from supabase import Client, create_client


@dataclass(frozen=True)
class Settings:
    supabase_url: str
    supabase_secret_key: str
    ecos_api_key: str | None = None


def load_settings() -> Settings:
    url = os.getenv("SUPABASE_URL", "").strip()
    key = os.getenv("SUPABASE_SECRET_KEY", "").strip()
    ecos_api_key = os.getenv("ECOS_API_KEY", "").strip() or None
    if not url or not key:
        raise RuntimeError(
            "SUPABASE_URL and SUPABASE_SECRET_KEY must be set in the environment."
        )
    return Settings(
        supabase_url=url,
        supabase_secret_key=key,
        ecos_api_key=ecos_api_key,
    )


def create_supabase() -> Client:
    settings = load_settings()
    return create_client(settings.supabase_url, settings.supabase_secret_key)


def utc_now() -> str:
    return datetime.now(UTC).isoformat()
