"use client";

import Firefly from "../FireFly.tsx";
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from "react";
import Link from "next/link";

import Image from "next/image";

export default function HeroSection() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const arrowOpacity = Math.max(0, 0.5 - scrollY / 300);
    return (
        <section className="relative w-full min-h-[90vh] bg-[#243B5C] overflow-hidden flex flex-col items-center justify-start pt-32 md:pt-36 pb-28 text-white">
            <div className="z-20 text-center px-4 flex flex-col items-center w-full">
                <h1 className="font-rethink text-[#FED571] font-bold text-6xl md:text-8xl text-center">
                    HuskyHack
                </h1>

                <p className="text-gray-200 text-base md:text-lg pt-5 max-w-2xl mx-auto leading-relaxed">
                    George Brown Polytechnic&apos;s Largest Student-run Hackathon Network.
                </p>
                <Link href="/about" className="text-[#FED571] underline underline-offset-4 decoration-[#FED571]/50 hover:decoration-[#FED571] transition mt-1 text-sm md:text-base">
                    Learn more
                </Link>

                {/* Upcoming event spotlight — image box left, badge box right, connected */}
                <div className="mt-8 w-full max-w-3xl mx-auto px-4">
                    <div className="w-full p-1.5 rounded-[42px]" style={{ backgroundColor: "#7A4416" }}>
                        <div className="w-full flex flex-col sm:flex-row">
                            {/* Left: image as its own box — rounded outer corners, square where it meets the badge box */}
                            <figure
                                className="relative w-full sm:w-60 md:w-72 shrink-0 overflow-hidden border-dashed rounded-t-[34px] rounded-b-none border-[3px] border-b-0 sm:rounded-l-[34px] sm:rounded-r-none sm:rounded-tr-none sm:rounded-br-none sm:border-b-[3px] sm:border-r-0 h-56 sm:h-auto sm:min-h-[320px]"
                                style={{ borderColor: "#7A4416" }}
                            >
                                <Image
                                    src="/hacktober-fest/logo.png"
                                    alt="Husky in an autumn field"
                                    className="object-cover"
                                    fill
                                    sizes="(max-width: 640px) 100vw, 288px"
                                />
                                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white border border-white px-3 py-1 text-[10px] md:text-[11px] font-semibold tracking-[0.16em] shadow-md" style={{ color: "#C06F1F" }}>
                                    Upcoming Event
                                </span>
                            </figure>
                            {/* Right: badge-style box — square where it meets the image, rounded outer corners */}
                            <div
                                className="flex-1 rounded-b-[34px] rounded-t-none border-[3px] border-t-0 sm:rounded-r-[34px] sm:rounded-l-none sm:rounded-tl-none sm:rounded-bl-none sm:border-t-[3px] sm:border-l-0 p-5 md:p-7 flex flex-col items-center sm:items-start text-center sm:text-left"
                                style={{
                                    backgroundColor: "#C06F1F",
                                    borderColor: "#7A4416",
                                }}
                            >
                                <h3 className="text-2xl md:text-3xl font-semibold text-white pb-1 mb-1 w-full font-rethink">
                                    Husky Hacktoberfest Hack Day Toronto
                                </h3>
                                <p className="text-white mb-4 text-sm md:text-md leading-relaxed font-instrument">
                                    Join us for 6 hours in Toronto exploring open-source AI tools, open-weight models, and beyond. Connect with 50 other builders and walk away with real experiences, new friends, and potential collaborators. No experience required, just curiosity and a laptop.
                                </p>
                                <Link
                                    href="https://events.mlh.com/events/15057-husky-hacktoberfest-hack-day-toronto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block w-full max-w-[200px] sm:mx-0 mx-auto"
                                >
                                    <span
                                        className="block w-full text-center text-white font-semibold py-3 px-12 rounded-full transition-all duration-200 ease-out hover:brightness-90 hover:-translate-y-0.5 mt-auto font-rethink"
                                        style={{
                                            backgroundColor: "#5A3110",
                                            border: "2px solid #5A3110",
                                        }}
                                    >
                                        Apply Now
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center gap-2 pb-16">
                    <div className="flex flex-col items-center">
                        <ArrowDown className="w-6 h-6 text-white mt-4 animate-bounce" style={{ opacity: arrowOpacity }} />
                    </div>
                </div>



                {/* <p className="text-[#FED571] italic pt-7">
                    Where curious minds find their pack
                </p> */}
            </div>

            {/* Svg Background layer */}
            <div className="absolute inset-0 z-10 -top-12 md:top-0">
                <Image
                    src="/hero-svg/backgroundLayer.svg"
                    alt="Camping landscape"
                    className="object-cover object-bottom"
                    fill
                    priority
                    sizes="100vw"
                />

                {/* Standard Fireflies */}
                <Firefly top="20%" left="20%" />
                <Firefly top="50%" left="50%" />
                <Firefly top="80%" left="80%" />
                <Firefly top="30%" left="70%" />

                {/* Larger Fireflies */}
                <Firefly top="15%" left="85%" size="8px" widthRange={150} heightRange={100} />
                <Firefly top="70%" left="15%" size="9px" />
                <Firefly top="40%" left="90%" size="7px" />

                {/* Tighter Wiggle Fireflies */}
                <Firefly top="10%" left="40%" widthRange={30} heightRange={30} />
                <Firefly top="60%" left="60%" widthRange={40} heightRange={40} />
                <Firefly top="85%" left="30%" size="3px" widthRange={20} heightRange={20} />
                <Firefly top="90%" left="65%" size="5px" widthRange={50} heightRange={50} minDurationX={5} maxDurationX={10} />
            </div>

        </section>
    );
}
