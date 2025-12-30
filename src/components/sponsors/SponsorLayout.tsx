import BronzeSponsorCard from "./BronzneSponsorCard";
import GoldSponsorCard from "./GoldSponsorCard"
import SilverSponsorCard from "./SilverSponsorCard";
import sponsors from "../../data/sponsors.json";

function SponsorLayout() {
    const goldSponsors = sponsors.filter(s => s.tier === 'gold');
    const silverSponsors = sponsors.filter(s => s.tier === 'silver');
    const bronzeSponsors = sponsors.filter(s => s.tier === 'bronze');

    return (
        <div className="rounded-lg">
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
        </div>

    );
}

export default SponsorLayout;