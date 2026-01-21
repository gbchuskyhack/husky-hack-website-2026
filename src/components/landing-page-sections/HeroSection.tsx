import NewsletterForm from "../NewsletterForm";
import SponsorContactLink from "../SponsorContactLink";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative w-full min-h-[90vh] bg-[#243B5C] overflow-hidden flex flex-col items-center justify-center text-white">
            <div className="z-20 text-center px-4 flex flex-col items-center justify-center mt-10 md:mt-0">
                <h1 className="text-4xl md:text-6xl font-bold">
                    <span className="text-amber-300">HuskyHack</span>
                </h1>

                <p className="text-white italic">
                    Where curious minds find their pack
                </p>

                <p className="text-base text-gray-300 mt-7">
                    May 2026 • George Brown Polytechnic, Daniel&apos;s Building
                </p>

                <div className="mt-7">
                    <NewsletterForm />
                </div>

                <div className="mt-7">
                    <SponsorContactLink />
                </div>
            </div>

            {/* Svg Background layer */}
            <div className="absolute bottom-0 w-full h-full z-10">
                <Image
                    src="/hero-svg/backgroundLayer.svg"
                    alt="Camping landscape"
                    className="object-cover object-bottom"
                    fill
                    priority
                    sizes="100vw"
                />
            </div>
        </section>
    );
}
