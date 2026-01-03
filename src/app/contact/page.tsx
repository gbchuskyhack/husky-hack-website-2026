'use client';
import ContactSection from "../../components/landing-page-sections/ContactSection.tsx";
import {useSearchParams} from 'next/navigation'
import {type JSX, ReactNode, Suspense} from "react";

const ContactSkeleton = (): ReactNode => {
    return (
        <div className="w-full max-w-xl mx-auto p-6 space-y-6 animate-pulse">
            {/* Title Placeholder */}
            <div className="h-8 bg-gray-200 rounded-md w-1/3"></div>

            {/* Input Field Placeholders */}
            <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-12 bg-gray-100 rounded-md"></div>
            </div>

            <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-32 bg-gray-100 rounded-md"></div>
            </div>

            {/* Button Placeholder */}
            <div className="h-12 bg-blue-100 rounded-md w-full"></div>
        </div>
    );
};
export default function Contact() {

    return (
        <div>
            <Suspense fallback={<ContactSkeleton/>}>
                <ContactSection/>
            </Suspense>
        </div>
    );
}