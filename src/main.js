import "./styles.css";
import { createClient } from "@supabase/supabase-js";

const STORAGE_KEY = "restaurant-inventory-v1";
const SEED_VERSION = 2;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

const seedState = {
  seedVersion: SEED_VERSION,
  products: [
    { id: 1, name: "Beef tenderloin", category: "Meat", unit: "kg", minStock: 8, price: 42, openingStock: 14, active: true },
    { id: 2, name: "Chicken breast", category: "Meat", unit: "kg", minStock: 12, price: 16, openingStock: 24, active: true },
    { id: 3, name: "Salmon fillet", category: "Fish", unit: "kg", minStock: 5, price: 38, openingStock: 9, active: true },
    { id: 4, name: "Shrimp 16/20", category: "Fish", unit: "kg", minStock: 4, price: 34, openingStock: 7, active: true },
    { id: 5, name: "Tomatoes", category: "Vegetables", unit: "kg", minStock: 18, price: 4.5, openingStock: 32, active: true },
    { id: 6, name: "Cucumbers", category: "Vegetables", unit: "kg", minStock: 12, price: 3.8, openingStock: 20, active: true },
    { id: 7, name: "Potatoes", category: "Vegetables", unit: "kg", minStock: 25, price: 2.2, openingStock: 54, active: true },
    { id: 8, name: "Onions", category: "Vegetables", unit: "kg", minStock: 15, price: 1.9, openingStock: 30, active: true },
    { id: 9, name: "Fresh basil", category: "Herbs", unit: "gram", minStock: 600, price: 0.035, openingStock: 1200, active: true },
    { id: 10, name: "Parsley", category: "Herbs", unit: "gram", minStock: 800, price: 0.018, openingStock: 1800, active: true },
    { id: 11, name: "Mozzarella", category: "Dairy", unit: "kg", minStock: 8, price: 21, openingStock: 12, active: true },
    { id: 12, name: "Butter", category: "Dairy", unit: "kg", minStock: 6, price: 17, openingStock: 10, active: true },
    { id: 13, name: "Cream 33%", category: "Dairy", unit: "liter", minStock: 10, price: 9.5, openingStock: 18, active: true },
    { id: 14, name: "Olive oil", category: "Dry goods", unit: "liter", minStock: 12, price: 18, openingStock: 22, active: true },
    { id: 15, name: "Sunflower oil", category: "Dry goods", unit: "liter", minStock: 20, price: 6.5, openingStock: 35, active: true },
    { id: 16, name: "Arborio rice", category: "Dry goods", unit: "kg", minStock: 10, price: 8.2, openingStock: 18, active: true },
    { id: 17, name: "Penne pasta", category: "Dry goods", unit: "kg", minStock: 12, price: 5.6, openingStock: 22, active: true },
    { id: 18, name: "Flour", category: "Bakery", unit: "kg", minStock: 25, price: 2.4, openingStock: 48, active: true },
    { id: 19, name: "Sugar", category: "Bakery", unit: "kg", minStock: 12, price: 2.9, openingStock: 20, active: true },
    { id: 20, name: "Coffee beans", category: "Bar", unit: "kg", minStock: 6, price: 32, openingStock: 10, active: true },
    { id: 21, name: "Sparkling water", category: "Bar", unit: "package", minStock: 25, price: 11, openingStock: 45, active: true },
    { id: 22, name: "Still water", category: "Bar", unit: "package", minStock: 30, price: 9, openingStock: 52, active: true },
    { id: 23, name: "House red wine", category: "Bar", unit: "liter", minStock: 18, price: 14, openingStock: 32, active: true },
    { id: 24, name: "Lemons", category: "Fruit", unit: "kg", minStock: 8, price: 4.2, openingStock: 14, active: true },
  ],
  suppliers: [
    { id: 1, name: "Tbilisi Fresh Market", phone: "+995 555 12 34 56", contact: "Nino", note: "Vegetables and herbs, morning delivery" },
    { id: 2, name: "Caucasus Premium Foods", phone: "+995 599 45 67 89", contact: "Giorgi", note: "Meat and dairy supplier" },
    { id: 3, name: "Black Sea Fish Co.", phone: "+995 577 31 20 10", contact: "Levan", note: "Fish and seafood, delivery Tue/Fri" },
    { id: 4, name: "Rustaveli Bar Supply", phone: "+995 591 88 21 44", contact: "Ana", note: "Water, wine, coffee and bar items" },
    { id: 5, name: "Bakery Base Georgia", phone: "+995 599 72 11 08", contact: "Dato", note: "Flour, sugar, rice and pasta" },
  ],
  movements: [
    { id: 1, type: "incoming", productId: 5, date: "2026-07-13", quantity: 22, unitPrice: 4.5, supplierId: 1, comment: "Opening week vegetables" },
    { id: 2, type: "incoming", productId: 6, date: "2026-07-13", quantity: 15, unitPrice: 3.8, supplierId: 1, comment: "Opening week vegetables" },
    { id: 3, type: "incoming", productId: 1, date: "2026-07-14", quantity: 10, unitPrice: 42, supplierId: 2, comment: "Meat delivery #2101" },
    { id: 4, type: "incoming", productId: 2, date: "2026-07-14", quantity: 16, unitPrice: 16, supplierId: 2, comment: "Meat delivery #2101" },
    { id: 5, type: "incoming", productId: 3, date: "2026-07-14", quantity: 7, unitPrice: 38, supplierId: 3, comment: "Fish delivery #870" },
    { id: 6, type: "incoming", productId: 21, date: "2026-07-14", quantity: 30, unitPrice: 11, supplierId: 4, comment: "Bar restock" },
    { id: 7, type: "outgoing", productId: 5, date: "2026-07-15", quantity: -11, unitPrice: 4.5, reason: "Kitchen", comment: "Lunch and dinner prep" },
    { id: 8, type: "outgoing", productId: 2, date: "2026-07-15", quantity: -7.5, unitPrice: 16, reason: "Kitchen", comment: "Chicken mains" },
    { id: 9, type: "outgoing", productId: 14, date: "2026-07-15", quantity: -3, unitPrice: 18, reason: "Kitchen", comment: "Sauces and grill" },
    { id: 10, type: "outgoing", productId: 21, date: "2026-07-15", quantity: -12, unitPrice: 11, reason: "Bar", comment: "Service" },
    { id: 11, type: "incoming", productId: 18, date: "2026-07-16", quantity: 35, unitPrice: 2.4, supplierId: 5, comment: "Bakery dry goods" },
    { id: 12, type: "incoming", productId: 17, date: "2026-07-16", quantity: 18, unitPrice: 5.6, supplierId: 5, comment: "Pasta restock" },
    { id: 13, type: "outgoing", productId: 11, date: "2026-07-16", quantity: -4.2, unitPrice: 21, reason: "Kitchen", comment: "Pizza and salads" },
    { id: 14, type: "outgoing", productId: 23, date: "2026-07-16", quantity: -8, unitPrice: 14, reason: "Bar", comment: "Wine by glass" },
    { id: 15, type: "outgoing", productId: 9, date: "2026-07-16", quantity: -450, unitPrice: 0.035, reason: "Kitchen", comment: "Sauce and garnish" },
    { id: 16, type: "incoming", productId: 24, date: "2026-07-17", quantity: 9, unitPrice: 4.2, supplierId: 1, comment: "Fruit delivery" },
    { id: 17, type: "incoming", productId: 20, date: "2026-07-17", quantity: 6, unitPrice: 32, supplierId: 4, comment: "Coffee restock" },
    { id: 18, type: "outgoing", productId: 1, date: "2026-07-17", quantity: -6.8, unitPrice: 42, reason: "Kitchen", comment: "Steak service" },
    { id: 19, type: "outgoing", productId: 3, date: "2026-07-17", quantity: -4.1, unitPrice: 38, reason: "Kitchen", comment: "Salmon orders" },
    { id: 20, type: "outgoing", productId: 22, date: "2026-07-17", quantity: -16, unitPrice: 9, reason: "Bar", comment: "Service" },
    { id: 21, type: "outgoing", productId: 6, date: "2026-07-18", quantity: -9, unitPrice: 3.8, reason: "Kitchen", comment: "Salads" },
    { id: 22, type: "outgoing", productId: 7, date: "2026-07-18", quantity: -18, unitPrice: 2.2, reason: "Kitchen", comment: "Sides" },
    { id: 23, type: "outgoing", productId: 13, date: "2026-07-18", quantity: -6, unitPrice: 9.5, reason: "Kitchen", comment: "Sauces" },
    { id: 24, type: "outgoing", productId: 20, date: "2026-07-18", quantity: -2.4, unitPrice: 32, reason: "Bar", comment: "Coffee service" },
    { id: 25, type: "outgoing", productId: 24, date: "2026-07-18", quantity: -5.2, unitPrice: 4.2, reason: "Bar", comment: "Lemonades and cocktails" },
    { id: 26, type: "adjustment", productId: 5, date: "2026-07-19", quantity: -1.4, unitPrice: 4.5, reason: "Inventory", comment: "Sunday mini count" },
    { id: 27, type: "adjustment", productId: 21, date: "2026-07-19", quantity: 2, unitPrice: 11, reason: "Inventory", comment: "Found two packages in bar storage" },
    { id: 28, type: "incoming", productId: 5, date: "2026-07-20", quantity: 28, unitPrice: 4.5, supplierId: 1, comment: "Week 2 vegetables" },
    { id: 29, type: "incoming", productId: 8, date: "2026-07-20", quantity: 20, unitPrice: 1.9, supplierId: 1, comment: "Week 2 vegetables" },
    { id: 30, type: "incoming", productId: 11, date: "2026-07-20", quantity: 9, unitPrice: 21, supplierId: 2, comment: "Dairy restock" },
    { id: 31, type: "incoming", productId: 13, date: "2026-07-20", quantity: 12, unitPrice: 9.5, supplierId: 2, comment: "Dairy restock" },
    { id: 32, type: "outgoing", productId: 2, date: "2026-07-20", quantity: -8.2, unitPrice: 16, reason: "Kitchen", comment: "Monday service" },
    { id: 33, type: "outgoing", productId: 5, date: "2026-07-20", quantity: -10.5, unitPrice: 4.5, reason: "Kitchen", comment: "Sauces and salads" },
    { id: 34, type: "outgoing", productId: 16, date: "2026-07-20", quantity: -5.4, unitPrice: 8.2, reason: "Kitchen", comment: "Risotto" },
    { id: 35, type: "incoming", productId: 1, date: "2026-07-21", quantity: 12, unitPrice: 42, supplierId: 2, comment: "Week 2 meat delivery" },
    { id: 36, type: "incoming", productId: 4, date: "2026-07-21", quantity: 5, unitPrice: 34, supplierId: 3, comment: "Seafood restock" },
    { id: 37, type: "incoming", productId: 23, date: "2026-07-21", quantity: 18, unitPrice: 14, supplierId: 4, comment: "House wine keg" },
    { id: 38, type: "outgoing", productId: 1, date: "2026-07-21", quantity: -7.6, unitPrice: 42, reason: "Kitchen", comment: "Steak service" },
    { id: 39, type: "outgoing", productId: 4, date: "2026-07-21", quantity: -3.2, unitPrice: 34, reason: "Kitchen", comment: "Shrimp pasta" },
    { id: 40, type: "outgoing", productId: 18, date: "2026-07-21", quantity: -14, unitPrice: 2.4, reason: "Kitchen", comment: "Bread and prep" },
    { id: 41, type: "outgoing", productId: 21, date: "2026-07-21", quantity: -15, unitPrice: 11, reason: "Bar", comment: "Service" },
    { id: 42, type: "outgoing", productId: 22, date: "2026-07-21", quantity: -14, unitPrice: 9, reason: "Bar", comment: "Service" },
    { id: 43, type: "incoming", productId: 14, date: "2026-07-22", quantity: 15, unitPrice: 18, supplierId: 5, comment: "Oil restock" },
    { id: 44, type: "incoming", productId: 15, date: "2026-07-22", quantity: 24, unitPrice: 6.5, supplierId: 5, comment: "Oil restock" },
    { id: 45, type: "outgoing", productId: 3, date: "2026-07-22", quantity: -4.8, unitPrice: 38, reason: "Kitchen", comment: "Salmon orders" },
    { id: 46, type: "outgoing", productId: 11, date: "2026-07-22", quantity: -5.5, unitPrice: 21, reason: "Kitchen", comment: "Pizza station" },
    { id: 47, type: "outgoing", productId: 12, date: "2026-07-22", quantity: -3.2, unitPrice: 17, reason: "Kitchen", comment: "Sauces and pastry" },
    { id: 48, type: "outgoing", productId: 20, date: "2026-07-22", quantity: -2.8, unitPrice: 32, reason: "Bar", comment: "Coffee service" },
    { id: 49, type: "outgoing", productId: 23, date: "2026-07-22", quantity: -9.5, unitPrice: 14, reason: "Bar", comment: "Wine service" },
    { id: 50, type: "incoming", productId: 7, date: "2026-07-23", quantity: 36, unitPrice: 2.2, supplierId: 1, comment: "Root vegetables" },
    { id: 51, type: "incoming", productId: 10, date: "2026-07-23", quantity: 1800, unitPrice: 0.018, supplierId: 1, comment: "Herbs delivery" },
    { id: 52, type: "outgoing", productId: 5, date: "2026-07-23", quantity: -13.2, unitPrice: 4.5, reason: "Kitchen", comment: "Prep and service" },
    { id: 53, type: "outgoing", productId: 6, date: "2026-07-23", quantity: -7.5, unitPrice: 3.8, reason: "Kitchen", comment: "Salads" },
    { id: 54, type: "outgoing", productId: 9, date: "2026-07-23", quantity: -620, unitPrice: 0.035, reason: "Kitchen", comment: "Pesto batch" },
    { id: 55, type: "outgoing", productId: 24, date: "2026-07-23", quantity: -6.8, unitPrice: 4.2, reason: "Bar", comment: "Cocktails" },
    { id: 56, type: "outgoing", productId: 15, date: "2026-07-24", quantity: -8, unitPrice: 6.5, reason: "Kitchen", comment: "Fryer station" },
    { id: 57, type: "outgoing", productId: 17, date: "2026-07-24", quantity: -9.5, unitPrice: 5.6, reason: "Kitchen", comment: "Pasta service" },
    { id: 58, type: "outgoing", productId: 13, date: "2026-07-24", quantity: -7.2, unitPrice: 9.5, reason: "Kitchen", comment: "Sauce prep" },
    { id: 59, type: "outgoing", productId: 21, date: "2026-07-24", quantity: -18, unitPrice: 11, reason: "Bar", comment: "Friday service" },
    { id: 60, type: "outgoing", productId: 22, date: "2026-07-24", quantity: -20, unitPrice: 9, reason: "Bar", comment: "Friday service" },
    { id: 61, type: "outgoing", productId: 23, date: "2026-07-24", quantity: -11.5, unitPrice: 14, reason: "Bar", comment: "Friday wine service" },
    { id: 62, type: "outgoing", productId: 8, date: "2026-07-24", quantity: -10, unitPrice: 1.9, reason: "Kitchen", comment: "Prep" },
    { id: 63, type: "outgoing", productId: 19, date: "2026-07-24", quantity: -5, unitPrice: 2.9, reason: "Kitchen", comment: "Desserts" },
    { id: 64, type: "adjustment", productId: 3, date: "2026-07-24", quantity: -0.6, unitPrice: 38, reason: "Inventory", comment: "End of second week fish count" },
    { id: 65, type: "adjustment", productId: 20, date: "2026-07-24", quantity: -0.3, unitPrice: 32, reason: "Inventory", comment: "Coffee grinder waste" },
    { id: 66, type: "adjustment", productId: 21, date: "2026-07-24", quantity: 1, unitPrice: 11, reason: "Inventory", comment: "Found in terrace fridge" },
  ],
  inventoryDraft: {
    date: "",
    items: {},
  },
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "products", label: "Products" },
  { id: "incoming", label: "Incoming" },
  { id: "outgoing", label: "Outgoing" },
  { id: "inventory", label: "Inventory" },
  { id: "suppliers", label: "Suppliers" },
  { id: "reports", label: "Reports" },
];

