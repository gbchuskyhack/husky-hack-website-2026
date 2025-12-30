"use client";

import { type FormEvent, useRef, useCallback } from "react";
import { MoveRight } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function NewsletterForm() {
    // Refs for form
    const emailRef = useRef<HTMLInputElement>(null);
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!executeRecaptcha) {
            console.log("Execute recaptcha not yet available");
            return;
        }

        const token = await executeRecaptcha('newsletter_submit');

        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());

        // TODO: Send to backend 
        // Create a service layer for this
        console.log("Sending", { ...data, token });
    }, [executeRecaptcha]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 rounded-full bg-gray-200 p-1">
                <div className="flex items-center gap-1 bg-white rounded-full hover:pr-2 transition-all duration-300">
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email address"
                        ref={emailRef}
                        className="p-4 rounded-full flex-1 focus:outline-none focus:ring-none"
                    />

                    <button
                        type="submit"
                        className="p-2 pr-4 rounded-full font-bold hover:scale-[1.04] transition-all duration-300 hover:text-blue-600"
                    >
                        <MoveRight />
                    </button>
                </div>

                <p className="text-sm text-gray-600 pr-2">
                    Don't miss a thing.
                </p>
            </div>
        </form>
    );
}
