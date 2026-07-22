// ============================================
// AVROY SHLAIN — SITE CONFIG
// Fill in your Supabase URL + anon key below.
// You'll get these from supabase.com after creating
// a project (see setup instructions provided separately).
// ============================================

const SUPABASE_URL = "YOUR_SUPABASE_URL_HERE";        // e.g. https://xxxxx.supabase.co
const SUPABASE_ANON_KEY = "YOUR_SUPABASE_ANON_KEY_HERE";

const WHATSAPP_NUMBER = "263780755665";
const ADMIN_PIN = "1234"; // change this to whatever PIN you want
const CATEGORIES = ["Body Spray","Perfume","Deodorant","Hair Care","Skin Care","Body Cream","Other"];

const supabaseClient = (SUPABASE_URL.startsWith("http"))
  ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;
