import Image from "next/image";

type SilverSponsorCardProps = {
  title: string;
  sponsorLogo: string;
  link: string;
};

function SilverSponsorCard({ title, sponsorLogo, link }: SilverSponsorCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className="
          flex items-center justify-center
          w-[20vw] h-[10vw]
          grayscale opacity-80
          transition duration-300
          hover:grayscale-0 hover:opacity-100
        "
      >
        <Image
          src={sponsorLogo}
          alt={`Brand logo for ${title}`}
          className="w-full h-full object-contain"
        />
      </div>
    </a>
  );
}

export default SilverSponsorCard;
