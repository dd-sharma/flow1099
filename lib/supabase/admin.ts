import { createClient } from '@supabase/supabase-js'

/**
 * WARNING: This client uses the service role key and bypasses Row Level Security (RLS).
 * Only use this for admin operations on the server side.
 * NEVER expose this to the client or use in client components.
 * NEVER log or return the service role key.
 */
export function createAdminClient() {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set')
  }

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    }
  )
}
