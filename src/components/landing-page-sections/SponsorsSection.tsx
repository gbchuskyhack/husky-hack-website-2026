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
    gold: "w-[280px] h-[140px] sm:w-[340px] sm:h-[170px]",
    silver: "w-[200px] h-[100px] sm:w-[240px] sm:h-[120px]",
    bronze: "w-[140px] h-[70px] sm:w-[170px] sm:h-[86px]",
    "in-kind": "w-[160px] h-[80px] sm:w-[190px] sm:h-[96px]"
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
                                                    className={`flex flex-shrink-0 items-center justify-center opacity-100 transition duration-300 hover:grayscale ${tierCardSizes[tier.id]}`}
                                                >
                                                    <Image
                                                        src={sponsor.logo}
                                                        alt={`${sponsor.name} logo`}
                                                        width={340}
                                                        height={170}
                                                        className="h-full w-full object-contain"
                                                    />
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
