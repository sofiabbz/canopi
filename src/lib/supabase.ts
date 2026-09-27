import { createClient } from '@supabase/supabase-js';

// credenciais públicas do projeto Supabase (seguras para o front-end)
const supabaseUrl = 'https://blweinzqceawcwfpwsjp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsd2VpbnpxY2Vhd2N3ZnB3c2pwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0NzM5NzQsImV4cCI6MjEwNjA0OTk3NH0.g9ncYOdfHtADgIG3fOfCSHAfwkYihxhDq_eVRnSIMF0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
