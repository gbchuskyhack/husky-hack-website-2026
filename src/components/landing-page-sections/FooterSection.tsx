'use client';
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
        <section id="Footer" className="py-16 bg-white container mx-auto px-10 overflow-hidden flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start">
                <div className="flex flex-col items-start">
                    {/* <div className="text-2xl font-serif mt-4 mb-1 md:mt-0 text-white">
                        .
                    </div> */}
                    <div>
                        <p className="text-gray-600 font-sans">
                            Built with love, sweat, and <br />tears by the <span className="font-serif text-2xl text-gray-900">HuskyHack</span> team.
                        </p>
                        <p className="text-gray-600 font-sans">© {new Date().getFullYear()} HuskyHack</p>
                    </div>
                    <div className="flex flex-row gap-4 mt-5">
                        <a href="/construction" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                            <HugeiconsIcon icon={DiscordIcon} size={24} />
                        </a>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                            <HugeiconsIcon icon={Linkedin01Icon} size={24} />
                        </a>
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                            <HugeiconsIcon icon={InstagramIcon} size={24} />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-serif mt-4 mb-1 md:mt-0">
                        Info
                    </h3>
                    <a href="#About-Us" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        About Us
                    </a>
                    <a href="#Sponsors" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        Sponsors
                    </a>
                    <a href="#FAQ" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        FAQ
                    </a>
                    <a href="#Team" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        Our Team
                    </a>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-serif mt-4 mb-1 md:mt-0">
                        Contact
                    </h3>
                    <a href="/contact?query=support" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        Support
                    </a>
                    <a href="/contact?query=sponsorship" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        Sponsorship & Partnerships
                    </a>
                </div>
                <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-serif mt-4 mb-1 md:mt-0">
                        Resources
                    </h3>
                    <a href="/construction" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        Code of Conduct
                    </a>
                    <a href="/construction" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        Privacy Policy
                    </a>
                </div>
            </div>

            <div className="w-full mt-10 leading-none">
                <svg viewBox={viewBox} className="w-full h-auto overflow-visible">
                    <text
                        ref={textRef}
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        className="font-serif fill-current"
                    >
                        HUSKY HACK
                    </text>
                </svg>
            </div>
        </section>
    );
}