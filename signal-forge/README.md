# signal-forge

`signal-forge` is imported into this repository as the data collection and normalization workspace.

## Purpose

- Collect market structure data from KRX
- Collect optional ECOS macro data from BOK
- Collect policy documents from FSC and BOK
- Build weekly briefs into Supabase

## Entry Points

- `scripts/run_collectors.py`
- `supabase/migrations/20260329123000_init_signal_forge.sql`

## Role In This Workspace

`financeHelper` remains the dashboard and report rendering app.
`signal-forge` is the upstream data pipeline that can populate Supabase for downstream sync into the dashboard.
