import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET() {
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('test')
      .select('*')
      .limit(1);

    if (error) {
      return NextResponse.json({ 
        success: false, 
        message: 'Supabase query error (expected if no tables exist yet)',
        error: error.message 
      }, { status: 200 });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Supabase connection successful',
      data 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Supabase connection test',
      error: error instanceof Error ? error.message : 'Unknown error',
      note: 'This is expected if no database tables exist yet'
    }, { status: 200 });
  }
}
