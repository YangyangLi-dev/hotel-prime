import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   process.env.SUPABASE_URL,
//   process.env.SUPABASE_KEY
// );

export const supabase = createClient(
  "https://jmkfxxqtajbzfenvlmdd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impta2Z4eHF0YWpiemZlbnZsbWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyNDYzNjAsImV4cCI6MjAyMjgyMjM2MH0.vgptVJkf4Ix3vF8VufMuclbs77bVYAbICSU2tV4CNCw"
);