import { z } from "zod";
import { invokeFunction, InvokeResponse, validateRequest } from "../utils/supabase/edgeFunction";

const NewsletterRequest = z.object({
    email: z.email(),
});

const NewsletterResponse = z.object({
    email: z.array(z.string()).optional(),
});

export type NewsletterRequestType = z.infer<typeof NewsletterRequest>;
export type NewsletterResponseType = z.infer<typeof NewsletterResponse>;

export const subscribeToNewsletter = async (body: NewsletterRequestType, recaptchaToken: string): Promise<InvokeResponse<NewsletterResponseType>> => {
    const validationError = validateRequest(NewsletterRequest, body);
    if (validationError) return validationError;

    return await invokeFunction<NewsletterRequestType, NewsletterResponseType>(
        'submit-form', 
        NewsletterResponse, 
        body,
        recaptchaToken
    );
};