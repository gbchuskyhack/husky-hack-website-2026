"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function DiscordCustomIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px] shrink-0"
            fill="currentColor"
        >
            <path d="M20.3 4.37A19.8 19.8 0 0 0 15.42 2.8a.07.07 0 0 0-.07.03c-.21.37-.45.86-.62 1.24a18.4 18.4 0 0 0-5.46 0 12.7 12.7 0 0 0-.63-1.24.07.07 0 0 0-.07-.03c-1.74.3-3.39.84-4.88 1.57a.06.06 0 0 0-.03.02C.54 8.9-.27 13.3.12 17.64a.08.08 0 0 0 .03.05c1.9 1.4 3.74 2.25 5.54 2.8a.08.08 0 0 0 .09-.03c.42-.58.8-1.2 1.12-1.86a.08.08 0 0 0-.04-.11 13 13 0 0 1-1.76-.84.08.08 0 0 1-.01-.13c.12-.09.25-.19.36-.29a.07.07 0 0 1 .08-.01c3.7 1.7 7.7 1.7 11.35 0a.07.07 0 0 1 .08.01c.12.1.24.2.36.29a.08.08 0 0 1-.01.13c-.56.33-1.15.61-1.76.84a.08.08 0 0 0-.04.11c.33.65.7 1.28 1.12 1.86a.08.08 0 0 0 .09.03c1.8-.55 3.64-1.4 5.54-2.8a.08.08 0 0 0 .03-.05c.47-5.03-.79-9.39-3.52-13.24a.06.06 0 0 0-.03-.03ZM8.73 14.98c-1.1 0-2-.99-2-2.2 0-1.22.89-2.2 2-2.2 1.12 0 2.02.99 2 2.2 0 1.22-.89 2.2-2 2.2Zm6.54 0c-1.1 0-2-.99-2-2.2 0-1.22.89-2.2 2-2.2 1.12 0 2.02.99 2 2.2 0 1.22-.88 2.2-2 2.2Z" />
        </svg>
    );
}

const CAROUSEL_IMAGES = [
    { src: "/2026-pics/huskyhack2026-pic1.jpeg", alt: "HuskyHack 2026 hackers collaborating" },
    { src: "/2026-pics/huskyhack2026-pic2.jpeg", alt: "HuskyHack 2026 event moment" },
    { src: "/2026-pics/DSC_1514.jpg", alt: "HuskyHack 2026 hackers building projects" },
    { src: "/2026-pics/DSC_1575.jpg", alt: "HuskyHack 2026 team working together" },
    { src: "/2026-pics/DSC_1838.jpg", alt: "HuskyHack 2026 at George Brown Waterfront" },
    { src: "/2026-pics/DSC_2012.jpg", alt: "HuskyHack 2026 celebration with the pack" },
];

function AboutCarousel() {
    const [index, setIndex] = useState(0);

    const goTo = useCallback((i: number) => {
        setIndex((i + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
    }, []);

    const next = useCallback(() => goTo(index + 1), [goTo, index]);
    const prev = useCallback(() => goTo(index - 1), [goTo, index]);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % CAROUSEL_IMAGES.length);
        }, 5000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="flex w-full flex-col">
            <div className="flex w-full items-center gap-1 sm:gap-2">
                <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous photo"
                    className="shrink-0 p-1 text-[#FED571] transition hover:text-white"
                >
                    <ChevronLeft className="h-7 w-7" strokeWidth={2.5} />
                </button>

                <div className="relative h-56 sm:h-[340px] flex-1 overflow-hidden rounded-[26px]">
                    {CAROUSEL_IMAGES.map((img, i) => (
                        <div
                            key={img.src}
                            className={`absolute inset-0 transition-opacity duration-500 ${
                                i === index ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                            aria-hidden={i !== index}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, 560px"
                                className="object-cover"
                                priority={i === 0}
                            />
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={next}
                    aria-label="Next photo"
                    className="shrink-0 p-1 text-[#FED571] transition hover:text-white"
                >
                    <ChevronRight className="h-7 w-7" strokeWidth={2.5} />
                </button>
            </div>

            <div className="mt-3 flex items-center justify-center gap-1.5">
                {CAROUSEL_IMAGES.map((img, i) => (
                    <button
                        key={img.src}
                        type="button"
                        onClick={() => goTo(i)}
                        aria-label={`Go to photo ${i + 1}`}
                        className={`h-2 rounded-full transition-all ${
                            i === index ? "w-6 bg-[#FED571]" : "w-2 bg-white/50 hover:bg-white/90"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function AboutUsSection() {
    return (
        <section
            className="relative w-full lg:pb-14 px-8 lg:px-0
            overflow-hidden flex flex-col items-center justify-center
            bg-[#1C6D41] scroll-mt-40 pt-4"
            id="Past-Event"
        >
            <div className="relative z-10 flex flex-col items-center gap-3 w-full lg:w-[95%] max-w-5xl">
                <h2 className="text-white text-2xl font-rethink font-semibold">
                    PAST EVENT
                </h2>

                {/* Detached left image / right content */}
                <div className="mt-4 w-full max-w-5xl mx-auto px-0 sm:px-4 flex flex-col sm:flex-row gap-6 md:gap-8 items-center">
                            {/* Left: carousel */}
                            <figure
                                className="w-full sm:w-[480px] md:w-[520px] shrink-0 sm:self-center"
                            >
                                <AboutCarousel />
                            </figure>
                            {/* Right: text + Discord */}
                            <div
                                className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left justify-center"
                            >
                                <h3 className="font-rethink font-semibold text-xl md:text-2xl text-[#FED571] mb-3">
                                    HuskyHack 2026
                                </h3>
                                <p className="text-gray-100 text-sm md:text-base leading-relaxed font-instrument">
                                    On <strong className="text-white">May 2nd, 2026</strong>,{" "}
                                    <strong className="text-white">150+ builders</strong>{" "}
                                    joined us in the heart of Toronto at George Brown Polytechnic, Waterfront for{" "}
                                    <strong className="text-white">12 hours</strong> of building, learning, and community.{" "}
                                    Fueled by free food and plenty of caffeine, hackers formed unstoppable teams, shipped real projects, and left with unforgettable memories — and found their pack.
                                </p>
                                <Link
                                    href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || ""}
                                    className="inline-flex items-center gap-2 mt-4 px-5 md:px-6 py-2.5 md:py-3 rounded-full border-2 border-[#A6D6B8]/70 bg-[#1E5A37]/85 text-white transition hover:bg-[#287246]/90 hover:border-[#C2E6CF]"
                                >
                                    <DiscordCustomIcon />
                                    <span className="font-rethink text-md font-semibold tracking-wide whitespace-nowrap">Join Our Discord!</span>
                                </Link>
                            </div>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
                <div className="relative w-full aspect-[1440/220] min-h-[56px] md:min-h-[90px]">
                    <Image
                        src="/about-us-section/about-us.svg"
                        alt="Grass foreground"
                        className="object-cover object-bottom"
                        priority
                        fill
                        sizes="100vw"
                    />
                </div>
            </div>
        </section>
    );
}