const defaultUnits = ["kg", "gram", "liter", "piece", "package"];

const navIcons = {
  overview: `
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  `,
  products: `
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  `,
  incoming: `
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  `,
  outgoing: `
    <path d="M12 21V9" />
    <path d="m17 14-5-5-5 5" />
    <path d="M5 3h14" />
  `,
  inventory: `
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect width="8" height="4" x="8" y="2" rx="1" />
    <path d="m9 14 2 2 4-4" />
  `,
  suppliers: `
    <path d="M14 18V6a2 2 0 0 0-2-2H3v14Z" />
    <path d="M15 18H9" />
    <path d="M19 18h2v-5l-3-5h-4" />
    <circle cx="6.5" cy="18.5" r="2.5" />
    <circle cx="17.5" cy="18.5" r="2.5" />
  `,
  reports: `
    <path d="M3 3v18h18" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  `,
};

const app = document.querySelector("#app");
let currentSection = "overview";
let notice = "";
let state = loadState();
let cloudUser = null;
let cloudSyncPromise = Promise.resolve();
let editingProductId = null;
let editingSupplierId = null;
let sidebarWidth = window.innerWidth > 1100 ? 260 : 208;
let sidebarLayoutThresholds = { logo: 268, nav: 168, brand: 150, min: 88 };
let productEditorOpen = window.innerWidth > 1100;
let reportFilters = {
  from: "2026-07-13",
  to: today(),
  type: "all",
};
let activeReport = "movement";
let productFilters = {
  search: "",
  category: "all",
  status: "all",
};

function defaultReportFilters() {
  return {
    from: "2026-07-13",
    to: today(),
    type: "all",
  };
}

function defaultProductFilters() {
  return {
    search: "",
    category: "all",
    status: "all",
  };
}

