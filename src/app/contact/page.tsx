'use client';
import ContactSection from "../../components/landing-page-sections/ContactSection.tsx";
import { useSearchParams } from 'next/navigation'

export default function Contact() {
    const query = useSearchParams().get("query") || "support";

    return (
        <div>
            <ContactSection query={query} />
        </div>
    );
}