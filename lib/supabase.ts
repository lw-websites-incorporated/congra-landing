import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create client only if env vars are available (handles build-time when vars aren't set)
// Using implicit flow because the password-reset page receives tokens via hash fragment
// (the recovery email bypasses PKCE so the web page can handle it directly)
export const supabase: SupabaseClient = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        flowType: 'implicit',
        detectSessionInUrl: false,
      },
    })
  : null as unknown as SupabaseClient;