const actionIcons = {
  plus: `<path d="M5 12h14" /><path d="M12 5v14" />`,
  printer: `<path d="M6 9V2h12v7" /><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><path d="M6 14h12v8H6z" />`,
  download: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="M7 10l5 5 5-5" /><path d="M12 15V3" />`,
  upload: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="M17 8l-5-5-5 5" /><path d="M12 3v12" />`,
  edit: `<path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />`,
  search: `<circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />`,
  arrowUpRight: `<path d="M7 7h10v10" /><path d="M7 17 17 7" />`,
  rotate: `<path d="M3 12a9 9 0 0 1 15-6.7L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-15 6.7L3 16" /><path d="M3 21v-5h5" />`,
  x: `<path d="M18 6 6 18" /><path d="m6 6 12 12" />`,
  check: `<path d="m20 6-11 11-5-5" />`,
  file: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /><path d="M8 13h8" /><path d="M8 17h5" />`,
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  const parsed = saved ? JSON.parse(saved) : structuredClone(seedState);

  if (parsed.seedVersion && parsed.seedVersion < SEED_VERSION && parsed.products?.length <= 5) {
    return normalizeState(structuredClone(seedState));
  }

  return normalizeState(parsed);
}

function normalizeState(value) {
  return {
    ...value,
    inventoryDraft: value.inventoryDraft || { date: "", items: {} },
  };
}

function saveState(message) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  notice = message;
  renderShell();
  queueCloudSync();
}

function showNotice(message) {
  notice = message;
  renderShell();
}

function resetLocalData() {
  if (!confirm("Reset all local inventory data and restore demo records?")) return;
  state = structuredClone(seedState);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  notice = "Inventory reset to demo records.";
  renderShell();
  queueCloudSync();
}

function isCloudEnabled() {
  return Boolean(supabase && cloudUser);
}

function cloudErrorMessage(error) {
  return error?.message || "Could not connect to Supabase.";
}

function cloudRowsToState(products, suppliers, movements, appState) {
  return normalizeState({
    seedVersion: SEED_VERSION,
    products: products.map((product) => ({
      id: Number(product.id),
      name: product.name,
      category: product.category,
      unit: product.unit,
      minStock: Number(product.minimum_stock),
      price: Number(product.purchase_price),
      openingStock: Number(product.opening_stock),
      active: product.is_active,
    })),
    suppliers: suppliers.map((supplier) => ({
      id: Number(supplier.id),
      name: supplier.name,
      phone: supplier.phone || "",
      contact: supplier.contact_person || "",
      note: supplier.comment || "",
    })),
    movements: movements.map((movement) => ({
      id: Number(movement.id),
      type: movement.movement_type,
      productId: Number(movement.product_id),
      supplierId: movement.supplier_id === null ? undefined : Number(movement.supplier_id),
      date: movement.movement_date,
      quantity: Number(movement.quantity_delta),
      unitPrice: Number(movement.unit_price),
      reason: movement.reason || "",
      comment: movement.comment || "",
    })),
    inventoryDraft: appState?.value && typeof appState.value === "object"
      ? appState.value
      : { date: "", items: {} },
  });
}

async function readCloudState() {
  const [productsResult, suppliersResult, movementsResult, appStateResult] = await Promise.all([
    supabase.from("products").select("*").order("id"),
    supabase.from("suppliers").select("*").order("id"),
    supabase.from("stock_movements").select("*").order("id"),
    supabase.from("app_state").select("value").eq("key", "inventory_draft").maybeSingle(),
  ]);

  const error = productsResult.error || suppliersResult.error || movementsResult.error || appStateResult.error;
  if (error) throw error;

  if (!productsResult.data.length && !suppliersResult.data.length && !movementsResult.data.length) {
    return null;
  }

  return cloudRowsToState(
    productsResult.data,
    suppliersResult.data,
    movementsResult.data,
    appStateResult.data,
  );
}

async function writeCloudState() {
  if (!isCloudEnabled()) return;

  const supplierRows = state.suppliers.map((supplier) => ({
    id: supplier.id,
    name: supplier.name,
    phone: supplier.phone || null,
    contact_person: supplier.contact || null,
    comment: supplier.note || null,
    is_active: true,
  }));
  const productRows = state.products.map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category,
    unit: product.unit,
    minimum_stock: product.minStock,
    purchase_price: product.price,
    opening_stock: product.openingStock,
    is_active: product.active,
  }));
  const movementRows = state.movements.map((movement) => ({
    id: movement.id,
    product_id: movement.productId,
    supplier_id: movement.supplierId || null,
    movement_type: movement.type,
    movement_date: movement.date,
    quantity_delta: movement.quantity,
    unit_price: movement.unitPrice,
    reason: movement.reason || null,
    comment: movement.comment || null,
  }));

  const operations = [
    supplierRows.length ? supabase.from("suppliers").upsert(supplierRows) : Promise.resolve({ error: null }),
    productRows.length ? supabase.from("products").upsert(productRows) : Promise.resolve({ error: null }),
  ];
  const [suppliersResult, productsResult] = await Promise.all(operations);
  if (suppliersResult.error || productsResult.error) throw suppliersResult.error || productsResult.error;

  if (movementRows.length) {
    const { error } = await supabase.from("stock_movements").upsert(movementRows);
    if (error) throw error;
  }

  const { error } = await supabase
    .from("app_state")
    .upsert({ key: "inventory_draft", value: state.inventoryDraft || { date: "", items: {} } });
  if (error) throw error;
}

function queueCloudSync() {
  if (!isCloudEnabled()) return;

  cloudSyncPromise = cloudSyncPromise
    .catch(() => undefined)
    .then(() => writeCloudState())
    .catch((error) => {
      notice = `Saved in this browser. Cloud sync failed: ${cloudErrorMessage(error)}`;
      renderShell();
    });
}

function renderCloudLoading() {
  app.innerHTML = `
    <main class="auth-screen">
      <div class="auth-panel">
        <span class="brand-mark"><img src="/hotel-marseille-logo.png" alt="Marseille Restaurant" /></span>
        <p class="eyebrow">Marseille Restaurant</p>
        <h1>Opening workspace</h1>
        <p>Connecting to the restaurant inventory.</p>
      </div>
    </main>
  `;
}

function renderAuthScreen(message = "") {
  app.innerHTML = `
    <main class="auth-screen">
      <form class="auth-panel" id="auth-form">
        <span class="brand-mark"><img src="/hotel-marseille-logo.png" alt="Marseille Restaurant" /></span>
        <p class="eyebrow">Marseille Restaurant</p>
        <h1>Sign in</h1>
        <p>Use the administrator account created in Supabase.</p>
        ${message ? `<div class="notice">${message}</div>` : ""}
        <label>Email<input type="email" name="email" autocomplete="email" required /></label>
        <label>Password<input type="password" name="password" autocomplete="current-password" required /></label>
        <button class="primary-button" type="submit">Sign in</button>
      </form>
    </main>
  `;

  document.querySelector("#auth-form")?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: String(form.get("email") || "").trim(),
      password: String(form.get("password") || ""),
    });
    if (error || !data.user) {
      renderAuthScreen(cloudErrorMessage(error || new Error("Sign-in failed.")));
      return;
    }
    await initializeApp();
  });
}

async function initializeApp() {
  if (!supabase) {
    renderShell();
    return;
  }

  renderCloudLoading();
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    renderAuthScreen(cloudErrorMessage(error));
    return;
  }
  if (!data.session?.user) {
    renderAuthScreen();
    return;
  }

  cloudUser = data.session.user;
  try {
    const remoteState = await readCloudState();
    if (remoteState) {
      state = remoteState;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } else {
      await writeCloudState();
    }
    renderShell();
  } catch (cloudError) {
    cloudUser = null;
    renderAuthScreen(`Database setup is incomplete. ${cloudErrorMessage(cloudError)}`);
  }
}

async function signOut() {
  if (!supabase) return;
  await supabase.auth.signOut();
  cloudUser = null;
  renderAuthScreen();
}

function nextId(items) {
  return items.length ? Math.max(...items.map((item) => item.id)) + 1 : 1;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function formatDate(dateValue) {
  if (!dateValue) return "";
  const [year, month, day] = String(dateValue).split("-");
  if (!year || !month || !day) return String(dateValue);
  return `${day}.${month}.${year}`;
}

function money(value) {
  return `₾${Number(value || 0).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function productById(id) {
  return state.products.find((product) => product.id === Number(id));
}

function supplierById(id) {
  return state.suppliers.find((supplier) => supplier.id === Number(id));
}

function stockFor(productId) {
  const product = productById(productId);
  const movementTotal = state.movements
    .filter((movement) => movement.productId === Number(productId))
    .reduce((sum, movement) => sum + Number(movement.quantity), 0);
  return roundStock((product?.openingStock || 0) + movementTotal);
}

function productValue(product) {
  return stockFor(product.id) * Number(product.price || 0);
}

function topStockProducts(limit = 5) {
  return state.products
    .slice()
    .sort((first, second) => productValue(second) - productValue(first))
    .slice(0, limit);
}

function totalStockValue() {
  return state.products.reduce((sum, product) => sum + productValue(product), 0);
}

function lowStockProducts() {
  return state.products.filter((product) => product.active && stockFor(product.id) <= Number(product.minStock || 0));
}

function roundStock(value) {
  return Math.round(Number(value || 0) * 1000) / 1000;
}

function movementAmount(movement) {
  return Math.abs(Number(movement.quantity || 0) * Number(movement.unitPrice || 0));
}

function signedMovementValue(movement) {
  return Number(movement.quantity || 0) * Number(movement.unitPrice || 0);
}

function daysAgo(days) {
  const date = new Date(`${today()}T00:00:00`);
  date.setDate(date.getDate() - days);
  return date.toISOString().slice(0, 10);
}

function movementsSince(days, type = null) {
  const from = daysAgo(days);
  return state.movements.filter((movement) => movement.date >= from && (!type || movement.type === type));
}

function movementValueTotal(movements) {
  return movements.reduce((sum, movement) => sum + movementAmount(movement), 0);
}

function movementLabel(type) {
  return {
    incoming: "Incoming",
    outgoing: "Outgoing",
    adjustment: "Inventory adjustment",
  }[type];
}

function productOptions(selectedId = "") {
  return state.products
    .filter((product) => product.active)
    .map((product) => `<option value="${product.id}" ${Number(selectedId) === product.id ? "selected" : ""}>${product.name}</option>`)
    .join("");
}

function firstActiveProduct() {
  return state.products.find((product) => product.active);
}

function positiveNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0;
}

function nonNegativeNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) && number >= 0;
}

function supplierOptions() {
  return state.suppliers
    .map((supplier) => `<option value="${supplier.id}">${supplier.name}</option>`)
    .join("");
}

function filteredMovements() {
  return state.movements.filter((movement) => {
    const afterFrom = !reportFilters.from || movement.date >= reportFilters.from;
    const beforeTo = !reportFilters.to || movement.date <= reportFilters.to;
    const matchesType = reportFilters.type === "all" || movement.type === reportFilters.type;
    return afterFrom && beforeTo && matchesType;
  });
}

