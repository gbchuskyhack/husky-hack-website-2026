"use client";
import {BookOpen, MessageSquare, MoveRight, User} from 'lucide-react';
import {useState} from "react";

interface ContactSectionProps {
    query: string;
}

export default function ContactSection({query}: ContactSectionProps) {
    const [isHovered, setIsHovered] = useState(false)

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
        <>
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
                <div className="w-full max-w-xl bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
                    <header className="mb-8 text-left px-4">
                        <h2 className="text-3xl font-bold text-gray-900">Get in touch.</h2>
                        <p className="text-gray-500 mt-2">Fill out the fields below to send an email.</p>
                    </header>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Subject Row */}
                        <div className="flex flex-col md:flex-col gap-4">
                            {/* Subject */}
                            <div
                                className="flex items-center gap-2 flex-1 rounded-full bg-gray-100 p-2 pl-4 focus-within:bg-gray-200 transition-colors">
                                <BookOpen size={18} className="text-gray-400"/>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="Subject"
                                    className="bg-transparent p-2 pr-4 flex-1 focus:outline-none text-gray-700 placeholder:text-gray-400"
                                />
                            </div>
                        </div>

                        {/* Body Textarea */}
                        <div
                            className="flex items-start gap-2 rounded-[2rem] bg-gray-100 p-4 focus-within:bg-gray-200 transition-colors">
                            <MessageSquare size={18} className="text-gray-400 mt-3"/>
                            <textarea
                                name="body"
                                required
                                rows={5}
                                placeholder="Your message..."
                                className="bg-transparent p-2 pr-4 flex-1 focus:outline-none text-gray-700 resize-none placeholder:text-gray-400 leading-relaxed"
                            />
                        </div>
                        {/* Submit Action Area */}
                        <div
                            className="flex items-center justify-between gap-2 rounded-full bg-gray-900 p-1 pl-6 group">
                            <p className="text-sm text-gray-400 font-medium">
                                Ready to send?
                            </p>

                            <button
                                type="submit"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="flex items-center gap-3 bg-white py-4 px-8 rounded-full font-bold text-gray-900 hover:pr-10 transition-all duration-300 hover:text-blue-600 active:scale-95"
                            >
                                <span>Send Email</span>
                                <MoveRight
                                    className={`transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}/>
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}