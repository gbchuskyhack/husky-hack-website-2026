"use client";

import Firefly from "../FireFly.tsx";
import { MapPin, ArrowDown, Calendar } from 'lucide-react';
import { useState, useEffect } from "react";
import Link from "next/link";

import Image from "next/image";
import { Calendar01FreeIcons } from "@hugeicons/core-free-icons";

export default function HeroSection() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const arrowOpacity = Math.max(0, 0.5 - scrollY / 300);
    return (
        <section className="relative w-full min-h-[90vh] bg-[#243B5C] overflow-hidden flex flex-col items-center justify-start pt-48 md:pt-40 text-white">
            <div className="z-20 text-center px-4 flex flex-col items-center">
                <h1 className="font-rethink text-[#FED571] font-bold text-6xl md:text-8xl text-center">
                    HuskyHack
                </h1>

                <p className="text-white text-lg md:text-xl pt-5">
                    May 2, 2026
                    <span className="text-gray-400 mx-2">•</span>
                    George Brown Polytechnic, Waterfront
                </p>
                <div className="mt-7">
                    <p
                        className="px-8 py-3 bg-[gray] text-black border-2 border-[#000000] rounded-full hover:brightness-110 transition"
                    >
                        <span className="font-rethink text-md font-semibold">Apply Now!</span>
                    </p>
                </div>

                <div className="absolute bottom-10 mt-10 flex flex-col items-center gap-2">

                    <p className="text-md text-gray-300">Applications close March 25th.</p>
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
