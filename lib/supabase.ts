import { createClient } from '@supabase/supabase-js';

// Try NEXT_PUBLIC_ first (for client-side), fallback to non-prefixed (for server-side/Netlify functions)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';

// Create client with placeholders if env vars are missing (allows build to complete)
export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder-key'
);
