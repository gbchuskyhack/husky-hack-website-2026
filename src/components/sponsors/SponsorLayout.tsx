import Image from "next/image";
import BronzeSponsorCard from "./BronzeSponsorCard";
import GoldSponsorCard from "./GoldSponsorCard";
import SilverSponsorCard from "./SilverSponsorCard";
import sponsors from "../../data/sponsors.json";

// ── All card sizes live here ─────────────────────────────────────────────────
const GOLD_SIZE = "w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[270px] md:h-[270px]";
const SILVER_SIZE = "w-[90px]  h-[90px]  sm:w-[135px] sm:h-[135px] md:w-[160px] md:h-[160px]";
const BRONZE_SIZE = "w-[65px]  h-[65px]  sm:w-[105px] sm:h-[105px] md:w-[125px] md:h-[125px]";
// ─────────────────────────────────────────────────────────────────────────────

// Each array is ordered outer → inner; right side mirrors in reverse
const TIER_STARS = [
    [{ deg: 10, size: 18 }],
    [{ deg: -20, size: 13 }, { deg: 12, size: 18 }],
    [{ deg: -15, size: 11 }, { deg: 8, size: 15 }, { deg: -4, size: 19 }],
];

function TierHeader({ label, stars, textColor }: { label: string; stars: number; textColor: string }) {
    const starDefs = TIER_STARS[stars - 1];
    return (
        <div className="mb-4 flex items-center gap-1">
            {starDefs.map(({ deg, size }, i) => (
                <Image key={i} src="/sponsors-section/star.png" alt="" width={size} height={size} style={{ transform: `rotate(${deg}deg)` }} />
            ))}
            <span className={`mx-1 font-rethink text-sm font-bold uppercase tracking-widest ${textColor}`}>
                {label}
            </span>
            {[...starDefs].reverse().map(({ deg, size }, i) => (
                <Image key={i} src="/sponsors-section/star.png" alt="" width={size} height={size} style={{ transform: `rotate(${-deg}deg)` }} />
            ))}
        </div>
    );
}

function ThisCouldBeYouPlaceholder() {
    return (
        <div className="flex h-36 w-36 flex-col items-center justify-center rounded-lg border border-dashed border-white/30 text-white/55">
            <span className="font-rethink text-3xl leading-none">?</span>
            <span className="mt-2 text-xs tracking-[0.08em] text-white/50">
                This could be you.
            </span>
        </div>
    );
}

function SponsorLayout() {
    const goldSponsors = sponsors.tiers.find((t) => t.id === "gold")?.sponsors ?? [];
    const silverSponsors = sponsors.tiers.find((t) => t.id === "silver")?.sponsors ?? [];
    const bronzeSponsors = sponsors.tiers.find((t) => t.id === "bronze")?.sponsors ?? [];

    return (
        <div className="flex flex-col items-center justify-center gap-8 w-full">
            {/* Gold — flex-wrap, container width forces exactly 2 per row */}
            <section className="flex flex-col items-center justify-center">
                <TierHeader label="Summit" stars={3} textColor="text-[#FED571]" />
                {goldSponsors.length > 0 ? (
                    /* width = 2 cells + 1 gap (gap-2 = 8px) at each breakpoint */
                    <div className="w-[200px] sm:w-[368px] md:w-[448px]">
                        <div className="flex flex-wrap gap-2 justify-center align-center">
                            {goldSponsors.map((sponsor, index) => (
                                <div key={index} className={GOLD_SIZE}>
                                    <GoldSponsorCard title={sponsor.name} sponsorLogo={sponsor.logo} link={sponsor.link} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <ThisCouldBeYouPlaceholder />
                )}
            </section>
            {/* Silver — flex-wrap */}
            <div className="flex flex-col items-center">
                <TierHeader label="Trail" stars={2} textColor="text-[#DDB94E]" />
                {silverSponsors.length > 0 ? (
                    <div className="flex flex-wrap gap-2 justify-center align-center">
                        {silverSponsors.map((sponsor, index) => (
                            <div key={index} className={SILVER_SIZE}>
                                <SilverSponsorCard title={sponsor.name} sponsorLogo={sponsor.logo} link={sponsor.link} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center">
                        <ThisCouldBeYouPlaceholder />
                    </div>
                )}
            </div>
            {/* Bronze */}
            <section className="flex flex-col items-center justify-center">
                <TierHeader label="Scout" stars={1} textColor="text-[#d1a441]" />
                {bronzeSponsors.length > 0 ? (
                    <div className="flex flex-wrap gap-2 justify-center align-center">
                        {bronzeSponsors.map((sponsor, index) => (
                            <div key={index} className={BRONZE_SIZE}>
                                <BronzeSponsorCard title={sponsor.name} sponsorLogo={sponsor.logo} link={sponsor.link} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <ThisCouldBeYouPlaceholder />
                )}
            </section>




        </div>
    );
}

export default SponsorLayout;
