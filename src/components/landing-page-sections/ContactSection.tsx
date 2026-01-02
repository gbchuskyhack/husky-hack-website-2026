"use client";
import {BookOpen, MessageSquare, MoveRight, MoveLeft, User} from 'lucide-react';

import Link from 'next/link';

interface ContactSectionProps {
    query: string;
}

export default function ContactSection({query}: ContactSectionProps) {

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;

        const subject = form.subject.value;
        const body = form.body.value;

        const recipientEmail = query === "sponsorship"
            ? "huskyhack.sponsorship@gmail.com"
            : "huskyhack.info@gmail.com";

        const gmailUrl =
            "https://mail.google.com/mail/?" +
            "view=cm&fs=1&tf=1" +
            `&to=${encodeURIComponent(recipientEmail)}` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(`${body}`)}`;

        globalThis.open(gmailUrl, "_blank");
    }


    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-6 relative">
            <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                 <MoveLeft size={20} />
                 <span className="font-serif text-lg">Back</span>
            </Link>

            <div className="flex flex-col md:flex-row gap-12 items-start justify-center max-w-4xl w-full">
                <header className="text-left px-4 md:w-1/3">
                    <h2 className="text-4xl text-gray-900 font-serif">
                        {query === "sponsorship" 
                            ? "Sponsorship & Partnerships Contact" 
                            : "Support Contact"}
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        We'd love to hear from you. Fill out the details and we'll be in touch.
                    </p>
                </header>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2 px-3 md:w-2/3 w-full">
                    {/* Subject */}
                    <div className="flex items-center gap-2 rounded-full bg-gray-200 p-1 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 border border-transparent">
                        <div className="flex items-center gap-3 bg-white rounded-full px-4 py-3 w-full">
                            <BookOpen size={20} className="text-gray-400"/>
                            <input
                                type="text"
                                name="subject"
                                required
                                placeholder="Subject"
                                className="bg-transparent w-full focus:outline-none text-gray-900 placeholder:text-gray-400 text-lg"
                            />
                        </div>
                    </div>

                    {/* Body Textarea */}
                    <div className="flex items-start gap-2 rounded-[2rem] bg-gray-200 p-1 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-400 border border-transparent">
                        <div className="flex items-start gap-3 bg-white rounded-[1.8rem] p-4 w-full h-full">
                            <MessageSquare size={20} className="text-gray-400 mt-1"/>
                            <textarea
                                name="body"
                                required
                                rows={8}
                                placeholder="Your message..."
                                className="bg-transparent w-full focus:outline-none text-gray-900 resize-none placeholder:text-gray-400 text-lg leading-relaxed"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="group flex items-center gap-3 bg-gray-900 py-4 px-8 rounded-full font-bold text-white hover:bg-gray-800 transition-all duration-300 active:scale-95"
                        >
                            <span>Send Email</span>
                            <MoveRight
                                className="transition-transform duration-300 group-hover:translate-x-1"
                                size={20}
                            />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}