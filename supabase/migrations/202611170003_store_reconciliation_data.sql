-- Recipes, imported Poster sales, and the monthly count draft are stored in
-- app_state so the initial inventory schema remains backwards compatible.
alter table public.app_state
  drop constraint if exists app_state_key_check;

alter table public.app_state
  add constraint app_state_key_not_blank check (length(trim(key)) > 0);
