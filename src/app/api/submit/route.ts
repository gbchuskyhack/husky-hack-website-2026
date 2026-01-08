import { NextResponse } from 'next/server';
console.log('API route called');
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { recaptchaToken, ...data } = body;

        const supabaseUrl = process.env.SB_SUBMIT_FUNCTION_URL!;

        //console.log('VERCEL_GATEWAY_SECRET:', process.env.VERCEL_GATEWAY_SECRET);

        const response = await fetch(supabaseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-vercel-secret': process.env.VCL_GATEWAY_SECRET!,
                'x-recaptcha-token': recaptchaToken,
            },
            body: JSON.stringify(data),
        });

        //console.log('Response from Supabase:', response);

        const result = await response.json();

        return NextResponse.json(result, { status: response.status });

    } catch (error) {
        console.error('Error in API route:', error);
        return NextResponse.json({
            message: "Internal Server Error",
            error: error
        }, { status: 500 });
    }
}