function renderShell() {
  let shell = app.querySelector(".app-shell");

  if (!shell) {
    app.innerHTML = `
      <div class="app-shell" style="--sidebar-width: ${sidebarWidth}px">
        ${renderSidebar()}
        <div class="sidebar-resizer" id="sidebar-resizer" role="separator" aria-orientation="vertical" aria-label="Resize navigation"></div>
        <main class="main"></main>
      </div>
    `;
    shell = app.querySelector(".app-shell");
    bindSidebarResizer();
  }

  shell.style.setProperty("--sidebar-width", `${sidebarWidth}px`);
  shell.querySelector(".main").innerHTML = renderMain();
  updateNavigationState();
  updateSidebarPresentation();

  bindNavigation();
  bindGlobalActions();
  bindCurrentView();
  bindSelectBlur();
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <div class="brand">
        <span class="brand-mark">
          <img src="/hotel-marseille-logo.png" alt="" />
        </span>
        <div class="brand-copy">
          <p class="eyebrow">Marseille</p>
          <h1>Restaurant</h1>
        </div>
      </div>
      <nav class="nav" aria-label="Primary navigation">
        ${sections.map((section) => `
          <button class="nav-item" data-section="${section.id}" aria-label="${section.label}" title="${section.label}">
            <span class="nav-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                ${navIcons[section.id]}
              </svg>
            </span>
            <span class="nav-label">${section.label}</span>
          </button>
        `).join("")}
      </nav>
      ${cloudUser ? `
        <div class="sidebar-account">
          <span>${cloudUser.email || "Administrator"}</span>
          <button type="button" class="sidebar-sign-out" id="sign-out">Sign out</button>
        </div>
      ` : ""}
    </aside>
  `;
}

function renderMain() {
  return `
    <header class="topbar">
      <div>
        <p class="eyebrow">Stock control</p>
        <h2>${sections.find((section) => section.id === currentSection).label}</h2>
      </div>
      <div class="topbar-actions">
        <button class="ghost-button" data-section="reports">${icon("file")}Reports</button>
        <button class="primary-button" data-section="incoming">${icon("plus")}Add incoming</button>
      </div>
    </header>
    ${notice ? `<div class="notice">${notice}</div>` : ""}
    <section class="content">${renderSection()}</section>
  `;
}

function updateNavigationState() {
  document.querySelectorAll(".sidebar .nav-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.section === currentSection);
  });
}

function bindSidebarResizer() {
  const resizer = document.querySelector("#sidebar-resizer");
  if (!resizer) return;
  sidebarLayoutThresholds = measureSidebarLayoutThresholds();
  updateSidebarPresentation();

  const stopResize = () => {
    document.body.classList.remove("is-resizing-sidebar");
    resizer.classList.remove("is-resizing");
  };

  resizer.addEventListener("pointerdown", (event) => {
    if (window.innerWidth <= 760) return;
    event.preventDefault();
    resizer.setPointerCapture(event.pointerId);
    document.body.classList.add("is-resizing-sidebar");
    resizer.classList.add("is-resizing");
  });

  resizer.addEventListener("pointermove", (event) => {
    if (!resizer.hasPointerCapture(event.pointerId)) return;
    const maxWidth = Math.max(sidebarLayoutThresholds.min, Math.min(260, window.innerWidth - 520));
    sidebarWidth = Math.round(Math.min(maxWidth, Math.max(sidebarLayoutThresholds.min, event.clientX)));
    updateSidebarPresentation();
  });

  resizer.addEventListener("pointerup", stopResize);
  resizer.addEventListener("pointercancel", stopResize);
  resizer.addEventListener("lostpointercapture", stopResize);
}

function measureSidebarLayoutThresholds() {
  const sidebar = document.querySelector(".sidebar");
  const brand = document.querySelector(".brand");
  const brandCopy = document.querySelector(".brand-copy");
  const brandMark = document.querySelector(".brand-mark");
  const brandTitle = brandCopy?.querySelector("h1");
  const navItem = document.querySelector(".nav-item");
  const navIcon = document.querySelector(".nav-icon");
  const navLabels = [...document.querySelectorAll(".nav-label")];
  if (!sidebar || !brand || !brandCopy || !brandMark || !brandTitle || !navItem || !navIcon || !navLabels.length) return sidebarLayoutThresholds;

  const value = (styles, property) => Number.parseFloat(styles[property]) || 0;
  const sidebarStyles = getComputedStyle(sidebar);
  const brandStyles = getComputedStyle(brand);
  const navItemStyles = getComputedStyle(navItem);
  const longestLabel = Math.max(...navLabels.map((label) => label.scrollWidth));
  const sidebarPadding = value(sidebarStyles, "paddingLeft") + value(sidebarStyles, "paddingRight");
  const brandTextWidth = Math.max(brandCopy.scrollWidth, brandTitle.scrollWidth);
  const brandWidth = sidebarPadding
    + value(brandStyles, "marginLeft")
    + value(brandStyles, "marginRight")
    + value(brandStyles, "paddingLeft")
    + value(brandStyles, "paddingRight")
    + brandTextWidth;
  const brandThreshold = Math.max(128, Math.ceil(brandWidth));
  const navRequirement = sidebarPadding
    + navIcon.offsetWidth
    + value(navItemStyles, "gap")
    + value(navItemStyles, "paddingLeft")
    + value(navItemStyles, "paddingRight")
    + value(navItemStyles, "borderLeftWidth")
    + value(navItemStyles, "borderRightWidth")
    + longestLabel;
  const nav = Math.max(brandThreshold + 12, 150, Math.ceil(navRequirement));
  const withLogo = brandWidth + brandMark.offsetWidth + value(brandStyles, "gap");
  const logo = Math.max(nav + 32, Math.ceil(withLogo + 8));
  return { logo, nav, brand: brandThreshold, min: 88 };
}

function updateSidebarPresentation() {
  const shell = document.querySelector(".app-shell");
  shell?.style.setProperty("--sidebar-width", `${sidebarWidth}px`);
  shell?.classList.toggle("is-logo-hidden", sidebarWidth <= sidebarLayoutThresholds.logo);
  shell?.classList.toggle("is-sidebar-compact", sidebarWidth <= sidebarLayoutThresholds.nav);
  shell?.classList.toggle("is-sidebar-logo-only", sidebarWidth <= sidebarLayoutThresholds.brand);
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 760) return;
  const maxWidth = Math.max(sidebarLayoutThresholds.min, Math.min(260, window.innerWidth - 520));
  if (sidebarWidth > maxWidth) {
    sidebarWidth = maxWidth;
    renderShell();
  }
});

function bindSelectBlur() {
  document.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => select.blur());
  });
}

function resetViewState() {
  editingProductId = null;
  editingSupplierId = null;
  productEditorOpen = window.innerWidth > 1100;
  productFilters = defaultProductFilters();
  reportFilters = defaultReportFilters();
  activeReport = "movement";
}

function scrollPageTop() {
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.querySelector(".main")?.scrollTo?.({ top: 0, left: 0, behavior: "auto" });
  });
}

function navigateToSection(sectionId, options = {}) {
  const { reset = true, scroll = true } = options;
  if (reset) resetViewState();
  currentSection = sectionId;
  notice = "";
  renderShell();
  if (scroll) scrollPageTop();
}

function bindNavigation() {
  document.querySelectorAll("[data-section]").forEach((button) => {
    if (button.dataset.navigationBound) return;
    button.dataset.navigationBound = "true";
    button.addEventListener("click", () => {
      navigateToSection(button.dataset.section);
    });
  });
}

function bindCurrentView() {
  const binders = {
    overview: bindOverviewLocalActions,
    products: bindProducts,
    incoming: bindIncoming,
    outgoing: bindOutgoing,
    inventory: bindInventory,
    suppliers: bindSuppliers,
    reports: bindReports,
  };
  binders[currentSection]?.();
}

function bindGlobalActions() {
  document.querySelector("#export-data")?.addEventListener("click", exportLocalData);
  document.querySelector("#import-data")?.addEventListener("change", importLocalData);
  document.querySelector("#sign-out")?.addEventListener("click", signOut);
}

function renderSection() {
  const views = {
    overview: renderOverview,
    products: renderProducts,
    incoming: renderIncoming,
    outgoing: renderOutgoing,
    inventory: renderInventory,
    suppliers: renderSuppliers,
    reports: renderReports,
  };
  return views[currentSection]();
}

function icon(name) {
  return `
    <span class="button-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        ${actionIcons[name] || ""}
      </svg>
    </span>
  `;
}

function badge(label, tone = "neutral") {
  return `<span class="badge ${tone}">${label}</span>`;
}

function productCategories() {
  return [...new Set(state.products.map((product) => product.category).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function productUnits() {
  const customUnits = [...new Set(state.products.map((product) => product.unit).filter((unit) => unit && !defaultUnits.includes(unit)))];
  return [...defaultUnits, ...customUnits.sort((a, b) => a.localeCompare(b))];
}

function filteredProducts() {
  const search = productFilters.search.trim().toLowerCase();
  return state.products.filter((product) => {
    const matchesSearch = !search || [product.name, product.category, product.unit].some((value) => String(value).toLowerCase().includes(search));
    const matchesCategory = productFilters.category === "all" || product.category === productFilters.category;
    const matchesStatus =
      productFilters.status === "all" ||
      (productFilters.status === "active" && product.active) ||
      (productFilters.status === "inactive" && !product.active);

    return matchesSearch && matchesCategory && matchesStatus;
  });
}

function movementTone(type) {
  if (type === "incoming") return "success";
  if (type === "outgoing") return "danger";
  return "warning";
}

function reasonTone(reason = "") {
  if (["Write-off", "Spoilage"].includes(reason)) return "danger";
  if (["Staff", "Inventory"].includes(reason)) return "warning";
  if (["Kitchen", "Bar"].includes(reason)) return "info";
  return "neutral";
}

function renderOverview() {
  const lowStock = lowStockProducts();
  const incoming7 = movementsSince(7, "incoming");
  const outgoing7 = movementsSince(7, "outgoing");
  const latestMovements = state.movements.slice(-5).reverse();
  const valueLeaders = topStockProducts(5);
  return `
    <div class="metric-grid">
      <article class="metric-card">
        <div class="metric-card-header">
          <span class="metric-icon blue">${icon("file")}</span>
          <span>Stock value</span>
        </div>
        <strong>${money(totalStockValue())}</strong>
        <small>${state.products.filter((product) => product.active).length} active products</small>
      </article>
      <article class="metric-card">
        <div class="metric-card-header">
          <span class="metric-icon amber">${icon("search")}</span>
          <span>Low stock</span>
        </div>
        <strong>${lowStock.length}</strong>
        <small>${lowStock.length ? "Needs attention today" : "All products are above minimum"}</small>
      </article>
      <article class="metric-card">
        <div class="metric-card-header">
          <span class="metric-icon green">${icon("download")}</span>
          <span>7 day incoming</span>
        </div>
        <strong>${money(movementValueTotal(incoming7))}</strong>
        <small>${incoming7.length} received records</small>
      </article>
      <article class="metric-card">
        <div class="metric-card-header">
          <span class="metric-icon red">${icon("upload")}</span>
          <span>7 day outgoing</span>
        </div>
        <strong>${money(movementValueTotal(outgoing7))}</strong>
        <small>${outgoing7.length} usage records</small>
      </article>
    </div>

    <div class="dashboard-grid">
      <article class="panel">
        <div class="panel-header">
          <div>
            <p class="eyebrow">Activity</p>
            <h3>Latest movements</h3>
          </div>
          <button class="panel-link" data-section="reports" type="button" aria-label="Open movement report" title="Open movement report">${icon("arrowUpRight")}</button>
        </div>
        ${renderMovementList(latestMovements)}
      </article>

      <div class="dashboard-side">
        <article class="panel">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Attention</p>
              <h3>Low stock queue</h3>
            </div>
            <button class="panel-link" type="button" id="overview-low-stock" aria-label="Open low stock report" title="Open low stock report">${icon("arrowUpRight")}</button>
          </div>
          ${lowStock.length ? `
            <div class="priority-list">
              ${lowStock.slice(0, 3).map((product) => {
                const stock = stockFor(product.id);
                const shortage = roundStock(Math.max(0, Number(product.minStock || 0) - stock));
                return `
                  <div class="priority-row">
                    <div>
                      <strong>${product.name}</strong>
                      <span>${product.category} · minimum ${product.minStock} ${product.unit}</span>
                    </div>
                    <div class="priority-value">
                      ${badge(`${stock} ${product.unit}`, "warning")}
                      <small>short ${shortage}</small>
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          ` : `<p class="empty-state">No products need attention right now.</p>`}
        </article>

        <article class="panel">
          <div class="panel-header">
            <div>
              <p class="eyebrow">Value</p>
              <h3>Highest stock value</h3>
            </div>
            <button class="panel-link" data-section="products" type="button" aria-label="Open products" title="Open products">${icon("arrowUpRight")}</button>
          </div>
          <div class="value-list">
            ${valueLeaders.slice(0, 3).map((product, index) => `
              <div class="value-row">
                <span>${index + 1}</span>
                <div>
                  <strong>${product.name}</strong>
                  <small>${stockFor(product.id)} ${product.unit} · ${product.category}</small>
                </div>
                <b>${money(productValue(product))}</b>
              </div>
            `).join("")}
          </div>
        </article>
      </div>
    </div>
  `;
}

function renderProducts() {
  const editingProduct = editingProductId ? productById(editingProductId) : null;
  const visibleProducts = filteredProducts();
  const categories = productCategories();
  const units = productUnits();
  const hasActiveFilters = Boolean(productFilters.search || productFilters.category !== "all" || productFilters.status !== "all");
  const showSideProductEditor = productEditorOpen && !editingProduct;
  return `
    <div class="form-layout ${showSideProductEditor ? "" : "product-editor-closed"}">
      <article class="panel">
        <div class="panel-header">
          <div>
            <p class="eyebrow">Catalog</p>
            <h3>Product list</h3>
          </div>
          ${productEditorOpen ? "" : `<button class="small-button" id="open-product-editor" type="button">${icon("plus")}Add product</button>`}
        </div>
        <form class="table-toolbar" id="products-toolbar">
          <label class="search-field">
            ${icon("search")}
            <input name="search" value="${productFilters.search}" placeholder="Search products" />
          </label>
          <label>
            Category
            <select name="category">
              <option value="all">All categories</option>
              ${categories.map((category) => `
                <option value="${category}" ${productFilters.category === category ? "selected" : ""}>${category}</option>
              `).join("")}
            </select>
          </label>
          <label>
            Status
            <select name="status">
              <option value="all" ${productFilters.status === "all" ? "selected" : ""}>All statuses</option>
              <option value="active" ${productFilters.status === "active" ? "selected" : ""}>Active</option>
              <option value="inactive" ${productFilters.status === "inactive" ? "selected" : ""}>Inactive</option>
            </select>
          </label>
        </form>
        ${hasActiveFilters ? `<p class="filter-result-message">Showing ${visibleProducts.length} ${visibleProducts.length === 1 ? "product" : "products"}</p>` : ""}
        <div class="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Unit</th>
                <th class="numeric">Min stock</th>
                <th class="numeric">Price</th>
                <th class="numeric">Current stock</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${visibleProducts.length ? visibleProducts.map((product) => {
                const stock = stockFor(product.id);
                return `
                  <tr>
                    <td><strong>${product.name}</strong></td>
                    <td>${product.category}</td>
                    <td>${product.unit}</td>
                    <td class="numeric">${product.minStock}</td>
                    <td class="numeric">${money(product.price)}</td>
                    <td class="numeric ${stock <= product.minStock ? "danger-text" : ""}">${stock}</td>
                    <td>${badge(product.active ? "Active" : "Inactive", product.active ? "success" : "neutral")}</td>
                    <td>
                      <div class="row-actions table-row-actions">
                        <button class="small-button icon-only" aria-label="Edit ${product.name}" title="Edit" type="button" data-edit-product="${product.id}">${icon("edit")}</button>
                        <button class="${product.active ? "danger-button" : "small-button"} icon-only" aria-label="${product.active ? "Deactivate" : "Activate"} ${product.name}" title="${product.active ? "Deactivate" : "Activate"}" type="button" data-toggle-product="${product.id}">${icon(product.active ? "x" : "check")}</button>
                      </div>
                    </td>
                  </tr>
                  ${editingProduct?.id === product.id ? `
                    <tr class="inline-editor-row">
                      <td colspan="8">
                        ${renderProductEditor(editingProduct, categories, units, "inline")}
                      </td>
                    </tr>
                  ` : ""}
                `;
              }).join("") : `<tr><td colspan="8"><p class="empty-state">No products match these filters.</p></td></tr>`}
            </tbody>
          </table>
        </div>
      </article>

      ${showSideProductEditor ? renderProductEditor(null, categories, units, "side") : ""}
    </div>
  `;
}

function renderProductEditor(editingProduct, categories, units, placement = "side") {
  const productCategory = editingProduct?.category || "Herbs";
  const isNewCategory = !categories.includes(productCategory);
  const productUnit = editingProduct?.unit || "kg";
  const isNewUnit = !units.includes(productUnit);
  const panelClass = placement === "inline" ? "product-editor inline-product-editor" : "panel product-editor";

  return `
    <article class="${panelClass}" id="product-editor-panel">
      <div class="panel-header">
        <div>
          <p class="eyebrow">${editingProduct ? "Editing item" : "New item"}</p>
          <h3>${editingProduct ? "Edit product" : "Add product"}</h3>
        </div>
        <button class="small-button icon-only" id="close-product-editor" type="button" aria-label="Close product editor" title="Close">${icon("x")}</button>
      </div>
      <form class="work-form ${placement === "inline" ? "inline-product-form" : "single-column"}" id="product-form">
        ${editingProduct ? `<input type="hidden" name="id" value="${editingProduct.id}" />` : ""}
        ${textInput("Name", "name", editingProduct?.name || "Fresh basil", true)}
        <div class="field-choice-control">
          <div class="field-label-row">
            <span>Category</span>
            <button class="small-button compact field-choice-button" type="button" id="toggle-category-mode" data-mode="${isNewCategory ? "new" : "saved"}">
              ${isNewCategory ? `${icon("check")}Saved categories` : `${icon("plus")}New category`}
            </button>
          </div>
          <select name="category" id="saved-category" ${isNewCategory ? "hidden disabled" : ""}>
            ${categories.map((category) => `<option value="${category}" ${productCategory === category ? "selected" : ""}>${category}</option>`).join("")}
          </select>
          <input name="category" id="new-category" type="text" value="${isNewCategory ? productCategory : ""}" placeholder="New category name" ${isNewCategory ? "required" : "hidden disabled"} />
        </div>
        <div class="field-choice-control">
          <div class="field-label-row">
            <span>Unit</span>
            <button class="small-button compact field-choice-button" type="button" id="toggle-unit-mode" data-mode="${isNewUnit ? "new" : "saved"}">
              ${isNewUnit ? `${icon("check")}Saved units` : `${icon("plus")}New unit`}
            </button>
          </div>
          <select name="unit" id="saved-unit" ${isNewUnit ? "hidden disabled" : ""}>
            ${units.map((unit) => `<option value="${unit}" ${productUnit === unit ? "selected" : ""}>${unit}</option>`).join("")}
          </select>
          <input name="unit" id="new-unit" type="text" value="${isNewUnit ? productUnit : ""}" placeholder="New unit name" ${isNewUnit ? "required" : "hidden disabled"} />
        </div>
        ${numberInput("Opening stock", "openingStock", String(editingProduct?.openingStock ?? 0), true)}
        ${numberInput("Minimum stock", "minStock", String(editingProduct?.minStock ?? 2), true)}
        ${numberInput("Purchase price", "price", formatEditablePrice(editingProduct?.price ?? 6), true)}
        <label class="checkbox-line">
          <input type="checkbox" name="active" ${editingProduct?.active === false ? "" : "checked"} />
          Active product
        </label>
        <div class="form-actions">
          <button class="primary-button product-submit-button" type="submit">${icon("plus")}${editingProduct ? "Update product" : "Save product"}</button>
        </div>
      </form>
    </article>
  `;
}

function renderIncoming() {
  const defaultProduct = firstActiveProduct();
  const defaultPrice = defaultProduct?.price || 0;
  const recentIncoming = movementsSince(7, "incoming");
  return `
    <div class="form-layout">
      <article class="panel">
        <div class="panel-header">
          <div>
            <p class="eyebrow">Receiving</p>
            <h3>Add incoming goods</h3>
          </div>
        </div>
        <form class="work-form" id="incoming-form">
          ${dateInput("Date", "date", today())}
          <label>
            Supplier
            <select name="supplierId">${supplierOptions()}</select>
          </label>
          <label>
            Product
            <select name="productId">${productOptions()}</select>
          </label>
          ${numberInput("Quantity", "quantity", "5", true)}
          ${numberInput("Unit price", "unitPrice", String(defaultPrice), true)}
          <label>
            Total
            <input name="total" value="${money(defaultPrice * 5)}" readonly />
          </label>
          <label class="wide">
            Comment
            <textarea name="comment" placeholder="Invoice number or delivery notes"></textarea>
          </label>
          <button class="primary-button wide" type="submit">${icon("plus")}Save incoming</button>
        </form>
      </article>
      <article class="info-panel support-panel">
        <p class="eyebrow">Receiving status</p>
        <h3>Stock increases</h3>
        <div class="support-stat-grid">
          <div>
            <span>7 day receipts</span>
            <strong>${recentIncoming.length}</strong>
          </div>
          <div>
            <span>Received value</span>
            <strong>${money(movementValueTotal(recentIncoming))}</strong>
          </div>
        </div>
        <ul class="support-list">
          <li>${badge(String(state.suppliers.length), "info")} suppliers available</li>
          <li>${badge(String(state.products.filter((product) => product.active).length), "success")} active products</li>
          <li>${badge("History", "neutral")} every receipt is saved as a movement</li>
        </ul>
      </article>
    </div>
  `;
}

function renderOutgoing() {
  const defaultProduct = firstActiveProduct();
  const recentOutgoing = movementsSince(7, "outgoing");
  const lowStockCount = lowStockProducts().length;
  return `
    <div class="form-layout">
      <article class="panel">
        <div class="panel-header">
          <div>
            <p class="eyebrow">Usage</p>
            <h3>Add outgoing goods</h3>
          </div>
        </div>
        <form class="work-form" id="outgoing-form">
          ${dateInput("Date", "date", today())}
          <label>
            Product
            <select name="productId">${productOptions()}</select>
          </label>
          ${numberInput("Quantity", "quantity", "2", true)}
          <label>
            Stock after
            <input name="stockAfter" value="${defaultProduct ? roundStock(stockFor(defaultProduct.id) - 2) : 0}" readonly />
          </label>
          <label>
            Reason
            <select name="reason">
              <option>Kitchen</option>
              <option>Bar</option>
              <option>Write-off</option>
              <option>Spoilage</option>
              <option>Staff</option>
              <option>Other</option>
            </select>
          </label>
          <label class="wide">
            Comment
            <textarea name="comment" placeholder="Optional details"></textarea>
          </label>
          <button class="primary-button wide" type="submit">${icon("plus")}Save outgoing</button>
        </form>
      </article>
      <article class="info-panel support-panel">
        <p class="eyebrow">Usage status</p>
        <h3>Stock decreases</h3>
        <div class="support-stat-grid">
          <div>
            <span>7 day usage</span>
            <strong>${recentOutgoing.length}</strong>
          </div>
          <div>
            <span>Usage value</span>
            <strong>${money(movementValueTotal(recentOutgoing))}</strong>
          </div>
        </div>
        <ul class="support-list">
          <li>${badge(String(lowStockCount), lowStockCount ? "warning" : "success")} low stock products</li>
          <li>${badge("Guarded", "info")} warns before negative stock</li>
          <li>${badge("Traceable", "neutral")} reason and comment stay in history</li>
        </ul>
      </article>
    </div>
  `;
}

function renderInventory() {
  const draft = state.inventoryDraft || { date: "", items: {} };
  const activeProducts = state.products.filter((product) => product.active);
  const summary = inventorySummary(draft);

  return `
    <article class="panel">
      <form id="inventory-form">
        <div class="panel-header">
          <div>
            <p class="eyebrow">Monthly check</p>
            <h3>Inventory count</h3>
          </div>
          <label class="date-filter">
            Date
            <input type="date" name="date" value="${draft.date || today()}" />
          </label>
        </div>
        <div class="inventory-summary">
          <div>
            <span>Changed rows</span>
            <strong id="inventory-change-count">${summary.changedRows}</strong>
          </div>
          <div>
            <span>Difference value</span>
            <strong id="inventory-difference-value">${money(summary.differenceValue)}</strong>
          </div>
          <div>
            <span>Draft status</span>
            <strong>${summary.hasDraft ? (isCloudEnabled() ? "Saved to cloud" : "Saved in browser") : "Not saved"}</strong>
          </div>
        </div>
        <div class="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th class="numeric">System stock</th>
                <th class="numeric">Actual stock</th>
                <th class="numeric">Difference</th>
                <th class="numeric">Difference value</th>
                <th>Comment</th>
              </tr>
            </thead>
            <tbody>
              ${activeProducts.map((product) => {
                const stock = stockFor(product.id);
                const draftItem = draft.items[String(product.id)] || {};
                const actual = draftItem.actual ?? stock;
                const diff = roundStock(Number(actual || 0) - stock);
                return `
                  <tr>
                    <td><strong>${product.name}</strong></td>
                    <td class="numeric">${stock} ${product.unit}</td>
                    <td class="numeric"><input class="table-input numeric" type="number" step="0.001" name="actual-${product.id}" value="${actual}" /></td>
                    <td class="numeric ${diff !== 0 ? "danger-text" : ""}" data-diff="${product.id}">${diff}</td>
                    <td class="numeric" data-value="${product.id}">${money(diff * product.price)}</td>
                    <td><input class="table-input comment-input" name="comment-${product.id}" value="${draftItem.comment || ""}" placeholder="Optional" /></td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
        <div class="panel-footer">
          <button class="ghost-button" type="button" id="inventory-save-draft">${icon("file")}Save draft</button>
          <button class="ghost-button" type="button" id="inventory-clear-draft">${icon("x")}Clear draft</button>
          <button class="primary-button" type="submit">${icon("check")}Confirm inventory</button>
        </div>
      </form>
    </article>
  `;
}

function collectInventoryDraft(form) {
  const items = {};
  state.products.filter((product) => product.active).forEach((product) => {
    items[String(product.id)] = {
      actual: Number(form[`actual-${product.id}`].value || 0),
      comment: form[`comment-${product.id}`].value.trim(),
    };
  });

  return {
    date: form.date.value || today(),
    items,
  };
}

function inventorySummary(draft = state.inventoryDraft) {
  const items = draft?.items || {};
  return state.products
    .filter((product) => product.active)
    .reduce(
      (summary, product) => {
        const stock = stockFor(product.id);
        const draftItem = items[String(product.id)];
        const actual = draftItem ? Number(draftItem.actual || 0) : stock;
        const diff = roundStock(actual - stock);

        if (draftItem) summary.hasDraft = true;
        if (diff !== 0) summary.changedRows += 1;
        summary.differenceValue += diff * Number(product.price || 0);
        return summary;
      },
      { changedRows: 0, differenceValue: 0, hasDraft: Boolean(draft?.date) },
    );
}

function renderSuppliers() {
  const editingSupplier = editingSupplierId ? supplierById(editingSupplierId) : null;
  return `
    <div class="form-layout">
      <div class="cards-grid two-columns">
        ${state.suppliers.map((supplier) => `
          <article class="supplier-card">
            <div class="card-title-row">
              <div>
                <p class="eyebrow">Supplier</p>
                <h3>${supplier.name}</h3>
              </div>
              <button class="small-button icon-only" aria-label="Edit ${supplier.name}" title="Edit" type="button" data-edit-supplier="${supplier.id}">${icon("edit")}</button>
            </div>
            <dl>
              <div><dt>Phone</dt><dd>${supplier.phone || "Not set"}</dd></div>
              <div><dt>Contact</dt><dd>${supplier.contact || "Not set"}</dd></div>
              <div><dt>Comment</dt><dd>${supplier.note || "No comment"}</dd></div>
            </dl>
          </article>
        `).join("")}
      </div>
      <article class="panel">
        <div class="panel-header">
          <div>
            <p class="eyebrow">${editingSupplier ? "Editing partner" : "Partner"}</p>
            <h3>${editingSupplier ? "Edit supplier" : "Add supplier"}</h3>
          </div>
        </div>
        <form class="work-form single-column" id="supplier-form">
          ${editingSupplier ? `<input type="hidden" name="id" value="${editingSupplier.id}" />` : ""}
          ${textInput("Name", "name", editingSupplier?.name || "Local Farm Co.", true)}
          ${textInput("Phone", "phone", editingSupplier?.phone || "+995", false)}
          ${textInput("Contact person", "contact", editingSupplier?.contact || "Mariam", false)}
          <label>
            Comment
            <textarea name="note" placeholder="Delivery terms, notes, categories">${editingSupplier?.note || ""}</textarea>
          </label>
          <div class="form-actions">
            ${editingSupplier ? `<button class="ghost-button" id="cancel-supplier-edit" type="button">Cancel</button>` : ""}
            <button class="primary-button" type="submit">${icon("plus")}${editingSupplier ? "Update supplier" : "Save supplier"}</button>
          </div>
        </form>
      </article>
    </div>
  `;
}

function renderReports() {
  const reportMovements = filteredMovements();
  const selectedMovements = movementsForActiveReport(reportMovements);
  const report = reportDefinition(activeReport);
  const summary = reportSummary(selectedMovements);
  const reportPeriod = `${formatDate(reportFilters.from)} - ${formatDate(reportFilters.to)}`;

  return `
    <div class="reports-layout">
      <section class="report-workspace">
        <article class="panel">
          <div class="report-menu">
            <p class="eyebrow">Choose report</p>
            <div class="report-menu-list">
              ${reportDefinitions().map((item) => `
                <button class="report-option ${activeReport === item.id ? "is-selected" : ""}" type="button" data-open-report="${item.id}">
                  <span class="report-option-icon">${icon(item.icon)}</span>
                  <strong>${item.title}</strong>
                  <span>${item.description}</span>
                </button>
              `).join("")}
            </div>
          </div>
          <form class="report-filters" id="report-filters">
            <label>
              From
              <input type="date" name="from" value="${reportFilters.from}" />
            </label>
            <label>
              To
              <input type="date" name="to" value="${reportFilters.to}" />
            </label>
          </form>
        </article>

        <article class="panel">
          <div class="print-heading">
            <p>Marseille Restaurant</p>
            <h2>${report.title}</h2>
            <span>${reportPeriod}</span>
          </div>
          <div class="panel-header">
            <div>
              <p class="eyebrow">${report.kicker}</p>
              <h3>${report.title}</h3>
              <p class="report-period">${reportPeriod}</p>
            </div>
            <div class="row-actions">
              <button class="small-button" type="button" id="print-report">${icon("printer")}Print</button>
              <button class="small-button" type="button" id="export-report">${icon("download")}Export</button>
            </div>
          </div>
          <div class="report-summary-grid">
            ${summary.map((item) => `
              <div>
                <span>${item.label}</span>
                <strong>${item.value}</strong>
              </div>
            `).join("")}
          </div>
          ${renderReportContent(selectedMovements)}
        </article>

        <article class="panel local-data-panel">
          <div>
            <p class="eyebrow">Local data</p>
            <h3>Backup and restore</h3>
          </div>
          <p>Use these actions only for local browser data. Later this area can move into account settings.</p>
          <div class="row-actions">
            <button class="ghost-button" id="export-data" type="button">${icon("download")}Export backup</button>
            <label class="import-button">
              ${icon("upload")}
              Import backup
              <input id="import-data" type="file" accept="application/json" />
            </label>
            <button class="danger-button" id="reset-data" type="button">${icon("rotate")}Reset demo data</button>
          </div>
        </article>
      </section>
    </div>
  `;
}

function reportDefinitions() {
  return [
    {
      id: "movement",
      title: "Movement journal",
      kicker: "All stock changes",
      icon: "file",
      description: "Every incoming, outgoing, and inventory correction.",
    },
    {
      id: "incoming",
      title: "Incoming goods",
      kicker: "Purchases",
      icon: "download",
      description: "What was received from suppliers in the period.",
    },
    {
      id: "outgoing",
      title: "Outgoing and write-offs",
      kicker: "Usage",
      icon: "upload",
      description: "Kitchen, bar, spoilage, staff, and other usage.",
    },
    {
      id: "lowStock",
      title: "Low stock products",
      kicker: "Action needed",
      icon: "search",
      description: "Products that are at or below minimum stock.",
    },
    {
      id: "inventory",
      title: "Inventory differences",
      kicker: "Corrections",
      icon: "check",
      description: "Confirmed stock corrections from inventory counts.",
    },
  ];
}

function reportDefinition(id) {
  return reportDefinitions().find((report) => report.id === id) || reportDefinitions()[0];
}

function movementsForActiveReport(baseMovements) {
  const typeByReport = {
    movement: null,
    incoming: "incoming",
    outgoing: "outgoing",
    inventory: "adjustment",
  };
  const type = typeByReport[activeReport];
  return type ? baseMovements.filter((movement) => movement.type === type) : baseMovements;
}

function reportSummary(movements) {
  if (activeReport === "lowStock") {
    const items = lowStockProducts();
    const gap = items.reduce((sum, product) => sum + Math.max(0, product.minStock - stockFor(product.id)), 0);
    return [
      { label: "Low stock items", value: String(items.length) },
      { label: "Current value", value: money(items.reduce((sum, product) => sum + productValue(product), 0)) },
      { label: "Total shortage", value: roundStock(gap) },
    ];
  }

  return [
    { label: "Records", value: String(movements.length) },
    { label: "Total value", value: money(movements.reduce((sum, movement) => sum + movementAmount(movement), 0)) },
    { label: "Net stock value", value: money(movements.reduce((sum, movement) => sum + signedMovementValue(movement), 0)) },
  ];
}

function renderReportContent(movements) {
  if (activeReport === "lowStock") {
    return renderLowStockReport();
  }

  return renderMovementTable(movements.slice().reverse());
}

function renderLowStockReport() {
  const items = lowStockProducts();
  if (!items.length) return `<p class="empty-state">No low stock products.</p>`;

  return `
    <div class="table-scroll inline-report-table">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th class="numeric">Current stock</th>
            <th class="numeric">Minimum stock</th>
            <th class="numeric">Value</th>
          </tr>
        </thead>
        <tbody>
          ${items.map((product) => `
            <tr>
              <td><strong>${product.name}</strong></td>
              <td>${product.category}</td>
              <td class="numeric danger-text">${stockFor(product.id)} ${product.unit}</td>
              <td class="numeric">${product.minStock} ${product.unit}</td>
              <td class="numeric">${money(productValue(product))}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderMovementTable(items) {
  if (!items.length) return "";

  return `
    <div class="table-scroll report-table">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Product</th>
            <th class="numeric">Quantity</th>
            <th class="numeric">Value</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          ${items.map((movement) => {
            const product = productById(movement.productId);
            const supplier = supplierById(movement.supplierId);
            const quantity = `${movement.quantity > 0 ? "+" : ""}${roundStock(movement.quantity)} ${product?.unit || ""}`;
            const detail = movement.type === "incoming" ? supplier?.name : movement.reason;
            const detailBadge = movement.type === "outgoing" && movement.reason ? badge(movement.reason, reasonTone(movement.reason)) : "";
            return `
              <tr>
                <td>${formatDate(movement.date)}</td>
                <td>${badge(movementLabel(movement.type), movementTone(movement.type))}</td>
                <td>${product?.name || "Deleted product"}</td>
                <td class="numeric">${quantity}</td>
                <td class="numeric">${money(movementAmount(movement))}</td>
                <td>${detailBadge || detail || ""}${movement.comment ? `<span class="detail-note">${movement.comment}</span>` : ""}</td>
              </tr>
            `;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderMovementList(items) {
  if (!items.length) {
    return `<p class="empty-state">No movements yet.</p>`;
  }

  return `
    <div class="movement-list">
      ${items.map((movement) => {
        const product = productById(movement.productId);
        const supplier = supplierById(movement.supplierId);
        const quantity = `${movement.quantity > 0 ? "+" : ""}${roundStock(movement.quantity)} ${product?.unit || ""}`;
        const detail = movement.type === "incoming" ? supplier?.name : movement.reason;
        return `
          <div class="movement-row">
            <div class="movement-main">
              <div class="movement-type">
                ${badge(movementLabel(movement.type), movementTone(movement.type))}
              </div>
              <strong>${product?.name || "Deleted product"}</strong>
              <span class="movement-detail">${formatDate(movement.date)}${detail ? ` · ${detail}` : ""}</span>
              ${movement.comment ? `<small>${movement.comment}</small>` : ""}
            </div>
            <div class="movement-amount">
              <strong>${quantity}</strong>
              <span>${money(movementAmount(movement))}</span>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function bindProducts() {
  const toolbar = document.querySelector("#products-toolbar");
  toolbar?.addEventListener("input", (event) => {
    if (event.target.name !== "search") return;
    const cursorPosition = event.target.selectionStart;
    productFilters.search = event.target.value;
    renderShell();
    const searchInput = document.querySelector("#products-toolbar input[name='search']");
    searchInput?.focus();
    searchInput?.setSelectionRange(cursorPosition, cursorPosition);
  });
  toolbar?.addEventListener("change", (event) => {
    if (!["category", "status"].includes(event.target.name)) return;
    productFilters[event.target.name] = event.target.value;
    renderShell();
  });

  const productForm = document.querySelector("#product-form");
  const categoryModeButton = document.querySelector("#toggle-category-mode");
  const savedCategory = document.querySelector("#saved-category");
  const newCategory = document.querySelector("#new-category");
  const unitModeButton = document.querySelector("#toggle-unit-mode");
  const savedUnit = document.querySelector("#saved-unit");
  const newUnit = document.querySelector("#new-unit");
  bindChoiceMode(categoryModeButton, savedCategory, newCategory, "New category", "Saved categories");
  bindChoiceMode(unitModeButton, savedUnit, newUnit, "New unit", "Saved units");

  document.querySelector("#open-product-editor")?.addEventListener("click", () => {
    productEditorOpen = true;
    editingProductId = null;
    notice = "";
    renderShell();
  });

  productForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const productPayload = {
      name: form.get("name").trim(),
      category: form.get("category").trim(),
      unit: form.get("unit").trim(),
      openingStock: Number(form.get("openingStock")),
      minStock: Number(form.get("minStock")),
      price: Number(form.get("price")),
      active: form.get("active") === "on",
    };

    if (!productPayload.name || !productPayload.category || !productPayload.unit) {
      showNotice("Product name, category, and unit are required.");
      return;
    }

    if (
      !nonNegativeNumber(productPayload.openingStock) ||
      !nonNegativeNumber(productPayload.minStock) ||
      !nonNegativeNumber(productPayload.price)
    ) {
      showNotice("Opening stock, minimum stock, and purchase price must be zero or higher.");
      return;
    }

    if (form.get("id")) {
      const product = productById(form.get("id"));
      Object.assign(product, productPayload);
      editingProductId = null;
      saveState("Product updated.");
      return;
    }

    state.products.push({
      id: nextId(state.products),
      ...productPayload,
    });
    saveState("Product saved.");
  });

  document.querySelectorAll("[data-edit-product]").forEach((button) => {
    button.addEventListener("click", () => {
      editingProductId = Number(button.dataset.editProduct);
      productEditorOpen = true;
      notice = "";
      renderShell();
      requestAnimationFrame(() => {
        document.querySelector("#product-form input[name='name']")?.focus({ preventScroll: true });
      });
    });
  });

  document.querySelector("#close-product-editor")?.addEventListener("click", () => {
    editingProductId = null;
    productEditorOpen = false;
    notice = "";
    renderShell();
  });

  document.querySelectorAll("[data-toggle-product]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = productById(button.dataset.toggleProduct);
      if (product.active && !confirm(`Deactivate ${product.name}? History will stay untouched.`)) {
        return;
      }
      product.active = !product.active;
      if (editingProductId === product.id) editingProductId = null;
      saveState(product.active ? "Product activated." : "Product deactivated. History preserved.");
    });
  });
}

function bindChoiceMode(button, savedField, newField, newLabel, savedLabel) {
  button?.addEventListener("click", () => {
    const useNewValue = button.dataset.mode !== "new";
    button.dataset.mode = useNewValue ? "new" : "saved";
    button.innerHTML = useNewValue
      ? `${icon("check")}${savedLabel}`
      : `${icon("plus")}${newLabel}`;
    savedField.hidden = useNewValue;
    savedField.disabled = useNewValue;
    newField.hidden = !useNewValue;
    newField.disabled = !useNewValue;
    newField.required = useNewValue;
    if (useNewValue) newField.focus();
  });
}

function bindOverviewLocalActions() {
  document.querySelector("#overview-low-stock")?.addEventListener("click", () => {
    resetViewState();
    activeReport = "lowStock";
    reportFilters = {
      ...reportFilters,
      type: "all",
    };
    navigateToSection("reports", { reset: false });
  });
}

function bindIncoming() {
  const form = document.querySelector("#incoming-form");
  if (!form) return;
  const syncProductPrice = () => {
    const product = productById(form.productId.value);
    if (product) form.unitPrice.value = product.price;
    updateTotal();
  };
  const updateTotal = () => {
    const quantity = Number(form.quantity.value || 0);
    const unitPrice = Number(form.unitPrice.value || 0);
    form.total.value = money(quantity * unitPrice);
  };
  form.productId.addEventListener("change", syncProductPrice);
  form.quantity.addEventListener("input", updateTotal);
  form.unitPrice.addEventListener("input", updateTotal);
  syncProductPrice();
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const quantity = Number(data.get("quantity"));
    const unitPrice = Number(data.get("unitPrice"));

    if (!data.get("productId")) {
      showNotice("Choose a product before saving incoming goods.");
      return;
    }

    if (!positiveNumber(quantity)) {
      showNotice("Incoming quantity must be greater than zero.");
      return;
    }

    if (!nonNegativeNumber(unitPrice)) {
      showNotice("Incoming unit price must be zero or higher.");
      return;
    }

    state.movements.push({
      id: nextId(state.movements),
      type: "incoming",
      productId: Number(data.get("productId")),
      supplierId: Number(data.get("supplierId")),
      date: data.get("date"),
      quantity,
      unitPrice,
      comment: data.get("comment").trim(),
    });
    saveState("Incoming movement saved. Stock increased.");
  });
}

function bindOutgoing() {
  const form = document.querySelector("#outgoing-form");
  if (!form) return;
  const updateStockAfter = () => {
    const product = productById(form.productId.value);
    const quantity = Number(form.quantity.value || 0);
    form.stockAfter.value = product ? roundStock(stockFor(product.id) - quantity) : 0;
  };
  form.productId.addEventListener("change", updateStockAfter);
  form.quantity.addEventListener("input", updateStockAfter);
  updateStockAfter();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const productId = Number(data.get("productId"));
    const quantity = Number(data.get("quantity"));
    const product = productById(productId);
    const currentStock = stockFor(productId);

    if (!product) {
      showNotice("Choose a product before saving outgoing goods.");
      return;
    }

    if (!positiveNumber(quantity)) {
      showNotice("Outgoing quantity must be greater than zero.");
      return;
    }

    if (quantity > currentStock && !confirm(`${product.name} stock will go below zero. Save anyway?`)) {
      return;
    }

    state.movements.push({
      id: nextId(state.movements),
      type: "outgoing",
      productId,
      date: data.get("date"),
      quantity: -Math.abs(quantity),
      unitPrice: Number(product.price),
      reason: data.get("reason"),
      comment: data.get("comment").trim(),
    });
    saveState("Outgoing movement saved. Stock decreased.");
  });
}

