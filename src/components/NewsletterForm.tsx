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
    const [status, setStatus] = useState<InvokeResponse<NewsletterResponseType> | null>(null);

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

                const response = await subscribeToNewsletter({
                    email,
                    recaptchaToken,
                });

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
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 justify-center my-2">
            <div className="flex items-center rounded-full bg-sky-200 p-1 transition-all duration-300
            focus-within:ring-2 focus-within:ring-blue-400 md:w-96">
                <div className="flex items-center gap-1 flex-grow bg-white rounded-full hover:pr-2 transition-all duration-300 w-48">
                    <input
                        type="email"
                        name="email"
                        required
                        disabled={isSubmitting}
                        placeholder="Signup for our newsletter"
                        ref={emailRef}

                        className="p-3 pb-4 pr-0 rounded-full flex-1 focus:outline-none focus:ring-none min-w-0 placeholder:text-xs"
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="p-0 pr-4 rounded-full font-bold hover:scale-[1.04] transition-all duration-300
                        hover:text-blue-600 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed
                        "
                    >
                        {isSubmitting ? (
                            <div className="h-6 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
                        ) : (
                            <MoveRight className={"w-5 md:w-6"}/>
                        )}
                    </button>
                </div>

                <p className="text-xs md:text-sm text-gray-600 whitespace-nowrap px-2">
                    {"ฅ^•ﻌ•^ฅ"}
                </p>
            </div>

            <div className="px-2">
                {status && (<>
                    <FieldError status={status} fieldName="email" />

                    <p
                        className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-500"}`}
                    >
                        {status.message}
                    </p>
                </>)}
            </div>
        </form>
    );
}
