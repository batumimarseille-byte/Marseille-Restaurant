# Supabase setup

This folder contains the first database schema for the restaurant inventory app.

## Tables

- `products`: product catalog, units, minimum stock, purchase price, opening stock, active flag.
- `suppliers`: supplier directory.
- `stock_movements`: immutable movement journal for incoming, outgoing, write-offs, and inventory adjustments.
- `inventory_counts`: monthly inventory document header.
- `inventory_count_items`: product rows inside an inventory count.

## Stock rule

Current stock is calculated from:

```text
products.opening_stock + sum(stock_movements.quantity_delta)
```

The `current_product_stock` view exposes current stock, stock value, and low-stock status.

## Apply in Supabase

Open the project's **SQL Editor**, create a new query, paste the complete content of:

```text
supabase/migrations/202607250001_initial_inventory_schema.sql
```

Run it once on a new project. The schema uses numeric IDs so it matches the existing restaurant data without remapping records.

Then run every later file from `supabase/migrations` in filename order. If the initial schema has already been applied, run [202607280002_allow_custom_product_units.sql](migrations/202607280002_allow_custom_product_units.sql) now.

## First account

Open **Authentication -> Users -> Add user** in Supabase and create the administrator email and password. That account signs in to the published app.

## App configuration

Copy `.env.example` to `.env.local` and fill in the project URL and anon key from **Project Settings -> API**. Add the same variables in Vercel before deployment.

After sign-in, the application synchronizes products, suppliers, movements, and the current inventory draft to Supabase.