function bindInventory() {
  const form = document.querySelector("#inventory-form");
  if (!form) return;

  const recalculate = () => {
    state.products.filter((product) => product.active).forEach((product) => {
      const actual = Number(form[`actual-${product.id}`].value || 0);
      const diff = roundStock(actual - stockFor(product.id));
      const diffCell = form.querySelector(`[data-diff="${product.id}"]`);
      const valueCell = form.querySelector(`[data-value="${product.id}"]`);
      diffCell.textContent = diff;
      diffCell.classList.toggle("danger-text", diff !== 0);
      valueCell.textContent = money(diff * product.price);
    });

    const liveSummary = inventorySummary(collectInventoryDraft(form));
    form.querySelector("#inventory-change-count").textContent = liveSummary.changedRows;
    form.querySelector("#inventory-difference-value").textContent = money(liveSummary.differenceValue);
  };

  form.querySelectorAll("input").forEach((input) => input.addEventListener("input", recalculate));
  form.querySelector("#inventory-save-draft").addEventListener("click", () => {
    state.inventoryDraft = collectInventoryDraft(form);
    saveState("Inventory draft saved.");
  });
  form.querySelector("#inventory-clear-draft").addEventListener("click", () => {
    if (!confirm("Clear current inventory draft?")) return;
    state.inventoryDraft = { date: "", items: {} };
    saveState("Inventory draft cleared.");
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const draft = collectInventoryDraft(form);
    const date = draft.date;
    const adjustments = state.products
      .filter((product) => product.active)
      .map((product) => {
        const draftItem = draft.items[String(product.id)];
        const diff = roundStock(Number(draftItem.actual || 0) - stockFor(product.id));
        return { product, diff, comment: draftItem.comment };
      })
      .filter((item) => item.diff !== 0);

    if (!adjustments.length) {
      state.inventoryDraft = { date: "", items: {} };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      saveState("Inventory checked. No stock differences found.");
      return;
    }

    if (!confirm(`Confirm ${adjustments.length} inventory adjustment(s)?`)) {
      return;
    }

    adjustments.forEach(({ product, diff, comment }) => {
      state.movements.push({
        id: nextId(state.movements),
        type: "adjustment",
        productId: product.id,
        date,
        quantity: diff,
        unitPrice: Number(product.price),
        reason: "Inventory",
        comment,
      });
    });
    state.inventoryDraft = { date: "", items: {} };
    saveState("Inventory confirmed. Stock adjusted through movement history.");
  });
}

