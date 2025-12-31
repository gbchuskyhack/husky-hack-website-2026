import { supabase } from "../utils/supabase/client";

interface NewsletterSubmission {
    email: string;
    recaptchaToken: string;
    firstName?: string;
    lastName?: string;
}

export const subscribeToNewsletter = async ({ email, recaptchaToken, firstName = "", lastName = "" }: NewsletterSubmission) => {
    const { data, error } = await supabase.functions.invoke('submit-form', {
        body: {
            email,
            firstName,
            lastName,
            recaptchaToken,
        },
    });

    if (error) {
        throw error;
    }

    return data;
};
