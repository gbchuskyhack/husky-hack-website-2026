import BronzeSponsorCard from "./BronzneSponsorCard";
import GoldSponsorCard from "./GoldSponsorCard";
import SilverSponsorCard from "./SilverSponsorCard";
import sponsors from "../../data/sponsors.json";

function SponsorLayout() {
    const goldSponsors = sponsors.tiers.find((tier) => tier.id === "gold")?.sponsors ?? [];
    const silverSponsors = sponsors.tiers.find((tier) => tier.id === "silver")?.sponsors ?? [];
    const bronzeSponsors = sponsors.tiers.find((tier) => tier.id === "bronze")?.sponsors ?? [];

    const hasSponsors = goldSponsors.length > 0 || silverSponsors.length > 0 || bronzeSponsors.length > 0;

    if (!hasSponsors) {
        return (
            <div className="flex flex-col items-center justify-center w-full py-12 gap-8">
                <div className="w-9/10 flex flex-col flex-wrap md:flex-row items-center justify-center gap-6 md:gap-10">
                    {/* Skeleton placeholders */}
                    <div className="w-72 h-48 md:w-96 md:h-64 rounded-xl bg-[#6c6c6c] border border-[#434343] shadow-inner" />
                    <div className="w-72 h-48 md:w-96 md:h-64 rounded-xl bg-[#6c6c6c] border border-[#434343] shadow-inner" />
                    <div className="w-72 h-48 md:w-96 md:h-64 rounded-xl bg-[#6c6c6c] border border-[#434343] shadow-inner" />
                    <div className="w-72 h-48 md:w-96 md:h-64 rounded-xl bg-[#6c6c6c] border border-[#434343] shadow-inner" />
                    <div className="w-72 h-48 md:w-96 md:h-64 rounded-xl bg-[#6c6c6c] border border-[#434343] shadow-inner" />
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-lg">
            {goldSponsors.length > 0 && (
                <div className="flex flex-wrap justify-center items-center min-w-[60vw] gap-8 py-10">
                    {goldSponsors.map((sponsor, index) => (
                        <GoldSponsorCard
                            key={index}
                            title={sponsor.name}
                            sponsorLogo={sponsor.logo}
                            link={sponsor.link}
                        />
                    ))}
                </div>
            )}
            {silverSponsors.length > 0 && (
                <div className="flex flex-wrap justify-center items-center min-w-[60vw] gap-8 py-10">
                    {silverSponsors.map((sponsor, index) => (
                        <SilverSponsorCard
                            key={index}
                            title={sponsor.name}
                            sponsorLogo={sponsor.logo}
                            link={sponsor.link}
                        />
                    ))}
                </div>
            )}
            {bronzeSponsors.length > 0 && (
                <div className="flex flex-wrap justify-center items-center min-w-[60vw] gap-8 py-10">
                    {bronzeSponsors.map((sponsor, index) => (
                        <BronzeSponsorCard
                            key={index}
                            title={sponsor.name}
                            sponsorLogo={sponsor.logo}
                            link={sponsor.link}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default SponsorLayout;