function bindSuppliers() {
  document.querySelector("#supplier-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const supplierPayload = {
      name: form.get("name").trim(),
      phone: form.get("phone").trim(),
      contact: form.get("contact").trim(),
      note: form.get("note").trim(),
    };

    if (!supplierPayload.name) {
      notice = "Supplier name is required.";
      renderShell();
      return;
    }

    if (form.get("id")) {
      const supplier = supplierById(form.get("id"));
      Object.assign(supplier, supplierPayload);
      editingSupplierId = null;
      saveState("Supplier updated.");
      return;
    }

    state.suppliers.push({
      id: nextId(state.suppliers),
      ...supplierPayload,
    });
    saveState("Supplier saved.");
  });

  document.querySelectorAll("[data-edit-supplier]").forEach((button) => {
    button.addEventListener("click", () => {
      editingSupplierId = Number(button.dataset.editSupplier);
      notice = "";
      renderShell();
    });
  });

  document.querySelector("#cancel-supplier-edit")?.addEventListener("click", () => {
    editingSupplierId = null;
    notice = "";
    renderShell();
  });
}

function bindReports() {
  const form = document.querySelector("#report-filters");
  if (!form) return;

  form.addEventListener("input", () => {
    reportFilters = {
      from: form.from.value,
      to: form.to.value,
      type: reportFilters.type,
    };
    renderShell();
  });

  document.querySelectorAll("[data-open-report]").forEach((button) => {
    button.addEventListener("click", () => {
      const reportId = button.dataset.openReport;

      if (reportId === "print") {
        window.print();
        return;
      }

      activeReport = reportId;
      const typeByReport = {
        movement: "all",
        incoming: "incoming",
        outgoing: "outgoing",
        inventory: "adjustment",
        lowStock: "all",
      };
      reportFilters = {
        ...reportFilters,
        type: typeByReport[reportId] || "all",
      };
      renderShell();
    });
  });

  document.querySelector("#export-report")?.addEventListener("click", () => {
    downloadJson(`marseille-${activeReport}-report-${today()}.json`, exportRowsForActiveReport());
  });

  document.querySelector("#print-report")?.addEventListener("click", () => {
    window.print();
  });
}

