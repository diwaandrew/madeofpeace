// utils/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vhpstlycnmdezsjnpjyn.supabase.co'; // Replace with your Supabase project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZocHN0bHljbm1kZXpzam5wanluIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNzU4NTUyNywiZXhwIjoyMDIzMTYxNTI3fQ.owqRAHTQ9zZsVJiraXC38cl4QPR6rNqTqFwvfSxD9KE'; // Replace with your Supabase anon/public key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
