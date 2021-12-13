import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://druziwbgiwqqaapdhrrz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODg1MjY1NSwiZXhwIjoxOTU0NDI4NjU1fQ.4ZFhwYW8RUEdO8WGJeJYC7kOW6iJhIPhOIks9FFOnPs";

export const Supabase = createClient(supabaseUrl, supabaseAnonKey);
