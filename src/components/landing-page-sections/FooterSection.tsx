"use client";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import socialLinks from "../../data/socialLinks.json";
import {
    DiscordIcon,
    Linkedin01Icon,
    InstagramIcon,
} from "@hugeicons/core-free-icons";

export default function FooterSection() {
    const isHackerRegistrationOpen = Boolean(process.env.NEXT_PUBLIC_OPNFORM_HACKER_FORM_ID);
    const isMentorRegistrationOpen = Boolean(process.env.NEXT_PUBLIC_OPNFORM_MENTOR_FORM_ID);
    const isJudgeRegistrationOpen = Boolean(process.env.NEXT_PUBLIC_OPNFORM_JUDGE_FORM_ID);

    return (
        <footer id="Footer" className="pt-10 bg-[#1E2024] flex flex-col font-semibold font-instrument">
            <div className="bg-[#FF7703] rounded-tl-3xl rounded-tr-3xl px-6 py-10 md:px-16 md:py-16 flex flex-col lg:flex-row gap-10 lg:gap-20 min-h-[500px]">
                {/* LEFT COLUMN: Branding & Logo */}
                <div className="flex flex-col items-start justify-between w-full lg:w-5/12 h-full">
                    <div>
                        <p className="text-gray-900 font-instrument text-3xl md:text-4xl font-semibold leading-tight">
                            Made with love by the
                            <br />
                            <span className="font-bold">HuskyHack</span> team
                        </p>
                        <p className="text-gray-900 font-instrument mt-3 font-semibold">
                            © {new Date().getFullYear()} HuskyHack
                        </p>

                        <p className="text-[11px] leading-tight text-gray-900/60 mt-4 max-w-[280px] font-medium selection:bg-white/30">
                            This site is protected by reCAPTCHA and the Google{' '}
                            <a
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-gray-900/30 underline-offset-2 hover:text-white hover:decoration-white transition-all duration-200"
                            >
                                Privacy Policy
                            </a>{' '}
                            and{' '}
                            <a
                                href="https://policies.google.com/terms"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline decoration-gray-900/30 underline-offset-2 hover:text-white hover:decoration-white transition-all duration-200"
                            >
                                Terms of Service
                            </a>{' '}
                            apply.
                        </p>

                        <div className="flex flex-row gap-4 mt-6">
                            <a
                                href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL ? process.env.NEXT_PUBLIC_DISCORD_INVITE_URL : "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-instrument font-semibold text-gray-900 hover:text-white transition-colors duration-300"
                            >
                                <HugeiconsIcon icon={DiscordIcon} size={24} />
                            </a>
                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-instrument font-semibold text-gray-900 hover:text-white transition-colors duration-300"
                            >
                                <HugeiconsIcon
                                    icon={Linkedin01Icon}
                                    size={24}
                                />
                            </a>
                            <a
                                href={socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-instrument font-semibold text-gray-900 hover:text-white transition-colors duration-300"
                            >
                                <HugeiconsIcon icon={InstagramIcon} size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 w-40 md:w-48 hidden md:block">
                        <Image
                            src="/huskyhacklogo.svg"
                            alt="HuskyHack Logo"
                            width={200}
                            height={50}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* RIGHT COLUMN: Links & Big Text */}
                <div className="flex flex-col justify-between w-full lg:w-7/12 h-full">
                    {/* Top: Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 font-instrument">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl md:text-2xl font-rethink font-bold text-gray-900 mb-1">
                                Info
                            </h3>
                            <a
                                href="#About-Us"
                                className="font-instrument font-medium underline text-gray-900 hover:text-white transition-colors"
                            >
                                About Us
                            </a>
                            <a
                                href="#Sponsors"
                                className="font-instrument font-medium underline text-gray-900 hover:text-white transition-colors"
                            >
                                Sponsors
                            </a>
                            <a
                                href="#FAQ"
                                className="font-instrument font-medium underline text-gray-900 hover:text-white transition-colors"
                            >
                                FAQ
                            </a>
                            <a
                                href="#Team"
                                className="font-instrument font-medium underline text-gray-900 hover:text-white transition-colors"
                            >
                                Our Team
                            </a>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl md:text-2xl font-rethink font-bold text-gray-900 mb-1">
                                Contact
                            </h3>
                            <a
                                href="/contact?query=support"
                                className="font-instrument font-medium underline text-gray-900 hover:text-white transition-colors"
                            >
                                Support
                            </a>
                            <a
                                href="/contact?query=sponsorship"
                                className="font-instrument font-medium underline text-gray-900 hover:text-white transition-colors"
                            >
                                Sponsorship
                            </a>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl md:text-2xl font-rethink font-bold text-gray-900 mb-1">
                                Resources
                            </h3>
                            <a
                                href="/code-of-conduct"
                                className="font-instrument font-medium underline text-gray-900 hover:text-white transition-colors"
                            >
                                Code of Conduct
                            </a>
                        </div>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-xl md:text-2xl font-rethink font-bold text-gray-900 mb-1">
                                Apply
                            </h3>
                            {isHackerRegistrationOpen ? (
                                <a
                                    href="/registration/hacker"
                                    className="font-instrument font-semibold underline text-gray-900 hover:text-white transition-colors"
                                >
                                    Apply as Hacker
                                </a>
                            ) : (
                                <span className="font-instrument font-semibold text-gray-700/70 cursor-not-allowed">
                                    Apply as Hacker
                                </span>
                            )}
                            {isMentorRegistrationOpen ? (
                                <a
                                    href="/registration/mentor"
                                    className="font-instrument font-semibold underline text-gray-900 hover:text-white transition-colors"
                                >
                                    Apply as Mentor
                                </a>
                            ) : (
                                <span className="font-instrument font-semibold text-gray-700/70 cursor-not-allowed">
                                    Apply as Mentor
                                </span>
                            )}
                            {isJudgeRegistrationOpen ? (
                                <a
                                    href="/registration/judge"
                                    className="font-instrument font-semibold underline text-gray-900 hover:text-white transition-colors"
                                >
                                    Apply as Judge
                                </a>
                            ) : (
                                <span className="font-instrument font-semibold text-gray-700/70 cursor-not-allowed">
                                    Apply as Judge
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Bottom: Big Text  */}
                    <div className="w-full pt-12 gap-4 lg:gap-2 flex flex-col items-start
                    lg:mt-auto">
                        <p className="font-rethink text-[#1E2024] font-bold tracking-[-0.05em] text-center lg:text-left lg:-translate-x-3 text-[15vw] lg:text-[9vw] leading-none select-none">
                            HuskyHack
                        </p>
                        <p className="font-instrument font-semibold text-gray-900/80 text-center lg:text-left text-md ">
                            Where curious minds find their pack
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
