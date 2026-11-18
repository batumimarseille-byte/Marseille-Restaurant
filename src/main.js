import "./styles.css";
import { createClient } from "@supabase/supabase-js";
import posterCatalog from "./posterCatalog.json";

const STORAGE_KEY = "restaurant-inventory-v1";
const LANGUAGE_STORAGE_KEY = "marseille-restaurant-language";
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

// These are the items that can be identified with confidence as purchased stock
// from the existing Poster sales catalogue. Kitchen dishes stay out until recipes
// and ingredient quantities are available.
const posterAssortment = [
  { name: "Borjomi", category: "Beverages", unit: "piece", aliases: ["borjomi"] },
  { name: "Borjomi lemonade", category: "Beverages", unit: "piece", aliases: ["borjomi lemonade"] },
  { name: "Coca-Cola", category: "Beverages", unit: "piece", aliases: ["coca-cola"] },
  { name: "Coca-Cola Zero", category: "Beverages", unit: "piece", aliases: ["coca-cola zero"] },
  { name: "Juice", category: "Beverages", unit: "piece", aliases: ["juice"] },
  { name: "Shavi Lomi draft beer", category: "Alcohol", unit: "liter", aliases: ["shavi lomi"] },
  { name: "Kazbegi draft beer", category: "Alcohol", unit: "liter", aliases: ["kazbegi"] },
  { name: "Stolichnaya vodka", category: "Alcohol", unit: "liter", aliases: ["stolichnaya vodka"] },
  { name: "Finlandia vodka", category: "Alcohol", unit: "liter", aliases: ["finlandia vodka"] },
  { name: "Absolut vodka", category: "Alcohol", unit: "liter", aliases: ["absolut vodka"] },
  { name: "Jameson whiskey", category: "Alcohol", unit: "liter", aliases: ["jameson whiskey"] },
  { name: "Grape chacha", category: "Alcohol", unit: "liter", aliases: ["grape chacha"] },
  { name: "Honey chacha", category: "Alcohol", unit: "liter", aliases: ["honey chacha"] },
  { name: "Rkatsiteli draft wine", category: "Alcohol", unit: "liter", aliases: ["rkatsiteli draft wine"] },
  { name: "Mtsvane Kakheti draft wine", category: "Alcohol", unit: "liter", aliases: ["mtsvane kakheti draft wine"] },
  { name: "Rkatsiteli wine 200 ml", category: "Alcohol", unit: "piece", aliases: ["rkatsiteli wine 200 ml"] },
  { name: "Saperavi wine 200 ml", category: "Alcohol", unit: "piece", aliases: ["saperavi wine 200 ml"] },
  { name: "Akhasheni wine 200 ml", category: "Alcohol", unit: "piece", aliases: ["akhasheni wine 200 ml"] },
  { name: "Food container", category: "Packaging", unit: "piece", aliases: ["food container", "container"] },
  { name: "Large takeaway box", category: "Packaging", unit: "piece", aliases: ["large takeaway box", "large box"] },
  { name: "French fries", category: "Frozen goods", unit: "kg", aliases: ["french fries"] },
  { name: "Pelmeni", category: "Frozen goods", unit: "package", aliases: ["pelmeni"] },
  { name: "Vareniki with potato", category: "Frozen goods", unit: "package", aliases: ["vareniki with potato"] },
  { name: "Vareniki with cheese", category: "Frozen goods", unit: "package", aliases: ["vareniki with cheese"] },
  { name: "Ketchup", category: "Groceries", unit: "package", aliases: ["ketchup"] },
  { name: "Olives", category: "Groceries", unit: "kg", aliases: ["olives"] },
  { name: "Sour cream", category: "Dairy", unit: "kg", aliases: ["sour cream"] },
];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "products", label: "Products" },
  { id: "menu", label: "Menu" },
  { id: "incoming", label: "Incoming" },
  { id: "outgoing", label: "Outgoing" },
  { id: "inventory", label: "Inventory" },
  { id: "reconcile", label: "Monthly check" },
  { id: "suppliers", label: "Suppliers" },
  { id: "reports", label: "Reports" },
];

