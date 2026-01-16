"use client";

import { useRef } from "react";

import BackgroundLayer from "../hero-svg/BackgroundLayer";
import NewsletterForm from "../NewsletterForm";
import SponsorContactLink from "../SponsorContactLink";

export default function HeroSection() {
    return (
        <section className="relative w-full bg-[#243B5C] overflow-hidden flex flex-col justify-center items-center pt-24 text-white">
            {/* Text section */}
            <div className="z-20 text-center px-4 mb-32 h-[80vh] flex flex-col items-center justify-center">
                <h1 className="text-4xl md:text-6xl font-bold">
                    {/*Welcome to Camp <br />{" "}*/}
                    <span className="text-amber-300">HuskyHack</span>
                </h1>

                <p className="text-white italic">
                    Where curious minds find their pack
                </p>

                <p className="text-base text-gray-300 mt-7">
                    May 2026 • George Brown Polytechnic, Daniel’s Building
                </p>

                {/* Sign up for future updates */}
                <div className="mt-7">
                    <NewsletterForm />
                </div>

                {/* Sponsor us section */}
                <div className="mt-7">
                    <SponsorContactLink />
                </div>
            </div>

            {/* Svg Background layer */}
            <BackgroundLayer className="absolute w-fit" />
        </section>
    );
}
