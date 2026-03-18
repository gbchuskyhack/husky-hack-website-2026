import BronzeSponsorCard from "./BronzeSponsorCard";
import GoldSponsorCard from "./GoldSponsorCard";
import SilverSponsorCard from "./SilverSponsorCard";
import sponsors from "../../data/sponsors.json";

// ── All card sizes live here ─────────────────────────────────────────────────
const GOLD_SIZE = "w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px]";
const SILVER_SIZE = "w-[70px]  h-[70px]  sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px]";
const BRONZE_SIZE = "w-[50px]  h-[50px]  sm:w-[85px]  sm:h-[85px]  md:w-[100px] md:h-[100px] rounded-full";
// ─────────────────────────────────────────────────────────────────────────────

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
                <h3 className="mb-4 text-center font-rethink text-md font-semibold uppercase tracking-widest text-[#FED571]">
                    Summit
                </h3>
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
            <div>
                <h3 className="mb-4 text-center font-rethink text-md font-semibold uppercase tracking-widest text-white/70">
                    Trail
                </h3>
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
                <h3 className="mb-4 text-center font-rethink text-md font-semibold uppercase tracking-widest text-[#cd7f32]">
                    Scout
                </h3>
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
