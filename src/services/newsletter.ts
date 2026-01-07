import { z } from "zod";
import { validateRequest } from "../utils/supabase/edgeFunction";

// 1. Define your standard response shape based on your snippet
type StandardResponse<T> = {
    message: string;
    type: "success" | "error";
    error: any;
    data: T | null;
};

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
        // Call Vercel (The Gatekeeper)
        console.log('Calling Vercel...');
        const res = await fetch('/src/app/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...body, recaptchaToken }),
        });

        const result = await res.json();

        // 3. Return your project's standard JSON format
        // We rely on the Vercel API to return the structure { message, error, data }
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
        return {
            message: "Network error occurred.",
            type: "error",
            error: err.message,
            data: null,
        };
    }
};