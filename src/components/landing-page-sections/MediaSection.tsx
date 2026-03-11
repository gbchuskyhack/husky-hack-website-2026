import React from "react";
import MediaPartnerCard from "../partners/MediaPartnerCard";
import startupGrindLogo from "../../assets/startupGrind-light.jpg";
import startupGrindDarkLogo from "../../assets/startupGrind-dark.jpg";

export default function MediaSection() {
    // Dummy or initial data for media partners
    const mediaPartners = [
        {
            name: "Startup Grind",
            logo: startupGrindLogo,
            logoDark: startupGrindDarkLogo,
            link: "https://www.startupgrind.com/"
        }
    ];

    const hasAnyPartners = mediaPartners.length > 0;

    return (
        <section
            id="MediaPartners"
            className="w-full bg-[#1A1A1A] py-24" // Dark background similar to other sections outside gradient, adjust if needed
        >
            <div className="mx-auto w-full max-w-6xl px-6 pb-24 md:px-12">
                <h1 className="mb-12 text-center font-rethink text-3xl font-semibold text-[#FED571] uppercase">
                    OUR MEDIA PARTNERS
                </h1>

                {hasAnyPartners ? (
                    <div className="flex w-full flex-wrap justify-center gap-6 sm:gap-8">
                        {mediaPartners.map((partner, index) => (
                            <div key={index}>
                                <MediaPartnerCard
                                    name={partner.name}
                                    logo={partner.logo}
                                    logoDark={partner.logoDark}
                                    link={partner.link}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex w-full justify-center">
                        <div className="flex h-36 w-36 flex-col items-center justify-center rounded-lg border border-dashed border-white/30 text-white/55">
                            <span className="font-rethink text-3xl leading-none">?</span>
                            <span className="mt-2 text-xs tracking-[0.08em] text-white/50 text-center">
                                Announcing soon
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
