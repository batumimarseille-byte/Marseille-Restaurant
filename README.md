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

### Monthly reconciliation

Run [the reconciliation migration](supabase/migrations/202611170003_store_reconciliation_data.sql) once in the Supabase SQL Editor before using **Menu** and **Monthly check**. It permits the app to store the Poster menu catalog, recipe cards, imported Poster sales drafts, and a saved physical-count draft.

The monthly workflow is deliberately review-first:

1. Keep the sellable catalog in **Menu**. It stores each menu name, optional group, and its exact Poster name. After the first sales import, the missing menu items can be added directly from that draft.
2. Export or copy the **product** and **quantity** columns from Poster for the period, then paste them into **Monthly check**.
3. Create a recipe card for every Poster menu item that consumes stock. Select the menu item, then add the real ingredient amount per sold item. For bottled drinks or packaged goods, use one piece; for spirits, draft drinks, and dishes, confirm the real bottle/portion measure with the bar or kitchen.
4. The app shows every imported item without a recipe card. Complete those before closing the period; the app never invents a recipe or portion size.
5. Count the physical stock and enter the real quantity for every active product.
6. Confirm the monthly check. The app then writes one traceable outgoing movement per recipe ingredient from Poster sales and one inventory adjustment for each remaining physical difference.

No stock changes are made while sales or counts are saved as drafts. A confirmed month remains visible in movement history and reports.

## Vercel

1. Import this GitHub repository in Vercel.
2. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in **Settings -> Environment Variables** for Production and Preview.
3. Deploy. Vercel uses `npm run build` and publishes `dist` automatically.

Keep `.env.local` private. It is excluded from Git. The Supabase anon key is designed for browser use; table access is protected by Row Level Security and requires a signed-in user.

## Checks

```bash
npm run build
```
