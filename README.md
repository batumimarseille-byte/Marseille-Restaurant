# Marseille Restaurant

Inventory control for Marseille Restaurant: products, suppliers, incoming goods, outgoing usage, inventory adjustments, and reports.

## Local development

```bash
npm install
npm run dev
```

Open the address shown by Vite, normally `http://localhost:5173`.

## Supabase

1. In Supabase, open **SQL Editor** and run [the initial schema](supabase/migrations/202607250001_initial_inventory_schema.sql).
2. Open **Authentication -> Users -> Add user** and create the administrator account.
3. In **Project Settings -> API**, copy the project URL and anon key.
4. Create `.env.local` from `.env.example` and set both values.

```dotenv
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

At the first authorized launch on an empty database, the app migrates the current browser data, including the demo records, into Supabase. Afterwards the cloud database is the source of truth. The browser copy remains a fallback and can still be exported from the Reports screen.

## Vercel

1. Import this GitHub repository in Vercel.
2. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in **Settings -> Environment Variables** for Production and Preview.
3. Deploy. Vercel uses `npm run build` and publishes `dist` automatically.

Keep `.env.local` private. It is excluded from Git. The Supabase anon key is designed for browser use; table access is protected by Row Level Security and requires a signed-in user.

## Checks

```bash
npm run build
```
