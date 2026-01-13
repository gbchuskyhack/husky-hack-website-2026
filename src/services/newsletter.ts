import { z } from "zod";
import { validateRequest } from "../utils/supabase/edgeFunction";

// 1. Define your standard response shape based on your snippet
type StandardResponse<T> = {
    message: string;
    type: "success" | "error";
    error: any;
    data: T | null;
};

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers":
        "authorization, x-client-info, apikey, content-type, x-recaptcha-token",
}

const NewsletterRequest = z.object({
    email: z.string().email(),
});

const NewsletterResponse = z.object({
    email: z.array(z.string()).optional(),
});

export type NewsletterRequestType = z.infer<typeof NewsletterRequest>;
export type NewsletterResponseType = z.infer<typeof NewsletterResponse>;

export const subscribeToNewsletter = async (
    body: NewsletterRequestType,
    recaptchaToken: string
): Promise<StandardResponse<NewsletterResponseType>> => {
    //console.log('Subscribing to newsletter...');
    // Validation Check
    const validationError = validateRequest(NewsletterRequest, body);
    if (validationError) {
        return {
            message: "Validation failed",
            type: "error",
            error: validationError,
            data: null
        };
    }

    try {
        // Call cloudflare (The Gatekeeper)
        console.log('Calling Cloudflare...');
        const res = await fetch(process.env.CF_URL!, {
            method: 'POST',
            //headers: { 'Content-Type': 'application/json', ...corsHeaders },
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...body, recaptchaToken }),
        });

        const result = await res.json();

        // We rely on the Cloudflare API to return the structure { message, error, data }
        if (!res.ok) {
            return {
                message: result.message || "Something went wrong.",
                type: "error",
                error: result.error || "Unknown Error",
                data: null,
            };
        }

        return {
            message: result.message || "Success",
            type: "success",
            error: null,
            data: result.data,
        };

    } catch (err: any) {
        console.error('Error in API route:', err);
        return {
            message: "Network error occurred.",
            type: "error",
            error: err.message,
            data: null,
        };
    }
};