const georgianTranslations = {
  "Overview": "მიმოხილვა",
  "Products": "პროდუქტები",
  "Menu": "მენიუ",
  "Incoming": "მიღება",
  "Outgoing": "ხარჯვა",
  "Inventory": "ინვენტარიზაცია",
  "Monthly check": "თვიური შემოწმება",
  "Suppliers": "მომწოდებლები",
  "Reports": "ანგარიშები",
  "Stock control": "საწყობის მართვა",
  "Add incoming": "მიღების დამატება",
  "Opening workspace": "სამუშაო სივრცე იხსნება",
  "Connecting to the restaurant inventory.": "რესტორნის საწყობთან კავშირი.",
  "Sign in": "შესვლა",
  "Use the administrator account created in Supabase.": "გამოიყენეთ Supabase-ში შექმნილი ადმინისტრატორის ანგარიში.",
  "Email": "ელფოსტა",
  "Password": "პაროლი",
  "Account": "ანგარიში",
  "Administrator": "ადმინისტრატორი",
  "Restaurant account": "რესტორნის ანგარიში",
  "Language": "ენა",
  "English": "ინგლისური",
  "Sign out": "გასვლა",
  "Activity": "აქტივობა",
  "Latest movements": "ბოლო მოძრაობები",
  "Attention": "ყურადღება",
  "Low stock queue": "დაბალი ნაშთის სია",
  "Value": "ღირებულება",
  "Highest stock value": "ყველაზე მაღალი ღირებულება",
  "Stock value": "საწყობის ღირებულება",
  "Low stock": "დაბალი ნაშთი",
  "7 day incoming": "7 დღის მიღება",
  "7 day outgoing": "7 დღის ხარჯვა",
  "Needs attention today": "დღეს საჭიროებს ყურადღებას",
  "All products are above minimum": "ყველა პროდუქტი მინიმუმზე მეტია",
  "No products need attention right now.": "ამჟამად არც ერთ პროდუქტს არ სჭირდება ყურადღება.",
  "Catalog": "კატალოგი",
  "Product list": "პროდუქტების სია",
  "Add product": "პროდუქტის დამატება",
  "Clear products": "პროდუქტების გასუფთავება",
  "Import Poster assortment": "Poster-ის ასორტიმენტის იმპორტი",
  "Poster assortment is already in the catalog.": "Poster-ის ასორტიმენტი უკვე კატალოგშია.",
  "Search products": "პროდუქტების ძიება",
  "Name": "დასახელება",
  "Category": "კატეგორია",
  "Unit": "ერთეული",
  "All categories": "ყველა კატეგორია",
  "Status": "სტატუსი",
  "All statuses": "ყველა სტატუსი",
  "Active": "აქტიური",
  "Inactive": "არააქტიური",
  "Min stock": "მინ. ნაშთი",
  "Price": "ფასი",
  "Current stock": "მიმდინარე ნაშთი",
  "Action": "მოქმედება",
  "No products match these filters.": "პროდუქტები ამ ფილტრებს არ შეესაბამება.",
  "Editing item": "პროდუქტის რედაქტირება",
  "New item": "ახალი პროდუქტი",
  "Edit product": "პროდუქტის რედაქტირება",
  "New category": "ახალი კატეგორია",
  "Saved categories": "შენახული კატეგორიები",
  "New unit": "ახალი ერთეული",
  "Saved units": "შენახული ერთეულები",
  "Opening stock": "საწყისი ნაშთი",
  "Minimum stock": "მინიმალური ნაშთი",
  "Purchase price": "შესყიდვის ფასი",
  "Active product": "აქტიური პროდუქტი",
  "Delete": "წაშლა",
  "Edit": "რედაქტირება",
  "Update": "განახლება",
  "Save product": "პროდუქტის შენახვა",
  "Close": "დახურვა",
  "New category name": "ახალი კატეგორიის დასახელება",
  "New unit name": "ახალი ერთეულის დასახელება",
  "Invoice number or delivery notes": "ინვოისის ნომერი ან მიწოდების შენიშვნები",
  "Optional details": "დამატებითი დეტალები",
  "Delivery terms, notes, categories": "მიწოდების პირობები, შენიშვნები, კატეგორიები",
  "Receiving": "მიღება",
  "Add incoming goods": "საქონლის მიღების დამატება",
  "Date": "თარიღი",
  "Supplier": "მომწოდებელი",
  "Product": "პროდუქტი",
  "Quantity": "რაოდენობა",
  "Unit price": "ერთეულის ფასი",
  "Total": "ჯამი",
  "Comment": "კომენტარი",
  "Save incoming": "მიღების შენახვა",
  "Receiving status": "მიღების სტატუსი",
  "Stock increases": "ნაშთი იზრდება",
  "Received value": "მიღებული ღირებულება",
  "History": "ისტორია",
  "Usage": "ხარჯვა",
  "Add outgoing goods": "ხარჯის დამატება",
  "Stock after": "ნაშთი შემდეგ",
  "Reason": "მიზეზი",
  "Kitchen": "სამზარეულო",
  "Bar": "ბარი",
  "Write-off": "ჩამოწერა",
  "Spoilage": "გაფუჭება",
  "Staff": "პერსონალი",
  "Other": "სხვა",
  "Save outgoing": "ხარჯის შენახვა",
  "Usage status": "ხარჯვის სტატუსი",
  "Stock decreases": "ნაშთი მცირდება",
  "Usage value": "ხარჯვის ღირებულება",
  "Guarded": "კონტროლი",
  "Traceable": "ისტორიაში",
  "Monthly check": "თვიური შემოწმება",
  "Inventory count": "ინვენტარიზაცია",
  "Changed rows": "შეცვლილი პოზიციები",
  "Difference value": "სხვაობის ღირებულება",
  "Draft status": "დრაფტის სტატუსი",
  "Saved to cloud": "შენახულია ღრუბელში",
  "Saved in browser": "შენახულია ბრაუზერში",
  "Not saved": "არ არის შენახული",
  "System stock": "სისტემური ნაშთი",
  "Actual stock": "ფაქტობრივი ნაშთი",
  "Difference": "სხვაობა",
  "Difference value": "სხვაობის ღირებულება",
  "Optional": "არასავალდებულო",
  "Save draft": "დრაფტის შენახვა",
  "Clear draft": "დრაფტის გასუფთავება",
  "Confirm inventory": "ინვენტარიზაციის დადასტურება",
  "Phone": "ტელეფონი",
  "Contact": "კონტაქტი",
  "Not set": "არ არის მითითებული",
  "No comment": "კომენტარი არ არის",
  "Editing partner": "მომწოდებლის რედაქტირება",
  "Partner": "მომწოდებელი",
  "Edit supplier": "მომწოდებლის რედაქტირება",
  "Add supplier": "მომწოდებლის დამატება",
  "Contact person": "საკონტაქტო პირი",
  "Update supplier": "მომწოდებლის განახლება",
  "Save supplier": "მომწოდებლის შენახვა",
  "Choose report": "ანგარიშის არჩევა",
  "From": "დან",
  "To": "მდე",
  "Print": "ბეჭდვა",
  "Export": "ექსპორტი",
  "Movement journal": "მოძრაობის ჟურნალი",
  "All stock changes": "ნაშთის ყველა ცვლილება",
  "Every incoming, outgoing, and inventory correction.": "ყველა მიღება, ხარჯი და ინვენტარიზაციის კორექცია.",
  "Incoming goods": "საქონლის მიღება",
  "Purchases": "შესყიდვები",
  "What was received from suppliers in the period.": "რა მიიღეს მომწოდებლებისგან მოცემულ პერიოდში.",
  "Outgoing and write-offs": "ხარჯი და ჩამოწერები",
  "Kitchen, bar, spoilage, staff, and other usage.": "სამზარეულო, ბარი, გაფუჭება, პერსონალი და სხვა ხარჯი.",
  "Low stock products": "დაბალი ნაშთის პროდუქტები",
  "Action needed": "საჭიროა მოქმედება",
  "Products that are at or below minimum stock.": "პროდუქტები მინიმალურ ნაშთზე ან მის ქვემოთ.",
  "Inventory differences": "ინვენტარიზაციის სხვაობები",
  "Corrections": "კორექციები",
  "Confirmed stock corrections from inventory counts.": "ინვენტარიზაციით დადასტურებული ნაშთის კორექციები.",
  "Low stock items": "დაბალი ნაშთის პოზიციები",
  "Current value": "მიმდინარე ღირებულება",
  "Total shortage": "სულ ნაკლებობა",
  "Records": "ჩანაწერები",
  "Total value": "ჯამური ღირებულება",
  "Net stock value": "წმინდა ნაშთის ღირებულება",
  "No low stock products.": "დაბალი ნაშთის პროდუქტები არ არის.",
  "Type": "ტიპი",
  "Details": "დეტალები",
  "No movements yet.": "მოძრაობები ჯერ არ არის.",
  "Incoming": "მიღება",
  "Outgoing": "ხარჯვა",
  "Inventory adjustment": "ინვენტარიზაციის კორექცია",
  "Deleted product": "წაშლილი პროდუქტი",
  "Poster sales": "Poster გაყიდვები",
  "Recipe cards": "ტექნოლოგიური ბარათები",
  "Physical count": "ფაქტობრივი დათვლა",
  "Expected closing": "მოსალოდნელი ნაშთი",
  "Actual count": "ფაქტობრივი ნაშთი",
  "Difference": "სხვაობა",
  "Comment": "კომენტარი",
  "Save draft": "შენახვა",
  "Confirm monthly check": "თვიური შემოწმების დადასტურება",
};

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
  menu: `
    <path d="M4 3h16v18H4z" />
    <path d="M8 7h8" />
    <path d="M8 11h8" />
    <path d="M8 15h5" />
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
  reconcile: `
    <path d="M3 3v18h18" />
    <path d="M7 16v-4" />
    <path d="M12 16V8" />
    <path d="M17 16v-6" />
    <path d="m6 8 4 2 4-4 4 2" />
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
let editingMenuItemId = null;
let editingRecipeId = null;
let recipeDraftMenuItemId = null;
let recipeDraftIngredients = [{ productId: "", quantity: "" }];
let sidebarWidth = window.innerWidth > 1100 ? 260 : 208;
let sidebarLayoutThresholds = { logo: 268, nav: 168, brand: 150, min: 88 };
let productEditorOpen = window.innerWidth > 1100;
let isAccountModalOpen = false;
let language = localStorage.getItem(LANGUAGE_STORAGE_KEY) === "ka" ? "ka" : "en";
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
let menuFilters = {
  search: "",
  group: "all",
  status: "all",
};
let openSelectControl = null;
let selectDismissalEventsBound = false;

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

function defaultMenuFilters() {
  return {
    search: "",
    group: "all",
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
  trash: `<path d="M3 6h18" /><path d="M8 6V4h8v2" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v5" /><path d="M14 11v5" />`,
  x: `<path d="M18 6 6 18" /><path d="m6 6 12 12" />`,
  check: `<path d="m20 6-11 11-5-5" />`,
  file: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /><path d="M8 13h8" /><path d="M8 17h5" />`,
  user: `<circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" />`,
  chevronRight: `<path d="m9 18 6-6-6-6" />`,
  logout: `<path d="M10 17l5-5-5-5" /><path d="M15 12H3" /><path d="M21 19V5a2 2 0 0 0-2-2h-6" />`,
};

function translateText(value) {
  if (language !== "ka" || typeof value !== "string") return value;
  const leading = value.match(/^\s*/)?.[0] || "";
  const trailing = value.match(/\s*$/)?.[0] || "";
  const text = value.trim();
  if (!text) return value;

  const dynamicTranslation =
    text.match(/^(\d+) active products$/) ? `${text.match(/^(\d+)/)[1]} აქტიური პროდუქტი` :
    text.match(/^(\d+) received records$/) ? `${text.match(/^(\d+)/)[1]} მიღების ჩანაწერი` :
    text.match(/^(\d+) usage records$/) ? `${text.match(/^(\d+)/)[1]} ხარჯვის ჩანაწერი` :
    text.match(/^Showing (\d+) products?$/) ? `ნაჩვენებია: ${text.match(/^Showing (\d+)/)[1]} პროდუქტი` :
    text.match(/^(\d+) suppliers available$/) ? `${text.match(/^(\d+)/)[1]} მომწოდებელი ხელმისაწვდომია` :
    text.match(/^(\d+) low stock products$/) ? `${text.match(/^(\d+)/)[1]} დაბალი ნაშთის პროდუქტი` :
    text.match(/^(\d+) day receipts$/) ? `${text.match(/^(\d+)/)[1]} დღის მიღება` :
    text.match(/^(\d+) day usage$/) ? `${text.match(/^(\d+)/)[1]} დღის ხარჯვა` :
    null;

  return `${leading}${georgianTranslations[text] || dynamicTranslation || text}${trailing}`;
}

function localizeInterface(root = app) {
  document.documentElement.lang = language === "ka" ? "ka" : "en";
  if (language !== "ka" || !root) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => {
    if (node.parentElement?.closest("[data-no-translate]")) return;
    node.nodeValue = translateText(node.nodeValue);
  });

  root.querySelectorAll("[placeholder], [title], [aria-label]").forEach((element) => {
    if (element.closest("[data-no-translate]")) return;
    ["placeholder", "title", "aria-label"].forEach((attribute) => {
      if (element.hasAttribute(attribute)) {
        element.setAttribute(attribute, translateText(element.getAttribute(attribute)));
      }
    });
  });
}

function setLanguage(nextLanguage) {
  language = nextLanguage === "ka" ? "ka" : "en";
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  isAccountModalOpen = false;
  renderShell();
}

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
    menuItems: Array.isArray(value.menuItems) ? value.menuItems : [],
    recipes: Array.isArray(value.recipes) ? value.recipes : [],
    salesImports: Array.isArray(value.salesImports) ? value.salesImports : [],
    reconciliationDraft: value.reconciliationDraft || { date: "", actuals: {}, comments: {} },
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

function isCloudEnabled() {
  return Boolean(supabase && cloudUser);
}

function cloudErrorMessage(error) {
  return error?.message || "Could not connect to Supabase.";
}

