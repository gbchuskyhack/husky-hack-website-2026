import BronzeSponsorCard from "./BronzneSponsorCard";
import GoldSponsorCard from "./GoldSponsorCard"
import SilverSponsorCard from "./SilverSponsorCard";
import sponsors from "../../data/sponsors.json";

function SponsorLayout() {
    const goldSponsors = sponsors.filter(s => s.tier === 'gold');
    const silverSponsors = sponsors.filter(s => s.tier === 'silver');
    const bronzeSponsors = sponsors.filter(s => s.tier === 'bronze');

    const hasSponsors = goldSponsors.length > 0 || silverSponsors.length > 0 || bronzeSponsors.length > 0;

    if (!hasSponsors) {
        return (
            <div className="flex flex-col items-center justify-center w-full py-12 gap-8">
                <div className="text-lg md:text-xl font-medium text-white tracking-widest uppercase text-center mb-4 font-rethink-sans">
                    Sponsors Announcing Soon
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                    {/* Big Skeleton (Left) */}
                    <div className="w-72 h-48 md:w-96 md:h-64 rounded-xl bg-black/20 border border-white/5 shadow-inner" />

                    {/* 2x2 Grid (Right) */}
                    <div className="grid grid-cols-2 gap-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="w-32 h-20 md:w-44 md:h-28 rounded-lg bg-black/20 border border-white/5 shadow-inner" />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-lg">
            {goldSponsors.length > 0 &&
                <div className="flex flex-wrap justify-center items-center min-w-[60vw] gap-2.5 py-10 ">
                    {/* Gold Sponsors */}
                    {goldSponsors.map((sponsor, index) => (
                        <GoldSponsorCard
                            key={index}
                            title={sponsor.title}
                            sponsorLogo={sponsor.sponsorLogo}
                            borderColour={sponsor.borderColour}
                        />
                    ))}
                </div>
            }
            {silverSponsors.length > 0 &&
                <div className="flex flex-wrap justify-center items-center min-w-[60vw] gap-2.5 py-10">
                    {/* Silver Sponsors */} <br />
                    {silverSponsors.map((sponsor, index) => (
                        <SilverSponsorCard
                            key={index}
                            title={sponsor.title}
                            sponsorLogo={sponsor.sponsorLogo}
                            borderColour={sponsor.borderColour}
                            link={sponsor.link}
                        />
                    ))}
                </div>
            }
            {bronzeSponsors.length > 0 &&
                <div className="flex flex-wrap justify-center items-center min-w-[60vw] gap-2.5 py-10 ">
                    {/* Bronze Sponsor */}
                    {bronzeSponsors.map((sponsor, index) => (
                        <BronzeSponsorCard
                            key={index}
                            title={sponsor.title}
                            sponsorLogo={sponsor.sponsorLogo}
                            borderColour={sponsor.borderColour}
                            link={sponsor.link}
                        />
                    ))}
                </div>
            }
        </div>

    );
}

export default SponsorLayout;