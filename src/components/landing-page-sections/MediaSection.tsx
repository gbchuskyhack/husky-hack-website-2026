import React from "react";
import MediaPartnerCard from "../partners/MediaPartnerCard";
import partnersData from "../../data/partners.json";

type Partner = {
    name: string;
    logo: string;
    logoDark?: string;
    link: string;
};

type PartnerTier = {
    id: string;
    label: string;
    description: string;
    sponsors: Partner[];
};

const tiers = partnersData.tiers as PartnerTier[];

export default function MediaSection() {
    const hasAnyPartners = tiers.some((tier) => tier.sponsors.length > 0);

    return (
        <section
            id="MediaPartners"
            className="w-full py-24"
        >
            <div className="mx-auto w-full max-w-6xl px-6 pb-24 md:px-12">
                <h1 className="mb-12 text-center font-rethink text-3xl font-semibold text-[#FED571] uppercase">
                    OUR MEDIA PARTNERS
                </h1>

                {hasAnyPartners ? (
                    <div className="space-y-10">
                        {tiers
                            .filter((tier) => tier.sponsors.length > 0)
                            .map((tier) => (
                                <div key={tier.id}>
                                    {/* <h2 className="mb-4 text-center font-rethink text-lg font-semibold uppercase tracking-[0.12em] text-white">
                                        {tier.label}
                                    </h2> */}
                                    <div className="flex w-full flex-wrap justify-center gap-6 sm:gap-8">
                                        {tier.sponsors.map((partner) => (
                                            <MediaPartnerCard
                                                key={partner.name}
                                                name={partner.name}
                                                logo={partner.logo}
                                                logoDark={partner.logoDark}
                                                link={partner.link}
                                            />
                                        ))}
                                    </div>
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
