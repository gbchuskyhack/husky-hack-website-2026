import SponsorContactLink from "../SponsorContactLink";
import Image from "next/image";
import sponsorsData from "../../data/sponsors.json";

type Sponsor = {
    name: string;
    logo: string;
    href?: string;
};

type SponsorTier = {
    id: "gold" | "silver" | "bronze" | "in-kind";
    label: string;
    sponsors: Sponsor[];
};

const tiers = sponsorsData.tiers as SponsorTier[];

const tierCardSizes: Record<SponsorTier["id"], string> = {
    gold: "w-[260px] h-[130px] sm:w-[300px] sm:h-[150px]",
    silver: "w-[220px] h-[110px] sm:w-[250px] sm:h-[126px]",
    bronze: "w-[180px] h-[96px] sm:w-[210px] sm:h-[110px]",
    "in-kind": "w-[200px] h-[104px] sm:w-[230px] sm:h-[116px]"
};

export default function SponsorsSection() {
    const hasAnySponsors = tiers.some((tier) => tier.sponsors.length > 0);

    return (
        <section
            id="Sponsors"
            className="w-full py-24"
        >
            <div className="mx-auto w-full max-w-6xl px-6 pb-12 md:px-12">
                <h1 className="mb-12 text-center font-rethink text-3xl font-semibold text-[#FED571]">
                    OUR SPONSORS
                </h1>

                {hasAnySponsors ? (
                    <div className="space-y-10">
                        {tiers
                            .filter((tier) => tier.sponsors.length > 0)
                            .map((tier) => (
                        <div key={tier.id}>
                            <h2 className="mb-4 text-center font-rethink text-lg font-semibold uppercase tracking-[0.12em] text-white">
                                {tier.label}
                            </h2>

                            <div className="flex w-full flex-wrap justify-center gap-3 sm:gap-4">
                                {tier.sponsors.map((sponsor) => {
                                    const card = (
                                        <div
                                            className={`flex flex-shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 p-4 transition-colors duration-200 hover:bg-white/10 ${tierCardSizes[tier.id]}`}
                                        >
                                            <div className="flex h-full w-full items-center justify-center">
                                                <Image
                                                    src={sponsor.logo}
                                                    alt={`${sponsor.name} logo`}
                                                    width={220}
                                                    height={96}
                                                    className="h-[70%] w-auto max-w-[85%] object-contain"
                                                />
                                            </div>
                                        </div>
                                    );

                                    return sponsor.href ? (
                                        <a
                                            key={`${tier.id}-${sponsor.name}`}
                                            href={sponsor.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block"
                                            aria-label={`Visit ${sponsor.name}`}
                                        >
                                            {card}
                                        </a>
                                    ) : (
                                        <div key={`${tier.id}-${sponsor.name}`}>{card}</div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                    </div>
                ) : (
                    <div className="flex w-full justify-center">
                        <div className="flex h-36 w-36 flex-col items-center justify-center rounded-lg border border-dashed border-white/30 text-white/55">
                            <span className="font-rethink text-3xl leading-none">?</span>
                            <span className="mt-2 text-xs tracking-[0.08em] text-white/50">
                                Announcing soon
                            </span>
                        </div>
                    </div>
                )}

                <div className="relative mt-10 flex w-full flex-col items-center justify-center gap-5">
                    <SponsorContactLink />
                </div>
            </div>
        </section>
    );
}
