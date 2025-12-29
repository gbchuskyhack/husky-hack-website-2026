import BronzeSponsorCard from "./BronzneSponsorCard";
import GoldSponsorCard from "./GoldSponsorCard"
import SilverSponsorCard from "./SilverSponsorCard";

function SponsorLayout () {
    return (
        <div className="rounded-lg bg-[#303030]">
            <div className="flex flex-wrap justify-center items-center bg-[#303030] min-w-[60vw] gap-2.5 py-10 rounded-lg ">
                {/* Gold Sponsors */}
                <GoldSponsorCard title="Redbull"
                                 sponsorLogo="https://cdn.freebiesupply.com/images/large/2x/red-bull-logo-png-transparent.png"
                                 borderColour = "#ff0000"/>
                <GoldSponsorCard title="Shopify"
                                 sponsorLogo="https://cdn.freebiesupply.com/logos/large/2x/shopify-logo-png-transparent.png"
                                 borderColour="#96bf48"/>
                <GoldSponsorCard title="Samsung"
                                 sponsorLogo="https://www.freepnglogos.com/uploads/original-samsung-logo-10.png"
                                 borderColour="#034EA2"/>
            
            </div>
            <div className="flex flex-wrap justify-center items-center bg-[#303030] min-w-[60vw] gap-2.5 py-10">
                {/* Silver Sponsors */} <br />
                <SilverSponsorCard title="Scotiabank"
                                   sponsorLogo="https://cdn.worldvectorlogo.com/logos/scotiabank-5.svg"
                                   borderColour="#EC111A"
                                   link="https://www.scotiabank.com/ca/en/personal.html"/>
                <SilverSponsorCard title="Logitech"
                                   sponsorLogo="https://logodownload.org/wp-content/uploads/2018/03/logitech-logo.png"
                                   borderColour="#0064ff"
                                   link="https://www.logitech.com/en-ca"/>
                <SilverSponsorCard title="McLaren"
                                   sponsorLogo="https://upload.wikimedia.org/wikipedia/commons/2/20/McLaren_Racing_logo.png"
                                   borderColour="#FF8000"
                                   link="https://www.mclaren.com/"/>
            </div>
            <div className="flex flex-wrap justify-center items-center bg-[#303030] min-w-[60vw] gap-2.5 py-10 ">
                {/* Bronze Sponsor */}
                <BronzeSponsorCard title="Google"
                                   sponsorLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
                                   borderColour="#fff"
                                   link="https://www.google.com/"/>
                <BronzeSponsorCard title="Asus"
                                   sponsorLogo="https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png"
                                   borderColour="#000"
                                   link="https://www.asus.com/"/>
                <BronzeSponsorCard title="Microsoft"
                                   sponsorLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png"
                                   borderColour="#FEB800"
                                   link="https://www.microsoft.com/en-ca/"/>
                <BronzeSponsorCard title="Coca Cola"
                                   sponsorLogo="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1280px-Coca-Cola_logo.svg.png"
                                   borderColour="#F40009"
                                   link="https://www.coca-cola.com/us/en"/>
            </div>
        </div>
        
    );
}

export default SponsorLayout;