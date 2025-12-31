import { z } from "zod";
import { invokeFunction, InvokeResponse } from "../utils/supabase/edgeFunction";

const NewsletterRequest = z.object({
    email: z.email(),
    recaptchaToken: z.string(),
});

const NewsletterResponse = z.object({
    email: z.array(z.string()).optional(),
    recaptchaToken: z.array(z.string()).optional(),
});

export type NewsletterRequestType = z.infer<typeof NewsletterRequest>;
export type NewsletterResponseType = z.infer<typeof NewsletterResponse>;

export const subscribeToNewsletter = async (body: NewsletterRequestType): Promise<InvokeResponse<NewsletterResponseType>> => {
    const result = NewsletterRequest.safeParse(body);

    if (!result.success) {
        return {
            message: "Something went wrong. Please try again.",
            data: null,
            type: "error",
            error: z.flattenError(result.error).fieldErrors,
        };
    }

    return await invokeFunction<NewsletterRequestType, NewsletterResponseType>(
        'submit-form', 
        NewsletterResponse, 
        body
    );
};