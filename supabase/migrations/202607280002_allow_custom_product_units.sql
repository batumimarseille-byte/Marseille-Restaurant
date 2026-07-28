-- The product editor supports restaurant-specific units, for example "bottle".
-- Keep the existing data and remove the initial enum restriction.
alter table public.products
  alter column unit type text using unit::text;

alter table public.products
  add constraint products_unit_not_blank check (length(trim(unit)) > 0);
