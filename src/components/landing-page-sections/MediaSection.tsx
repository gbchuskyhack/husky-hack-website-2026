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
    const visibleTiers = tiers.filter((tier) => tier.sponsors.length > 0);

    return (
        <section
            id="MediaPartners"
            className="w-full pt-8 pb-24"
        >
            <div className="mx-auto w-full max-w-6xl px-6 md:px-12">
                <h1 className="mb-12 text-center font-rethink text-3xl font-semibold text-[#FED571] uppercase">
                    OUR PARTNERS
                </h1>

                {hasAnyPartners ? (
                    <div className="space-y-8">
                        {visibleTiers.map((tier) => (
                            <div key={tier.id} className="space-y-3">
                                <h2 className="text-center font-rethink text-xl font-semibold uppercase tracking-wide text-[#F8F1DE]">
                                    {tier.label}
                                </h2>
                                <div className="flex w-full flex-wrap justify-center gap-4 sm:gap-6">
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
