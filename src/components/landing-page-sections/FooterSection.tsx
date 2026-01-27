'use client';
import Image from 'next/image';
import { HugeiconsIcon } from '@hugeicons/react';
import { useEffect, useRef, useState } from 'react';
import socialLinks from '../../data/socialLinks.json';
import { DiscordIcon, Linkedin01Icon, InstagramIcon } from '@hugeicons/core-free-icons';

export default function FooterSection() {
    const textRef = useRef<SVGTextElement>(null);
    const [viewBox, setViewBox] = useState("0 0 100 20");

    useEffect(() => {
        const updateViewBox = () => {
            if (textRef.current) {
                const bbox = textRef.current.getBBox();
                setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
            }
        };

        updateViewBox();
        document.fonts.ready.then(updateViewBox);
        globalThis.addEventListener('resize', updateViewBox);
        return () => globalThis.removeEventListener('resize', updateViewBox);
    }, []);

    return (
        <footer id="Footer" className="pt-10 bg-[#1E2024] flex flex-col">
            <div className="bg-[#FF7703] rounded-2xl px-16 py-16 h-full">
                <div className="flex flex-col md:flex-row space-between md:items-start items-center ">
                    <div className="flex flex-col items-start h-full w-full md:w-[50%]">
                        {/* Left side of footer */}

                        <div>
                            <p className="text-gray-900 font-rethink-sans text-4xl font-bold">
                                Made with love by the<br />
                                Husky Hack team
                            </p>
                            <p className="text-gray-900 font-rethink-sans">© {new Date().getFullYear()} HuskyHack</p>
                        </div>
                        <div className="flex flex-row gap-4 mt-5">
                            <a href="/construction" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors duration-300">
                                <HugeiconsIcon icon={DiscordIcon} size={24} />
                            </a>
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors duration-300">
                                <HugeiconsIcon icon={Linkedin01Icon} size={24} />
                            </a>
                            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors duration-300">
                                <HugeiconsIcon icon={InstagramIcon} size={24} />
                            </a>
                        </div>
                        <div className="mt-5 w-48 md:w-48">
                            <Image
                                src="/huskyhacklogo.svg"
                                alt="HuskyHack Logo"
                                width={1}
                                height={1}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 md:gap-10 lg:gap-15 flex-grow w-full md:w-[50%]"> {/* Right side of footer */}
                        <div className="flex flex-row gap-5 md:gap-10 lg:gap-15 justify-between md:justify-center flex-grow">
                            <div className="flex flex-col items-start ">
                                <h3 className="text-2xl md:text-3xl font-rethink-sans mt-4 mb-1 md:mt-0 font-bold text-gray-900">
                                    Info
                                </h3>
                                <a href="#About-Us" className="text-gray-900 hover:text-blue-600 transition-colors duration-300">
                                    About Us
                                </a>
                                <a href="#Sponsors" className="text-gray-900 hover:text-blue-600 transition-colors duration-300">
                                    Sponsors
                                </a>
                                <a href="#FAQ" className="text-gray-900 hover:text-blue-600 transition-colors duration-300">
                                    FAQ
                                </a>
                                <a href="#Team" className="text-gray-900 hover:text-blue-600 transition-colors duration-300">
                                    Our Team
                                </a>
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-2xl md:text-3xl font-rethink-sans mt-4 mb-1 md:mt-0 font-bold text-gray-900">
                                    Contact
                                </h3>
                                <a href="/contact?query=support" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors duration-300">
                                    Support
                                </a>
                                <a href="/contact?query=sponsorship" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors duration-300">
                                    Sponsorship & Partnerships
                                </a>
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-2xl md:text-3xl font-rethink-sans mt-4 mb-1 md:mt-0 font-bold text-gray-900" >
                                    Resources
                                </h3>
                                <a href="/construction" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors duration-300">
                                    Code of Conduct
                                </a>
                                <a href="/construction" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors duration-300">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>

                        <div className="w-full mt-10 leading-none">
                            
                                <p
                                    className="font-rethink-sans text-[#1E2024] font-medium tracking-[-0.05em] text-center text-[15vw] md:text-[9vw]"
                                >
                                    Husky Hack
                                </p>
                          
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    );
}