-- The product editor supports restaurant-specific units, for example "bottle".
-- Keep the existing data and remove the initial enum restriction.
drop view public.current_product_stock;

alter table public.products
  alter column unit type text using unit::text;

alter table public.products
  add constraint products_unit_not_blank check (length(trim(unit)) > 0);

create view public.current_product_stock as
select
  p.id,
  p.name,
  p.category,
  p.unit,
  p.minimum_stock,
  p.purchase_price,
  p.opening_stock,
  p.is_active,
  coalesce(p.opening_stock, 0) + coalesce(sum(sm.quantity_delta), 0) as current_stock,
  (coalesce(p.opening_stock, 0) + coalesce(sum(sm.quantity_delta), 0)) * p.purchase_price as current_value,
  (coalesce(p.opening_stock, 0) + coalesce(sum(sm.quantity_delta), 0)) <= p.minimum_stock as is_low_stock
from public.products p
left join public.stock_movements sm on sm.product_id = p.id
group by p.id;
