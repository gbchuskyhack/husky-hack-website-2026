"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function MentorRegistration() {
    const router = useRouter();

    // Registration is closed — bounce everyone back home.
    useEffect(() => {
        router.replace("/");
    }, [router]);

    return (
        <div className="grid h-[100dvh] w-full place-items-center bg-[linear-gradient(to_bottom,#213248,#090F18,#030609)] p-6 text-center text-sm text-white md:text-base">
            <div>
                <p>Registration is currently closed.</p>
                <p className="mt-2 text-white/70">
                    Redirecting you home… If not, <Link href="/" className="underline hover:text-[#FED571]">click here</Link>.
                </p>
            </div>
        </div>
    );
}
