"use client";

import { type FormEvent, useRef, useCallback, useState } from "react";
import { MoveRight } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import {
    type NewsletterResponseType,
    subscribeToNewsletter,
} from "../services/newsletter";
import { InvokeResponse } from "../utils/supabase/edgeFunction";
import FieldError from "./FieldError";

export default function NewsletterForm() {
    const emailRef = useRef<HTMLInputElement>(null);
    const { executeRecaptcha } = useGoogleReCaptcha();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] =
        useState<InvokeResponse<NewsletterResponseType> | null>(null);

    const handleSubmit = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            if (!executeRecaptcha) {
                console.log("Execute recaptcha not yet available");
                return;
            }

            setIsSubmitting(true);
            setStatus(null);

            try {
                const recaptchaToken =
                    await executeRecaptcha("newsletter_submit");
                const email = emailRef.current?.value;

                const response = await subscribeToNewsletter(
                    {
                        email,
                    },
                    recaptchaToken,
                );

                setStatus(response);

                if (emailRef.current) {
                    emailRef.current.value = "";
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                setStatus({
                    message: "Something went wrong. Please try again.",
                    data: null,
                    type: "error",
                    error: null,
                });
            } finally {
                setIsSubmitting(false);
            }
        },
        [executeRecaptcha],
    );

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 justify-center"
        >
            <div
                className="flex items-center rounded-full bg-white p-1 transition-all duration-300 focus-within:ring-2 md:w-full
                "
            >
                <input
                    type="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    placeholder="email@example.com..."
                    ref={emailRef}
                    className="p-3 px-5 rounded-full flex-1 focus:outline-none focus:ring-none min-w-0
                    placeholder:text-base placeholder:text-gray-500 text-gray-800"
                />

                {isSubmitting ? (
                    <div className="pr-4">
                        <div className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-orange-500" />
                    </div>
                ) : (
                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="bg-orange-500 border-2 border-amber-800 text-gray-900 px-10 py-3 rounded-full"
                    >
                        Sign up
                    </button>
                )}
            </div>

            <div className="px-2">
                {status && (
                    <>
                        <FieldError status={status} fieldName="email" />

                        <p
                            className={`text-base ${status.type === "success" ? "text-green-600" : "text-red-500"}`}
                        >
                            {status.message}
                        </p>
                    </>
                )}
            </div>
        </form>
    );
}