function cloudRowsToState(products, suppliers, movements, appStates) {
  const stateByKey = Object.fromEntries((appStates || []).map((item) => [item.key, item.value]));
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
    inventoryDraft: stateByKey.inventory_draft && typeof stateByKey.inventory_draft === "object"
      ? stateByKey.inventory_draft
      : { date: "", items: {} },
    menuItems: Array.isArray(stateByKey.menu_items) ? stateByKey.menu_items : [],
    recipes: Array.isArray(stateByKey.recipes) ? stateByKey.recipes : [],
    salesImports: Array.isArray(stateByKey.sales_imports) ? stateByKey.sales_imports : [],
    reconciliationDraft: stateByKey.reconciliation_draft && typeof stateByKey.reconciliation_draft === "object"
      ? stateByKey.reconciliation_draft
      : { date: "", actuals: {}, comments: {} },
  });
}

async function readCloudState() {
  const [productsResult, suppliersResult, movementsResult, appStateResult] = await Promise.all([
    supabase.from("products").select("*").order("id"),
    supabase.from("suppliers").select("*").order("id"),
    supabase.from("stock_movements").select("*").order("id"),
    supabase.from("app_state").select("key,value").in("key", ["inventory_draft", "menu_items", "recipes", "sales_imports", "reconciliation_draft"]),
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
    .upsert([
      { key: "inventory_draft", value: state.inventoryDraft || { date: "", items: {} } },
      { key: "menu_items", value: state.menuItems || [] },
      { key: "recipes", value: state.recipes || [] },
      { key: "sales_imports", value: state.salesImports || [] },
      { key: "reconciliation_draft", value: state.reconciliationDraft || { date: "", actuals: {}, comments: {} } },
    ]);
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

function queueCloudProductRemoval(productId) {
  if (!isCloudEnabled()) return;

  cloudSyncPromise = cloudSyncPromise
    .catch(() => undefined)
    .then(async () => {
      const { error: countItemsError } = await supabase
        .from("inventory_count_items")
        .delete()
        .eq("product_id", productId);
      if (countItemsError) throw countItemsError;

      const { error: movementsError } = await supabase
        .from("stock_movements")
        .delete()
        .eq("product_id", productId);
      if (movementsError) throw movementsError;

      const { error: productError } = await supabase.from("products").delete().eq("id", productId);
      if (productError) throw productError;
    })
    .catch((error) => {
      notice = `Product removed in this browser. Cloud removal failed: ${cloudErrorMessage(error)}`;
      renderShell();
    });
}

function queueCloudCatalogReset(productIds) {
  if (!isCloudEnabled()) return;

  cloudSyncPromise = cloudSyncPromise
    .catch(() => undefined)
    .then(async () => {
      if (productIds.length) {
        const { error: countItemsError } = await supabase
          .from("inventory_count_items")
          .delete()
          .in("product_id", productIds);
        if (countItemsError) throw countItemsError;

        const { error: movementsError } = await supabase
          .from("stock_movements")
          .delete()
          .in("product_id", productIds);
        if (movementsError) throw movementsError;

        const { error: productsError } = await supabase
          .from("products")
          .delete()
          .in("id", productIds);
        if (productsError) throw productsError;
      }

      const { error: appStateError } = await supabase
        .from("app_state")
        .upsert([
          { key: "inventory_draft", value: state.inventoryDraft },
          { key: "menu_items", value: state.menuItems || [] },
          { key: "recipes", value: [] },
          { key: "reconciliation_draft", value: state.reconciliationDraft },
        ]);
      if (appStateError) throw appStateError;
    })
    .catch((error) => {
      notice = `Products were cleared in this browser. Cloud reset failed: ${cloudErrorMessage(error)}`;
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
  localizeInterface();
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
  localizeInterface();

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

function productNameKey(value) {
  return String(value || "")
    .toLocaleLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function missingPosterAssortment() {
  const existingNames = new Set(state.products.map((product) => productNameKey(product.name)));
  return posterAssortment.filter((product) => {
    const names = [product.name, ...product.aliases].map(productNameKey);
    return !names.some((name) => existingNames.has(name));
  });
}

function addPosterAssortment() {
  const productsToAdd = missingPosterAssortment();
  if (!productsToAdd.length) {
    showNotice("Poster assortment is already in the catalog.");
    return;
  }

  let productId = nextId(state.products);
  productsToAdd.forEach(({ aliases, ...product }) => {
    state.products.push({
      id: productId,
      ...product,
      openingStock: 0,
      minStock: 0,
      price: 0,
      active: true,
    });
    productId += 1;
  });
  saveState(`${productsToAdd.length} Poster items added with zero opening stock.`);
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
  closeOpenSelectControl();
  let shell = app.querySelector(".app-shell");

  if (!shell) {
    app.innerHTML = `
      <div class="app-shell" style="--sidebar-width: ${sidebarWidth}px">
        ${renderSidebar()}
        <div class="sidebar-resizer" id="sidebar-resizer" role="separator" aria-orientation="vertical" aria-label="Resize navigation"></div>
        <main class="main"></main>
      </div>
      <div id="modal-root"></div>
    `;
    shell = app.querySelector(".app-shell");
    bindSidebarResizer();
  }

  shell.style.setProperty("--sidebar-width", `${sidebarWidth}px`);
  shell.querySelector(".main").innerHTML = renderMain();
  renderAccountModalLayer();
  localizeInterface();
  updateNavigationState();
  updateSidebarPresentation();

  bindNavigation();
  bindGlobalActions();
  bindCurrentView();
  bindSelectBlur();
  enhanceSelects();
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
        <button class="sidebar-account" id="open-account-modal" type="button" aria-haspopup="dialog">
          <span class="sidebar-account-icon">${icon("user")}</span>
          <span class="sidebar-account-copy">
            <strong>Administrator</strong>
            <span>${cloudUser.email || "Restaurant account"}</span>
          </span>
          <span class="sidebar-account-chevron" aria-hidden="true">${icon("chevronRight")}</span>
        </button>
      ` : ""}
    </aside>
  `;
}

function renderAccountModal() {
  if (!isAccountModalOpen || !cloudUser) return "";

  return `
    <div class="modal-backdrop" id="account-modal-backdrop">
      <section class="account-modal" role="dialog" aria-modal="true" aria-labelledby="account-modal-title">
        <div class="modal-header">
          <div>
            <p class="eyebrow">Account</p>
            <h3 id="account-modal-title">Administrator</h3>
          </div>
          <button class="small-button icon-only" id="close-account-modal" type="button" aria-label="Close account settings" title="Close">${icon("x")}</button>
        </div>
        <div class="account-modal-user">
          <span class="account-modal-avatar">${icon("user")}</span>
          <span>${cloudUser.email || "Restaurant account"}</span>
        </div>
        <label class="account-language-field">
          <span>Language</span>
          <select id="account-language" aria-label="Language">
            <option value="en" ${language === "en" ? "selected" : ""}>English</option>
            <option value="ka" ${language === "ka" ? "selected" : ""}>ქართული</option>
          </select>
        </label>
        <div class="modal-actions">
          <button class="danger-button" id="account-sign-out" type="button">${icon("logout")}Sign out</button>
        </div>
      </section>
    </div>
  `;
}

function renderAccountModalLayer() {
  const modalRoot = document.querySelector("#modal-root");
  if (!modalRoot) return;
  modalRoot.innerHTML = renderAccountModal();
  localizeInterface(modalRoot);

  const closeModal = () => {
    isAccountModalOpen = false;
    renderAccountModalLayer();
  };

  document.querySelector("#close-account-modal")?.addEventListener("click", closeModal);
  document.querySelector("#account-modal-backdrop")?.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) closeModal();
  });
  document.querySelector("#account-sign-out")?.addEventListener("click", () => {
    isAccountModalOpen = false;
    signOut();
  });
  document.querySelector("#account-language")?.addEventListener("change", (event) => {
    setLanguage(event.currentTarget.value);
  });
  enhanceSelects(modalRoot);
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

function closeOpenSelectControl() {
  if (!openSelectControl) return;
  openSelectControl.control.classList.remove("is-open");
  openSelectControl.menu.remove();
  openSelectControl = null;
}

function positionOpenSelectControl() {
  if (!openSelectControl) return;
  const { trigger, menu } = openSelectControl;
  if (!trigger.isConnected || !menu.isConnected) {
    closeOpenSelectControl();
    return;
  }

  const rect = trigger.getBoundingClientRect();
  const menuHeight = Math.min(menu.scrollHeight, 264);
  const spaceBelow = window.innerHeight - rect.bottom - 8;
  const placeAbove = spaceBelow < Math.min(menuHeight, 180) && rect.top > spaceBelow;
  const menuWidth = Math.max(rect.width, 180);
  menu.style.width = `${menuWidth}px`;
  menu.style.left = `${Math.max(8, Math.min(rect.left, window.innerWidth - menuWidth - 8))}px`;
  menu.style.top = `${placeAbove ? Math.max(8, rect.top - menuHeight - 4) : rect.bottom + 4}px`;
  menu.style.maxHeight = `${menuHeight}px`;
}

function selectLabel(select) {
  const explicitLabel = select.getAttribute("aria-label");
  if (explicitLabel) return explicitLabel;
  const label = select.closest("label");
  const text = [...(label?.childNodes || [])]
    .filter((node) => node.nodeType === Node.TEXT_NODE)
    .map((node) => node.textContent.trim())
    .filter(Boolean)
    .join(" ");
  return text || select.name || "Select option";
}

function enhanceSelects(root = document) {
  root.querySelectorAll("select:not([data-select-enhanced])").forEach((select) => {
    select.dataset.selectEnhanced = "true";
    const parent = select.parentElement;
    if (!parent) return;

    const control = document.createElement("div");
    control.className = "select-control";
    parent.insertBefore(control, select);
    control.append(select);
    select.classList.add("native-select");
    select.tabIndex = -1;
    select.setAttribute("aria-hidden", "true");

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "select-trigger";
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-label", selectLabel(select));
    trigger.innerHTML = `<span class="select-trigger-value"></span><span class="select-trigger-chevron" aria-hidden="true"></span>`;
    control.append(trigger);

    const syncTrigger = () => {
      const selectedOption = select.options[select.selectedIndex];
      const isPlaceholder = !select.value;
      trigger.querySelector(".select-trigger-value").textContent = selectedOption?.textContent || "Choose option";
      trigger.classList.toggle("is-placeholder", isPlaceholder);
      trigger.disabled = select.disabled;
      trigger.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      if (select.disabled) return;
      if (openSelectControl?.control === control) {
        closeOpenSelectControl();
        return;
      }
      closeOpenSelectControl();

      const menu = document.createElement("div");
      menu.className = "select-dropdown";
      menu.setAttribute("role", "listbox");
      menu.setAttribute("aria-label", selectLabel(select));
      [...select.options].forEach((option) => {
        const optionButton = document.createElement("button");
        optionButton.type = "button";
        optionButton.className = "select-dropdown-option";
        optionButton.textContent = option.textContent;
        optionButton.disabled = option.disabled;
        optionButton.dataset.value = option.value;
        optionButton.setAttribute("role", "option");
        optionButton.setAttribute("aria-selected", String(option.selected));
        optionButton.classList.toggle("is-selected", option.selected);
        optionButton.addEventListener("click", () => {
          if (option.disabled) return;
          select.value = option.value;
          closeOpenSelectControl();
          select.dispatchEvent(new Event("change", { bubbles: true }));
        });
        menu.append(optionButton);
      });

      document.body.append(menu);
      control.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      openSelectControl = { control, trigger, menu };
      positionOpenSelectControl();
    };

    trigger.addEventListener("click", openMenu);
    trigger.addEventListener("keydown", (event) => {
      if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(event.key)) {
        event.preventDefault();
        openMenu();
      }
    });
    select.addEventListener("change", syncTrigger);
    syncTrigger();
  });

  if (selectDismissalEventsBound) return;
  selectDismissalEventsBound = true;
  document.addEventListener("pointerdown", (event) => {
    if (!openSelectControl) return;
    const { control, menu } = openSelectControl;
    if (!control.contains(event.target) && !menu.contains(event.target)) closeOpenSelectControl();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeOpenSelectControl();
  });
  window.addEventListener("resize", positionOpenSelectControl);
  window.addEventListener("scroll", positionOpenSelectControl, true);
}

function resetViewState() {
  editingProductId = null;
  editingSupplierId = null;
  editingMenuItemId = null;
  editingRecipeId = null;
  recipeDraftMenuItemId = null;
  recipeDraftIngredients = [{ productId: "", quantity: "" }];
  productEditorOpen = window.innerWidth > 1100;
  productFilters = defaultProductFilters();
  menuFilters = defaultMenuFilters();
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
    menu: bindMenu,
    incoming: bindIncoming,
    outgoing: bindOutgoing,
    inventory: bindInventory,
    reconcile: bindReconciliation,
    suppliers: bindSuppliers,
    reports: bindReports,
  };
  binders[currentSection]?.();
}

function bindGlobalActions() {
  const accountButton = document.querySelector("#open-account-modal");
  if (!accountButton || accountButton.dataset.bound) return;
  accountButton.dataset.bound = "true";
  accountButton.addEventListener("click", () => {
    isAccountModalOpen = true;
    renderAccountModalLayer();
  });
}

function renderSection() {
  const views = {
    overview: renderOverview,
    products: renderProducts,
    menu: renderMenu,
    incoming: renderIncoming,
    outgoing: renderOutgoing,
    inventory: renderInventory,
    reconcile: renderReconciliation,
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

function filteredMenuItems() {
  const search = menuFilters.search.trim().toLowerCase();
  return state.menuItems.filter((item) => {
    const matchesSearch = !search || [item.name, item.posterName, item.group]
      .some((value) => String(value || "").toLowerCase().includes(search));
    const matchesGroup = menuFilters.group === "all" || item.group === menuFilters.group;
    const matchesStatus = menuFilters.status === "all"
      || (menuFilters.status === "active" && item.active !== false)
      || (menuFilters.status === "inactive" && item.active === false);
    return matchesSearch && matchesGroup && matchesStatus;
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
  const posterProductsToAdd = missingPosterAssortment();
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
          <div class="row-actions">
            ${posterProductsToAdd.length ? `<button class="small-button" id="import-poster-assortment" type="button">${icon("plus")}Import Poster assortment</button>` : ""}
            ${productEditorOpen ? "" : `<button class="small-button" id="open-product-editor" type="button">${icon("plus")}Add product</button>`}
            ${state.products.length ? `<button class="danger-button compact" id="clear-product-catalog" type="button">${icon("trash")}Clear products</button>` : ""}
          </div>
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
                <th>Action</th>
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
        ${editingProduct ? `
          <div class="product-status-row">
            <label class="checkbox-line">
              <input type="checkbox" name="active" ${editingProduct.active === false ? "" : "checked"} />
              Active product
            </label>
            <div class="form-actions product-edit-actions">
              <button class="danger-button product-delete-button" type="button" data-delete-product="${editingProduct.id}">${icon("trash")}Delete</button>
              <button class="primary-button product-submit-button" type="submit">${icon("check")}Update</button>
            </div>
          </div>
        ` : `
          <label class="checkbox-line">
            <input type="checkbox" name="active" checked />
            Active product
          </label>
          <div class="form-actions">
            <button class="primary-button product-submit-button" type="submit">${icon("plus")}Save product</button>
          </div>
        `}
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
      <form class="inventory-form" id="inventory-form">
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

function renderMenu() {
  const editingItem = editingMenuItemId ? menuItemById(editingMenuItemId) : null;
  const existingPosterNames = new Set(state.menuItems.map((item) => productNameKey(item.posterName)));
  const catalogItemsToImport = posterCatalog.filter((item) => !existingPosterNames.has(productNameKey(item.name)));
  const groups = [...new Set(state.menuItems.map((item) => item.group).filter(Boolean))].sort((first, second) => first.localeCompare(second));
  const visibleItems = filteredMenuItems().slice().sort((first, second) => first.name.localeCompare(second.name));
  const hasActiveFilters = Boolean(menuFilters.search || menuFilters.group !== "all" || menuFilters.status !== "all");

  return `
    <div class="form-layout">
      <article class="panel">
        <div class="panel-header">
          <div>
            <p class="eyebrow">Menu catalog</p>
            <h3>Menu items</h3>
            <p class="section-description">These are the sellable positions from Poster. A recipe card connects each menu item to the stock it consumes.</p>
          </div>
          <div class="inline-actions">
            ${catalogItemsToImport.length ? `<button class="small-button" id="import-poster-catalog" type="button">${icon("plus")}Import Poster catalog (${catalogItemsToImport.length})</button>` : ""}
          </div>
        </div>
        ${state.menuItems.length ? `
          <form class="table-toolbar" id="menu-toolbar">
            <label class="search-field">
              ${icon("search")}
              <input name="search" value="${menuFilters.search}" placeholder="Search menu" />
            </label>
            <label>
              Category
              <select name="group">
                <option value="all">All categories</option>
                ${groups.map((group) => `<option value="${group}" ${menuFilters.group === group ? "selected" : ""}>${group}</option>`).join("")}
              </select>
            </label>
            <label>
              Status
              <select name="status">
                <option value="all" ${menuFilters.status === "all" ? "selected" : ""}>All statuses</option>
                <option value="active" ${menuFilters.status === "active" ? "selected" : ""}>Active</option>
                <option value="inactive" ${menuFilters.status === "inactive" ? "selected" : ""}>Inactive</option>
              </select>
            </label>
          </form>
          ${hasActiveFilters ? `<p class="filter-result-message">Showing ${visibleItems.length} ${visibleItems.length === 1 ? "menu item" : "menu items"}</p>` : ""}
          <div class="table-scroll">
            <table class="menu-table">
              <thead><tr><th>Item</th><th>Group</th><th>Status</th><th>Recipe</th><th>Action</th></tr></thead>
              <tbody>
                ${visibleItems.length ? visibleItems.map((item) => {
                  const recipe = state.recipes.find((entry) => Number(entry.menuItemId) === item.id);
                  const configuration = menuItemRecipeConfiguration(item, recipe);
                  const recipeEditorOpen = Number(recipeDraftMenuItemId) === item.id;
                  return `
                    <tr class="menu-item-row ${configuration === "recipe" ? "is-recipe-configured" : configuration === "standalone" ? "is-standalone-configured" : ""}">
                      <td>
                        <div class="menu-item-name">
                          <strong data-no-translate>${item.name}</strong>
                          <button class="small-button compact icon-only" data-edit-menu-item="${item.id}" type="button" aria-label="Edit menu item" title="Edit menu item">${icon("edit")}</button>
                        </div>
                        ${item.posterName !== item.name ? `<span class="table-subline" data-no-translate>${item.posterName}</span>` : ""}
                      </td>
                      <td data-no-translate>${item.group || "-"}</td>
                      <td>${badge(item.active !== false ? "Active" : "Inactive", item.active !== false ? "success" : "neutral")}</td>
                      <td>${configuration === "recipe" ? badge("Recipe ready", "success") : configuration === "standalone" ? badge("Standalone item", "info") : badge("Needs setup", "neutral")}</td>
                      <td>
                        <button class="small-button compact" data-compose-recipe="${item.id}" type="button">
                          ${configuration === "unconfigured" ? `${icon("plus")}Set up` : `${icon("edit")}Edit setup`}
                        </button>
                      </td>
                    </tr>
                    ${recipeEditorOpen ? `
                      <tr class="inline-editor-row">
                        <td colspan="5">${renderMenuRecipeEditor(item, recipe)}</td>
                      </tr>
                    ` : ""}
                  `;
                }).join("") : `<tr><td colspan="5"><p class="empty-state">No menu items match these filters.</p></td></tr>`}
              </tbody>
            </table>
          </div>
        ` : `<div class="empty-state"><strong>No menu items yet</strong><span>Add the items you sell, then connect each one to a recipe or a standalone stock product.</span></div>`}
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <p class="eyebrow">${editingItem ? "Editing item" : "New item"}</p>
            <h3>${editingItem ? "Edit menu item" : "Add menu item"}</h3>
          </div>
          ${editingItem ? `<button class="small-button icon-only" id="close-menu-editor" type="button" aria-label="Add menu item" title="Add menu item">${icon("x")}</button>` : ""}
        </div>
        <form class="work-form single-column" id="menu-item-form">
          ${editingItem ? `<input type="hidden" name="id" value="${editingItem.id}" />` : ""}
          <label>
            Menu item
            <input name="name" data-no-translate value="${editingItem?.name || ""}" placeholder="For example, Caesar salad" required />
          </label>
          <label>
            Menu group
            <div class="menu-group-control">
              <select name="group-choice" data-menu-group-choice>
                <option value="">No group</option>
                ${groups.map((group) => `<option value="${group}" ${editingItem?.group === group ? "selected" : ""}>${group}</option>`).join("")}
                <option value="__new__">New group</option>
              </select>
              <input name="new-group" data-new-menu-group data-no-translate class="is-hidden" placeholder="For example, Main dishes" />
            </div>
          </label>
          <label>
            Poster name
            <input name="poster-name" data-no-translate value="${editingItem?.posterName || ""}" placeholder="Exact title from Poster" required />
          </label>
          <label class="checkbox-line"><input name="active" type="checkbox" ${editingItem?.active !== false ? "checked" : ""} />Active menu item</label>
          <div class="form-actions">
            <button class="primary-button" type="submit">${icon("check")}${editingItem ? "Update menu item" : "Save menu item"}</button>
          </div>
        </form>
      </article>
    </div>
  `;
}

function bindMenu() {
  document.querySelector("#menu-item-form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const itemId = Number(form.get("id") || 0);
    const name = String(form.get("name") || "").trim();
    const posterName = String(form.get("poster-name") || "").trim();
    const duplicate = state.menuItems.find((item) => productNameKey(item.posterName) === productNameKey(posterName) && item.id !== itemId);
    if (!name || !posterName) {
      showNotice("Menu item and exact Poster name are required.");
      return;
    }
    if (duplicate) {
      showNotice("A menu item already uses this Poster name.");
      return;
    }
    const selectedGroup = String(form.get("group-choice") || "");
    const group = selectedGroup === "__new__"
      ? String(form.get("new-group") || "").trim()
      : selectedGroup;
    if (selectedGroup === "__new__" && !group) {
      showNotice("Enter a name for the new menu group.");
      return;
    }
    const payload = {
      ...editingItem,
      id: itemId || nextId(state.menuItems),
      name,
      group,
      posterName,
      active: form.get("active") === "on",
    };
    state.menuItems = itemId ? state.menuItems.map((item) => item.id === itemId ? payload : item) : [...state.menuItems, payload];
    editingMenuItemId = null;
    saveState(itemId ? "Menu item updated." : "Menu item saved.");
  });

  document.querySelectorAll("[data-edit-menu-item]").forEach((button) => {
    button.addEventListener("click", () => {
      editingMenuItemId = Number(button.dataset.editMenuItem);
      notice = "";
      renderShell();
    });
  });

  document.querySelector("#close-menu-editor")?.addEventListener("click", () => {
    editingMenuItemId = null;
    notice = "";
    renderShell();
  });

  const groupChoice = document.querySelector("[data-menu-group-choice]");
  const newGroupInput = document.querySelector("[data-new-menu-group]");
  groupChoice?.addEventListener("change", () => {
    const isNewGroup = groupChoice.value === "__new__";
    newGroupInput.classList.toggle("is-hidden", !isNewGroup);
    newGroupInput.disabled = !isNewGroup;
    if (isNewGroup) newGroupInput.focus();
  });
  if (newGroupInput) newGroupInput.disabled = groupChoice?.value !== "__new__";

  document.querySelectorAll("[data-compose-recipe]").forEach((button) => {
    button.addEventListener("click", () => {
      const menuItemId = Number(button.dataset.composeRecipe);
      const recipe = state.recipes.find((item) => Number(item.menuItemId) === menuItemId);
      editingRecipeId = recipe?.id || 0;
      recipeDraftMenuItemId = menuItemId;
      recipeDraftIngredients = recipe ? recipeIngredientRows(recipe) : [{ productId: "", quantity: "" }];
      notice = "";
      renderShell();
    });
  });

  const menuToolbar = document.querySelector("#menu-toolbar");
  if (menuToolbar) {
    menuToolbar.elements.search.addEventListener("input", () => {
      menuFilters.search = menuToolbar.elements.search.value;
      renderShell();
    });
    ["group", "status"].forEach((field) => {
      menuToolbar.elements[field].addEventListener("change", () => {
        menuFilters[field] = menuToolbar.elements[field].value;
        renderShell();
      });
    });
  }

  bindMenuRecipeForm();

  document.querySelector("#import-poster-catalog")?.addEventListener("click", () => {
    const existingPosterNames = new Set(state.menuItems.map((item) => productNameKey(item.posterName)));
    const items = posterCatalog.filter((item) => !existingPosterNames.has(productNameKey(item.name)));
    let nextMenuItemId = nextId(state.menuItems);

    items.forEach((item) => {
      state.menuItems.push({
        id: nextMenuItemId,
        posterId: item.posterId,
        name: item.name,
        group: item.group,
        posterName: item.name,
        sourcePrice: item.price,
        active: true,
      });
      nextMenuItemId += 1;
    });

    saveState(`${items.length} menu items imported from the live Poster catalog.`);
  });
}

function bindMenuRecipeForm() {
  const recipeForm = document.querySelector("#menu-recipe-form");
  if (!recipeForm) return;

  recipeForm.querySelector("#add-recipe-ingredient")?.addEventListener("click", () => {
    const recipeList = recipeForm.querySelector("#recipe-ingredient-list");
    recipeList.insertAdjacentHTML("beforeend", recipeIngredientRow());
    bindRecipeIngredientRow(recipeList.lastElementChild);
  });
  recipeForm.querySelectorAll("[data-recipe-ingredient]").forEach((row) => bindRecipeIngredientRow(row));

  const standaloneToggle = recipeForm.elements.standaloneItem;
  const standaloneField = recipeForm.querySelector("[data-standalone-product-field]");
  const recipeIngredients = recipeForm.querySelector("[data-recipe-ingredients]");
  const updateRecipeMode = () => {
    const isStandalone = Boolean(standaloneToggle?.checked);
    standaloneField?.classList.toggle("is-hidden", !isStandalone);
    recipeIngredients?.classList.toggle("is-hidden", isStandalone);
    const standaloneSelect = standaloneField?.querySelector("select");
    if (standaloneSelect) {
      standaloneSelect.disabled = !isStandalone;
      standaloneSelect.required = isStandalone;
    }
    recipeIngredients?.querySelectorAll("select, input, button").forEach((field) => {
      field.disabled = isStandalone;
    });
  };
  standaloneToggle?.addEventListener("change", updateRecipeMode);
  updateRecipeMode();

  document.querySelector("#close-menu-recipe-editor")?.addEventListener("click", () => {
    editingRecipeId = null;
    recipeDraftMenuItemId = null;
    recipeDraftIngredients = [{ productId: "", quantity: "" }];
    renderShell();
  });

  recipeForm.querySelector("#clear-menu-recipe-config")?.addEventListener("click", () => {
    const recipeId = Number(recipeForm.elements.id.value || 0);
    const recipe = state.recipes.find((item) => item.id === recipeId);
    const menuItemId = Number(recipeForm.dataset.menuItemId || 0);
    if (!confirm("Clear this recipe setup? The menu item will remain, but it will need a recipe or standalone product before the monthly check.")) return;
    state.recipes = recipe ? state.recipes.filter((item) => item.id !== recipeId) : state.recipes;
    state.menuItems = state.menuItems.map((item) => (item.id === menuItemId
      ? { ...item, standaloneProductId: null }
      : item));
    editingRecipeId = null;
    recipeDraftMenuItemId = null;
    recipeDraftIngredients = [{ productId: "", quantity: "" }];
    saveState("Recipe setup cleared.");
  });

  recipeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const menuItemId = Number(recipeForm.dataset.menuItemId || 0);
    const menuItem = menuItemById(menuItemId);
    const recipeId = Number(recipeForm.elements.id.value || 0);
    const standaloneProductId = Number(recipeForm.elements.standaloneProductId?.value || 0);
    const isStandalone = recipeForm.elements.standaloneItem?.checked;
    const ingredients = [...recipeForm.querySelectorAll("[data-recipe-ingredient]")]
      .map((row) => ({
        productId: Number(row.querySelector('[name="ingredient-product"]').value),
        quantity: Number(row.querySelector('[name="ingredient-quantity"]').value),
      }))
      .filter((ingredient) => productById(ingredient.productId) && positiveNumber(ingredient.quantity));
    const duplicate = state.recipes.find((recipe) => Number(recipe.menuItemId) === menuItemId && recipe.id !== recipeId);
    if (!menuItem) return;

    if (isStandalone) {
      if (!productById(standaloneProductId)) {
        showNotice("Choose the stock product sold as this standalone item.");
        return;
      }
      state.menuItems = state.menuItems.map((item) => (item.id === menuItemId
        ? { ...item, standaloneProductId }
        : item));
      state.recipes = state.recipes.filter((item) => Number(item.menuItemId) !== menuItemId);
      editingRecipeId = null;
      recipeDraftMenuItemId = null;
      recipeDraftIngredients = [{ productId: "", quantity: "" }];
      saveState("Standalone item saved.");
      return;
    }

    if (!ingredients.length) {
      showNotice("Choose at least one stock product and enter its quantity.");
      return;
    }
    if (duplicate) {
      showNotice("A recipe card for this menu item already exists.");
      return;
    }
    state.menuItems = state.menuItems.map((item) => (item.id === menuItemId
      ? { ...item, standaloneProductId: null }
      : item));
    const recipe = { id: recipeId || nextId(state.recipes), menuItemId, menuItem: menuItem.posterName, ingredients, updatedAt: new Date().toISOString() };
    state.recipes = recipeId ? state.recipes.map((item) => (item.id === recipeId ? recipe : item)) : [...state.recipes, recipe];
    editingRecipeId = null;
    recipeDraftMenuItemId = null;
    recipeDraftIngredients = [{ productId: "", quantity: "" }];
    saveState("Recipe card saved.");
  });
}

function latestPendingSalesImport() {
  return state.salesImports
    .filter((salesImport) => !salesImport.appliedAt)
    .slice()
    .sort((first, second) => Number(second.id) - Number(first.id))[0] || null;
}

function menuItemById(id) {
  return state.menuItems.find((menuItem) => menuItem.id === Number(id));
}

function recipeMenuItem(recipe) {
  return recipe?.menuItemId ? menuItemById(recipe.menuItemId) : null;
}

function recipeMenuLabel(recipe) {
  return recipeMenuItem(recipe)?.posterName || recipe?.menuItem || "";
}

function menuItemOptions(selectedId = "") {
  return state.menuItems
    .filter((menuItem) => menuItem.active !== false)
    .slice()
    .sort((first, second) => first.name.localeCompare(second.name))
    .map((menuItem) => `<option value="${menuItem.id}" ${Number(selectedId) === menuItem.id ? "selected" : ""}>${menuItem.name}${menuItem.posterName !== menuItem.name ? ` - ${menuItem.posterName}` : ""}</option>`)
    .join("");
}

function recipeIngredientRows(recipe) {
  return (recipe?.ingredients || [])
    .map((ingredient) => ({
      productId: Number(ingredient.productId),
      quantity: Number(ingredient.quantity),
    }))
    .filter((ingredient) => productById(ingredient.productId) && positiveNumber(ingredient.quantity));
}

function recipeForSalesLine(lineName) {
  const lineKey = productNameKey(lineName);
  return state.recipes.find((recipe) => productNameKey(recipeMenuLabel(recipe)) === lineKey) || null;
}

function menuItemForSalesLine(lineName) {
  const lineKey = productNameKey(lineName);
  return state.menuItems.find((menuItem) => productNameKey(menuItem.posterName) === lineKey) || null;
}

function standaloneProductForMenuItem(menuItem) {
  const productId = Number(menuItem?.standaloneProductId || 0);
  const product = productById(productId);
  return product?.active ? product : null;
}

function menuItemRecipeConfiguration(menuItem, recipe = null) {
  if (standaloneProductForMenuItem(menuItem)) return "standalone";
  return recipeIngredientRows(recipe || state.recipes.find((item) => Number(item.menuItemId) === menuItem?.id)).length
    ? "recipe"
    : "unconfigured";
}

function salesImportSummary(salesImport) {
  const result = {
    salesLines: salesImport?.lines?.length || 0,
    linkedLines: 0,
    unlinkedLines: [],
    consumption: new Map(),
  };

  (salesImport?.lines || []).forEach((line) => {
    const menuItem = menuItemForSalesLine(line.name);
    const standaloneProduct = standaloneProductForMenuItem(menuItem);
    const recipe = recipeForSalesLine(line.name);
    const soldQuantity = Number(line.quantity || 0);
    if (standaloneProduct && positiveNumber(soldQuantity)) {
      result.linkedLines += 1;
      result.consumption.set(
        standaloneProduct.id,
        roundStock((result.consumption.get(standaloneProduct.id) || 0) + soldQuantity),
      );
      return;
    }
    const ingredients = recipeIngredientRows(recipe);
    if (!recipe || !ingredients.length || !positiveNumber(soldQuantity)) {
      result.unlinkedLines.push(line);
      return;
    }

    result.linkedLines += 1;
    ingredients.forEach((ingredient) => {
      const usage = roundStock(ingredient.quantity * soldQuantity);
      result.consumption.set(
        ingredient.productId,
        roundStock((result.consumption.get(ingredient.productId) || 0) + usage),
      );
    });
  });

  return result;
}

function parseSalesQuantity(value) {
  const normalized = String(value || "").replace(/\s/g, "").replace(",", ".");
  const match = normalized.match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : 0;
}

function parsePosterSales(rawText) {
  const rows = String(rawText || "")
    .split(/\r?\n/)
    .map((row) => row.trim())
    .filter(Boolean);
  if (!rows.length) return [];

  const delimiter = rows[0].includes("\t") ? "\t" : rows[0].includes(";") ? ";" : ",";
  const firstColumns = rows[0].split(delimiter).map((value) => productNameKey(value));
  const nameHeaderIndex = firstColumns.findIndex((value) => /product|item|name|товар|наименован|позици/.test(value));
  const quantityHeaderIndex = firstColumns.findIndex((value) => /qty|quantity|amount|count|кол|колич|продан/.test(value));
  const hasHeader = nameHeaderIndex >= 0 || quantityHeaderIndex >= 0;
  const nameIndex = nameHeaderIndex >= 0 ? nameHeaderIndex : 0;
  const quantityIndex = quantityHeaderIndex >= 0 ? quantityHeaderIndex : 1;
  const lines = new Map();

  rows.slice(hasHeader ? 1 : 0).forEach((row) => {
    const columns = row.split(delimiter).map((value) => value.trim());
    const name = columns[nameIndex] || "";
    const quantity = parseSalesQuantity(columns[quantityIndex]);
    if (!name || !positiveNumber(quantity)) return;
    const key = productNameKey(name);
    const current = lines.get(key) || { name, quantity: 0 };
    current.quantity = roundStock(current.quantity + quantity);
    lines.set(key, current);
  });

  return [...lines.values()];
}

function expectedClosingFor(product, summary) {
  return roundStock(stockFor(product.id) - (summary.consumption.get(product.id) || 0));
}

function monthlySalesSummary(sales = []) {
  const result = {
    salesLines: 0,
    linkedLines: 0,
    unlinkedLines: [],
    consumption: new Map(),
  };

  sales.forEach((sale) => {
    const menuItem = menuItemById(sale.menuItemId);
    const soldQuantity = Number(sale.quantity || 0);
    if (!menuItem || !positiveNumber(soldQuantity)) return;

    result.salesLines += 1;
    const standaloneProduct = standaloneProductForMenuItem(menuItem);
    if (standaloneProduct) {
      result.linkedLines += 1;
      result.consumption.set(
        standaloneProduct.id,
        roundStock((result.consumption.get(standaloneProduct.id) || 0) + soldQuantity),
      );
      return;
    }

    const recipe = state.recipes.find((item) => Number(item.menuItemId) === menuItem.id);
    const ingredients = recipeIngredientRows(recipe);
    if (!ingredients.length) {
      result.unlinkedLines.push({ name: menuItem.name, quantity: soldQuantity });
      return;
    }

    result.linkedLines += 1;
    ingredients.forEach((ingredient) => {
      const usage = roundStock(ingredient.quantity * soldQuantity);
      result.consumption.set(
        ingredient.productId,
        roundStock((result.consumption.get(ingredient.productId) || 0) + usage),
      );
    });
  });

  return result;
}

function reconciliationDraftFor(productId) {
  const draft = state.reconciliationDraft || { date: "", actuals: {}, comments: {} };
  return {
    actual: draft.actuals?.[String(productId)] ?? "",
    comment: draft.comments?.[String(productId)] || "",
  };
}

function recipeIngredientRow(ingredient = {}) {
  const unit = ingredient.productId ? productById(ingredient.productId)?.unit || "" : "";
  return `
    <div class="recipe-ingredient-row" data-recipe-ingredient>
      <select name="ingredient-product" required>
        <option value="">Choose product</option>
        ${productOptions(ingredient.productId || "")}
      </select>
      <input name="ingredient-quantity" data-recipe-quantity type="number" min="0" step="0.001" required value="${ingredient.quantity ?? ""}" placeholder="Quantity${unit ? `, ${unit}` : ""}" />
      <span class="recipe-unit" data-recipe-unit>${unit}</span>
      <button class="small-button icon-only recipe-remove-button" type="button" data-remove-recipe-ingredient aria-label="Remove ingredient" title="Remove ingredient">${icon("x")}</button>
    </div>
  `;
}

function renderMenuRecipeEditor(menuItem, recipe) {
  const ingredients = recipe ? recipeIngredientRows(recipe) : recipeDraftIngredients;
  const standaloneProduct = standaloneProductForMenuItem(menuItem);
  const isStandalone = Boolean(standaloneProduct);
  return `
    <div class="inline-recipe-editor">
      <div class="inline-recipe-heading">
        <div>
          <p class="eyebrow">Recipe card</p>
          <h3>${menuItem.name}</h3>
          <p>Choose each stock product and enter the exact quantity used for one sold item.</p>
        </div>
        <button class="small-button icon-only" id="close-menu-recipe-editor" type="button" aria-label="Close recipe card" title="Close">${icon("x")}</button>
      </div>
      <form class="recipe-form inline-recipe-form" id="menu-recipe-form" data-menu-item-id="${menuItem.id}">
        <input type="hidden" name="id" value="${recipe?.id || ""}" />
        <label class="checkbox-line standalone-item-toggle wide">
          <input type="checkbox" name="standaloneItem" ${isStandalone ? "checked" : ""} />
          <span><strong>Standalone stock item</strong><small>No recipe needed. Each sale subtracts one unit of the selected product.</small></span>
        </label>
        <div class="standalone-product-field wide ${isStandalone ? "" : "is-hidden"}" data-standalone-product-field>
          <label>
            Stock product sold
            <select name="standaloneProductId" ${isStandalone ? "required" : "disabled"}>
              <option value="">Choose product</option>
              ${productOptions(standaloneProduct?.id || "")}
            </select>
          </label>
        </div>
        <div class="recipe-ingredients wide ${isStandalone ? "is-hidden" : ""}" data-recipe-ingredients>
          <div class="recipe-ingredient-heading"><strong>Product from stock</strong><strong>Quantity per sold item</strong><span>Unit</span></div>
          <div id="recipe-ingredient-list">
            ${ingredients.map((ingredient) => recipeIngredientRow(ingredient)).join("")}
          </div>
          <button class="small-button" id="add-recipe-ingredient" type="button">${icon("plus")}Add product</button>
        </div>
        <div class="form-actions wide">
          ${recipe || isStandalone ? `<button class="danger-button" id="clear-menu-recipe-config" type="button">${icon("trash")}Clear setup</button>` : ""}
          <button class="primary-button" type="submit">${icon("check")}Save recipe card</button>
        </div>
      </form>
    </div>
  `;
}

function renderReconciliation() {
  const activeProducts = state.products.filter((product) => product.active);
  const draft = state.reconciliationDraft || { date: "", actuals: {}, comments: {} };
  const sales = Array.isArray(draft.sales) ? draft.sales : [];
  const summary = monthlySalesSummary(sales);

  return `
    <div class="reconciliation-layout">
      <article class="panel reconciliation-intro">
        <div class="panel-header">
          <div>
            <p class="eyebrow">Monthly check</p>
            <h3>Close the month accurately</h3>
            <p class="section-description">Add the sold menu items manually, then enter the physical shelf count. Recipes calculate the expected closing stock; nothing changes until you confirm.</p>
          </div>
          ${sales.length ? badge("Draft open", "warning") : badge("Ready to count", "neutral")}
        </div>
      </article>

      <article class="panel">
        <div class="panel-header">
          <div>
            <p class="eyebrow">Step 1</p>
            <h3>Sales for the month</h3>
            <p class="section-description">Use the figures you check in Poster. Add only the menu items that were sold during this count period.</p>
          </div>
        </div>
        <form id="reconciliation-form">
          <div class="monthly-sales-list" id="monthly-sales-list">
            ${sales.map((sale, index) => `
              <div class="monthly-sales-row" data-monthly-sale-row>
                <select name="sale-menu-item-${index}" aria-label="Menu item sold">
                  <option value="">Choose menu item</option>
                  ${menuItemOptions(sale.menuItemId || "")}
                </select>
                <input name="sale-quantity-${index}" type="number" min="0" step="0.001" value="${sale.quantity ?? ""}" placeholder="Quantity sold" aria-label="Quantity sold" />
                <button class="small-button icon-only" type="button" data-remove-monthly-sale="${index}" aria-label="Remove sold item" title="Remove">${icon("x")}</button>
              </div>
            `).join("")}
          </div>
          <button class="small-button" id="add-monthly-sale" type="button">${icon("plus")}Add sold item</button>
          ${sales.length ? `
            <div class="reconciliation-summary">
              <div><span>Menu items</span><strong>${summary.salesLines}</strong></div>
              <div><span>Recipe coverage</span><strong>${summary.linkedLines} / ${summary.salesLines}</strong></div>
              <div><span>Needs setup</span><strong>${summary.unlinkedLines.length}</strong></div>
            </div>
            ${summary.unlinkedLines.length ? `
              <div class="unlinked-sales">
                <strong>Menu items without a recipe or standalone product</strong>
                <div class="unlinked-sales-list">
                  ${summary.unlinkedLines.slice(0, 24).map((line) => `<span>${line.name} <b>${line.quantity}</b></span>`).join("")}
                </div>
              </div>
            ` : `<p class="reconciliation-success">All added menu items are configured.</p>`}
          ` : `<p class="field-hint monthly-sales-empty">No sales entered. You can still confirm a physical count without adding sales.</p>`}
          <div class="reconciliation-count-heading">
            <p class="eyebrow">Step 2</p>
            <h3>Physical count</h3>
            <p class="section-description">Expected closing includes current stock movements and the menu items added above. Enter the real shelf count for every product.</p>
          </div>
            <div class="reconciliation-date-row">
              <label>
                Count date
                <input type="date" name="date" value="${draft.date || today()}" required />
              </label>
              <span>Manual monthly check</span>
            </div>
            <div class="table-scroll reconciliation-table-scroll">
              <table>
                <thead><tr><th>Product</th><th class="numeric">Expected closing</th><th class="numeric">Actual count</th><th class="numeric">Difference</th><th>Comment</th></tr></thead>
                <tbody>
                  ${activeProducts.map((product) => {
                    const expected = expectedClosingFor(product, summary);
                    const countDraft = reconciliationDraftFor(product.id);
                    const actualValue = countDraft.actual;
                    const hasActual = actualValue !== "" && actualValue !== null && actualValue !== undefined;
                    const difference = hasActual ? roundStock(Number(actualValue) - expected) : null;
                    return `
                      <tr data-reconciliation-row="${product.id}">
                        <td><strong>${product.name}</strong><span class="table-unit">${product.unit}</span></td>
                        <td class="numeric" data-reconciliation-expected="${product.id}">${expected}</td>
                        <td class="numeric"><input class="table-input numeric" name="actual-${product.id}" type="number" min="0" step="0.001" value="${actualValue}" placeholder="Count" required /></td>
                        <td class="numeric ${difference && difference !== 0 ? "danger-text" : ""}" data-reconciliation-difference="${product.id}">${difference ?? "-"}</td>
                        <td><input class="table-input comment-input" name="comment-${product.id}" value="${countDraft.comment}" placeholder="Optional" /></td>
                      </tr>
                    `;
                  }).join("")}
                </tbody>
              </table>
            </div>
            <div class="panel-footer reconciliation-footer">
              <button class="ghost-button" id="save-reconciliation-draft" type="button">${icon("file")}Save draft</button>
              <button class="primary-button" type="submit">${icon("check")}Confirm monthly check</button>
            </div>
        </form>
      </article>
    </div>
  `;
}

function collectReconciliationDraft(form) {
  const actuals = {};
  const comments = {};
  state.products.filter((product) => product.active).forEach((product) => {
    actuals[String(product.id)] = form[`actual-${product.id}`].value;
    comments[String(product.id)] = form[`comment-${product.id}`].value.trim();
  });
  const sales = [...form.querySelectorAll("[data-monthly-sale-row]")].map((row) => ({
    menuItemId: Number(row.querySelector('select')?.value || 0),
    quantity: row.querySelector('input[type="number"]')?.value || "",
  }));
  return { date: form.date.value || today(), actuals, comments, sales };
}

function bindReconciliation() {
  const reconciliationForm = document.querySelector("#reconciliation-form");
  if (!reconciliationForm) return;
  const recalculate = () => {
    const currentDraft = collectReconciliationDraft(reconciliationForm);
    const summary = monthlySalesSummary(currentDraft.sales);
    state.products.filter((product) => product.active).forEach((product) => {
      const rawActual = reconciliationForm[`actual-${product.id}`].value;
      const expected = expectedClosingFor(product, summary);
      const differenceCell = reconciliationForm.querySelector(`[data-reconciliation-difference="${product.id}"]`);
      const expectedCell = reconciliationForm.querySelector(`[data-reconciliation-expected="${product.id}"]`);
      expectedCell.textContent = expected;
      if (rawActual === "") {
        differenceCell.textContent = "-";
        differenceCell.classList.remove("danger-text");
        return;
      }
      const difference = roundStock(Number(rawActual) - expected);
      differenceCell.textContent = difference;
      differenceCell.classList.toggle("danger-text", difference !== 0);
    });
  };
  reconciliationForm.querySelectorAll('input[type="number"], [data-monthly-sale-row] select').forEach((input) => input.addEventListener("input", recalculate));
  reconciliationForm.querySelectorAll("[data-monthly-sale-row] select").forEach((select) => select.addEventListener("change", recalculate));
  reconciliationForm.querySelector("#add-monthly-sale")?.addEventListener("click", () => {
    const draft = collectReconciliationDraft(reconciliationForm);
    state.reconciliationDraft = { ...draft, sales: [...draft.sales, { menuItemId: "", quantity: "" }] };
    notice = "";
    renderShell();
  });
  reconciliationForm.querySelectorAll("[data-remove-monthly-sale]").forEach((button) => button.addEventListener("click", () => {
    const draft = collectReconciliationDraft(reconciliationForm);
    draft.sales.splice(Number(button.dataset.removeMonthlySale), 1);
    state.reconciliationDraft = draft;
    notice = "";
    renderShell();
  }));
  reconciliationForm.querySelector("#save-reconciliation-draft")?.addEventListener("click", () => {
    state.reconciliationDraft = collectReconciliationDraft(reconciliationForm);
    saveState("Monthly check draft saved.");
  });
  reconciliationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const draft = collectReconciliationDraft(reconciliationForm);
    const missingCount = state.products.filter((product) => product.active).filter((product) => draft.actuals[String(product.id)] === "").length;
    if (missingCount) {
      showNotice(`Enter the physical count for all products. ${missingCount} still need a count.`);
      return;
    }
    const invalidSales = draft.sales.some((sale) => !sale.menuItemId || !positiveNumber(sale.quantity));
    if (invalidSales) {
      showNotice("Choose a menu item and enter a quantity for every sales row.");
      return;
    }
    const finalSummary = monthlySalesSummary(draft.sales);
    if (finalSummary.unlinkedLines.length) {
      showNotice(`Configure every sold menu item before confirming. ${finalSummary.unlinkedLines.length} still need a recipe or standalone product.`);
      return;
    }
    const hasInvalidActual = state.products
      .filter((product) => product.active)
      .some((product) => !nonNegativeNumber(draft.actuals[String(product.id)]));
    if (hasInvalidActual) {
      showNotice("Physical stock must be zero or a positive number.");
      return;
    }
    const adjustments = state.products.filter((product) => product.active).map((product) => ({
      product,
      expected: expectedClosingFor(product, finalSummary),
      actual: Number(draft.actuals[String(product.id)]),
      comment: draft.comments[String(product.id)],
    })).filter((item) => roundStock(item.actual - item.expected) !== 0);
    const confirmed = confirm(`Confirm this monthly check? Menu sales will create ${finalSummary.consumption.size} usage entries and ${adjustments.length} stock adjustment(s). This cannot be undone automatically.`);
    if (!confirmed) return;

    finalSummary.consumption.forEach((quantity, productId) => {
      const product = productById(productId);
      if (!product || !positiveNumber(quantity)) return;
      state.movements.push({
        id: nextId(state.movements), type: "outgoing", productId: product.id, date: draft.date,
        quantity: -Math.abs(quantity), unitPrice: Number(product.price), reason: "Menu sales",
        comment: "Monthly check manual sales",
      });
    });
    adjustments.forEach(({ product, expected, actual, comment }) => {
      state.movements.push({
        id: nextId(state.movements), type: "adjustment", productId: product.id, date: draft.date,
        quantity: roundStock(actual - expected), unitPrice: Number(product.price), reason: "Monthly check", comment,
      });
    });
    state.reconciliationDraft = { date: "", actuals: {}, comments: {} };
    saveState("Monthly check confirmed. Menu usage and count adjustments are saved in history.");
  });
}

function bindRecipeIngredientRow(row) {
  if (!row) return;
  const select = row.querySelector('[name="ingredient-product"]');
  const unit = row.querySelector("[data-recipe-unit]");
  const quantity = row.querySelector("[data-recipe-quantity]");
  const updateUnit = () => {
    const productUnit = productById(select.value)?.unit || "";
    unit.textContent = productUnit;
    quantity.placeholder = `Quantity${productUnit ? `, ${productUnit}` : ""}`;
  };
  select?.addEventListener("change", updateUnit);
  row.querySelector("[data-remove-recipe-ingredient]")?.addEventListener("click", () => {
    const recipeList = row.parentElement;
    if (recipeList.children.length === 1) {
      row.querySelector('[name="ingredient-product"]').value = "";
      row.querySelector('[name="ingredient-quantity"]').value = "";
      updateUnit();
      return;
    }
    row.remove();
  });
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
                <h3 data-no-translate>${supplier.name}</h3>
              </div>
              <button class="small-button icon-only" aria-label="Edit ${supplier.name}" title="Edit" type="button" data-edit-supplier="${supplier.id}">${icon("edit")}</button>
            </div>
            <dl>
              <div><dt>Phone</dt><dd ${supplier.phone ? "data-no-translate" : ""}>${supplier.phone || "Not set"}</dd></div>
              <div><dt>Contact</dt><dd ${supplier.contact ? "data-no-translate" : ""}>${supplier.contact || "Not set"}</dd></div>
              <div><dt>Comment</dt><dd ${supplier.note ? "data-no-translate" : ""}>${supplier.note || "No comment"}</dd></div>
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
          ${editingSupplier ? `<button class="small-button icon-only" id="close-supplier-editor" type="button" aria-label="Create new supplier" title="Create new supplier">${icon("x")}</button>` : ""}
        </div>
        <form class="work-form single-column" id="supplier-form">
          ${editingSupplier ? `<input type="hidden" name="id" value="${editingSupplier.id}" />` : ""}
          ${textInput("Name", "name", editingSupplier?.name || "Local Farm Co.", true)}
          ${textInput("Phone", "phone", editingSupplier?.phone || "+995", false)}
          ${textInput("Contact person", "contact", editingSupplier?.contact || "Mariam", false)}
          <label>
            Comment
            <textarea name="note" data-no-translate placeholder="Delivery terms, notes, categories">${editingSupplier?.note || ""}</textarea>
          </label>
          <div class="form-actions">
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

  document.querySelector("#import-poster-assortment")?.addEventListener("click", () => {
    addPosterAssortment();
  });

  document.querySelector("#clear-product-catalog")?.addEventListener("click", () => {
    const productCount = state.products.length;
    if (!productCount) return;
    const confirmed = confirm(
      `Clear ${productCount} product${productCount === 1 ? "" : "s"}, all stock movements, and recipe cards? Menu items, suppliers, and Poster sales will remain. This cannot be undone.`,
    );
    if (!confirmed) return;

    const productIds = state.products.map((product) => product.id);
    state.products = [];
    state.movements = [];
    state.recipes = [];
    state.menuItems = state.menuItems.map((item) => ({ ...item, standaloneProductId: null }));
    state.inventoryDraft = { date: "", items: {} };
    state.reconciliationDraft = { date: "", actuals: {}, comments: {} };
    editingProductId = null;
    productEditorOpen = false;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    notice = "Products, movements, and recipe cards cleared. Menu items remain.";
    renderShell();
    queueCloudCatalogReset(productIds);
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

  document.querySelectorAll("[data-delete-product]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = productById(button.dataset.deleteProduct);
      if (!product) return;

      const historyCount = state.movements.filter((movement) => movement.productId === product.id).length;
      const confirmation = historyCount
        ? `Delete ${product.name} and its ${historyCount} movement record(s)? This cannot be undone.`
        : `Delete ${product.name}? This cannot be undone.`;
      if (!confirm(confirmation)) return;

      state.movements = state.movements.filter((movement) => movement.productId !== product.id);
      state.products = state.products.filter((item) => item.id !== product.id);
      if (editingProductId === product.id) editingProductId = null;
      saveState(historyCount ? "Product and movement history deleted." : "Product deleted.");
      queueCloudProductRemoval(product.id);
    });
  });
}

function bindChoiceMode(button, savedField, newField, newLabel, savedLabel) {
  button?.addEventListener("click", () => {
    const useNewValue = button.dataset.mode !== "new";
    button.dataset.mode = useNewValue ? "new" : "saved";
    button.innerHTML = useNewValue
      ? `${icon("check")}${translateText(savedLabel)}`
      : `${icon("plus")}${translateText(newLabel)}`;
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

  document.querySelector("#close-supplier-editor")?.addEventListener("click", () => {
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
