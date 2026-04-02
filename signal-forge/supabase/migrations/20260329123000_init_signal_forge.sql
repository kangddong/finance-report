create table if not exists public.market_daily (
    id bigint generated always as identity primary key,
    trade_date date not null,
    index_name text not null,
    close numeric,
    change_pct numeric,
    volume numeric,
    trading_value numeric,
    metadata jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    unique (trade_date, index_name)
);

create table if not exists public.flows_daily (
    id bigint generated always as identity primary key,
    trade_date date not null,
    market text not null,
    investor_type text not null,
    net_buy numeric,
    buy_value numeric,
    sell_value numeric,
    metadata jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    unique (trade_date, market, investor_type)
);

create table if not exists public.macro_daily (
    id bigint generated always as identity primary key,
    metric_date date not null,
    metric_name text not null,
    metric_value numeric,
    unit text,
    metadata jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    unique (metric_date, metric_name)
);

create table if not exists public.policy_docs (
    id bigint generated always as identity primary key,
    source_org text not null,
    title text not null,
    source_url text not null unique,
    published_at timestamptz,
    summary text,
    topics text[] not null default '{}',
    impact_area text,
    metadata jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table if not exists public.news_items (
    id bigint generated always as identity primary key,
    source_name text not null,
    title text not null,
    source_url text not null unique,
    published_at timestamptz,
    summary text,
    related_tickers text[] not null default '{}',
    topics text[] not null default '{}',
    metadata jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create table if not exists public.company_metrics (
    id bigint generated always as identity primary key,
    company_code text not null,
    metric_date date not null,
    metric_name text not null,
    metric_value numeric,
    unit text,
    metadata jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    unique (company_code, metric_date, metric_name)
);

create table if not exists public.theme_scores (
    id bigint generated always as identity primary key,
    theme_name text not null,
    score_date date not null,
    score numeric not null,
    delta numeric,
    confidence numeric,
    evidence_refs jsonb not null default '[]'::jsonb,
    metadata jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    unique (theme_name, score_date)
);

create table if not exists public.weekly_briefs (
    id bigint generated always as identity primary key,
    week_start date not null unique,
    title text not null,
    summary text,
    body_md text,
    metadata jsonb not null default '{}'::jsonb,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
    new.updated_at = now();
    return new;
end;
$$;

drop trigger if exists trg_market_daily_updated_at on public.market_daily;
create trigger trg_market_daily_updated_at
before update on public.market_daily
for each row execute function public.set_updated_at();

drop trigger if exists trg_flows_daily_updated_at on public.flows_daily;
create trigger trg_flows_daily_updated_at
before update on public.flows_daily
for each row execute function public.set_updated_at();

drop trigger if exists trg_macro_daily_updated_at on public.macro_daily;
create trigger trg_macro_daily_updated_at
before update on public.macro_daily
for each row execute function public.set_updated_at();

drop trigger if exists trg_policy_docs_updated_at on public.policy_docs;
create trigger trg_policy_docs_updated_at
before update on public.policy_docs
for each row execute function public.set_updated_at();

drop trigger if exists trg_news_items_updated_at on public.news_items;
create trigger trg_news_items_updated_at
before update on public.news_items
for each row execute function public.set_updated_at();

drop trigger if exists trg_company_metrics_updated_at on public.company_metrics;
create trigger trg_company_metrics_updated_at
before update on public.company_metrics
for each row execute function public.set_updated_at();

drop trigger if exists trg_theme_scores_updated_at on public.theme_scores;
create trigger trg_theme_scores_updated_at
before update on public.theme_scores
for each row execute function public.set_updated_at();

drop trigger if exists trg_weekly_briefs_updated_at on public.weekly_briefs;
create trigger trg_weekly_briefs_updated_at
before update on public.weekly_briefs
for each row execute function public.set_updated_at();

alter table public.market_daily enable row level security;
alter table public.flows_daily enable row level security;
alter table public.macro_daily enable row level security;
alter table public.policy_docs enable row level security;
alter table public.news_items enable row level security;
alter table public.company_metrics enable row level security;
alter table public.theme_scores enable row level security;
alter table public.weekly_briefs enable row level security;
