import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabase = await createClient()
    
    // Test the connection with a simple query
    const { data, error } = await supabase.from('_').select('*').limit(1)
    
    if (error && error.code !== '42P01') { // 42P01 is "table doesn't exist" - that's ok for this test
      throw error
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully connected to Supabase',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Supabase connection error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to connect to Supabase',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
