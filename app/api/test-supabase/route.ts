import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
    try {
        // Test connection
        const { data, error } = await supabase
            .from('products')
            .select('count');

        if (error) {
            return NextResponse.json({
                status: 'error',
                message: 'Supabase connection failed',
                error: error.message,
                details: error
            }, { status: 500 });
        }

        return NextResponse.json({
            status: 'success',
            message: 'Supabase connection working',
            env_url: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing',
            env_key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing',
            data
        });
    } catch (error: any) {
        return NextResponse.json({
            status: 'error',
            message: 'Exception occurred',
            error: error.message
        }, { status: 500 });
    }
}
