import SponsorContactLink from "../SponsorContactLink";
import Image from "next/image";
import sponsorsData from "../../data/sponsors.json";
import SponsorLayout from "../sponsors/SponsorLayout";

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
                    <SponsorLayout />
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