function exportRowsForActiveReport() {
  if (activeReport === "lowStock") {
    return lowStockProducts().map((product) => ({
      product: product.name,
      category: product.category,
      currentStock: stockFor(product.id),
      minimumStock: product.minStock,
      unit: product.unit,
      value: productValue(product),
    }));
  }

  return movementsForActiveReport(filteredMovements()).map((movement) => {
    const product = productById(movement.productId);
    const supplier = supplierById(movement.supplierId);
    return {
      date: formatDate(movement.date),
      type: movementLabel(movement.type),
      product: product?.name || "Deleted product",
      quantity: roundStock(movement.quantity),
      unit: product?.unit || "",
      unitPrice: movement.unitPrice,
      value: signedMovementValue(movement),
      supplier: supplier?.name || "",
      reason: movement.reason || "",
      comment: movement.comment || "",
    };
  });
}

function exportLocalData() {
  downloadJson(`marseille-restaurant-backup-${today()}.json`, {
    exportedAt: new Date().toISOString(),
    storage: "localStorage",
    data: state,
  });
}

function importLocalData(event) {
  const file = event.target.files?.[0];
  event.target.value = "";
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      const importedState = parsed.data || parsed;

      if (!isValidState(importedState)) {
        throw new Error("Invalid inventory backup format.");
      }

      if (!confirm("Import this backup and replace current local data?")) {
        return;
      }

      state = normalizeImportedState(importedState);
      editingProductId = null;
      editingSupplierId = null;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      saveState("Backup imported successfully.");
    } catch (error) {
      notice = error.message || "Could not import backup file.";
      renderShell();
    }
  });
  reader.readAsText(file);
}

