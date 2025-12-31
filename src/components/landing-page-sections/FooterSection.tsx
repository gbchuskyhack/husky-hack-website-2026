import { HugeiconsIcon } from '@hugeicons/react';
import { DiscordIcon, Linkedin01Icon, InstagramIcon } from '@hugeicons/core-free-icons';

export default function FooterSection() {
    return (
        <section id="Footer" className="py-16 bg-white container mx-auto px-4 overflow-hidden flex flex-row justify-around items-start">
            <div className="flex flex-col items-start">
                <p className="text-gray-600 ">Built with ❤️ by the <span className="font-serif text-2xl">HuskyHack</span> Team</p>
                <p className="text-sm text-gray-600">© {new Date().getFullYear()} Husky Hack</p>
                <div className="flex flex-row gap-4 mt-5">
                    <a href="mailto:huskyhack.info@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        <HugeiconsIcon icon={DiscordIcon} size={24} />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        <HugeiconsIcon icon={Linkedin01Icon} size={24} />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                        <HugeiconsIcon icon={InstagramIcon} size={24} />
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold">
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
                <h3 className="text-lg font-semibold">
                    Contact
                </h3>
                <a href="https://huskyhack.info/support" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    Support
                </a>
                <a href="https://huskyhack.info/sponsorhip-partnerships" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    Sponsorhip & Partnerships
                </a>
            </div>
            <div className="flex flex-col items-start">
                <h3 className="text-lg font-semibold">
                    Resources
                </h3>
                <a href="https://huskyhack.info/code-of-conduct" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    Code of Conduct
                </a>
                <a href="https://huskyhack.info/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    Privacy Policy
                </a>
            </div>
        </section>
    );
}