function isValidState(value) {
  return (
    value &&
    Array.isArray(value.products) &&
    Array.isArray(value.suppliers) &&
    Array.isArray(value.movements)
  );
}

function normalizeImportedState(value) {
  return {
    seedVersion: value.seedVersion || SEED_VERSION,
    products: value.products.map((product) => ({
      id: Number(product.id),
      name: String(product.name || "").trim(),
      category: String(product.category || "Uncategorized").trim(),
      unit: product.unit || "kg",
      minStock: Number(product.minStock || 0),
      price: Number(product.price || 0),
      openingStock: Number(product.openingStock || 0),
      active: product.active !== false,
    })),
    suppliers: value.suppliers.map((supplier) => ({
      id: Number(supplier.id),
      name: String(supplier.name || "").trim(),
      phone: String(supplier.phone || ""),
      contact: String(supplier.contact || ""),
      note: String(supplier.note || ""),
    })),
    movements: value.movements.map((movement) => ({
      id: Number(movement.id),
      type: movement.type || "outgoing",
      productId: Number(movement.productId),
      supplierId: movement.supplierId ? Number(movement.supplierId) : undefined,
      date: movement.date || today(),
      quantity: Number(movement.quantity || 0),
      unitPrice: Number(movement.unitPrice || 0),
      reason: movement.reason || "",
      comment: String(movement.comment || ""),
    })),
    inventoryDraft: value.inventoryDraft || { date: "", items: {} },
  };
}

function downloadJson(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function textInput(label, name, value, required) {
  return `
    <label>
      ${label}
      <input name="${name}" type="text" value="${value}" ${required ? "required" : ""} />
    </label>
  `;
}

function numberInput(label, name, value, required) {
  return `
    <label>
      ${label}
      <input name="${name}" type="number" step="0.001" min="0" value="${value}" ${required ? "required" : ""} />
    </label>
  `;
}

function formatEditablePrice(value) {
  return Number(value).toLocaleString("en-US", {
    useGrouping: false,
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  });
}

function dateInput(label, name, value) {
  return `
    <label>
      ${label}
      <input name="${name}" type="date" value="${value}" required />
    </label>
  `;
}

initializeApp();
