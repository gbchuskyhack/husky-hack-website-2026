import Image from "next/image";

type GoldSponsorCardProps = {
  title: string;
  sponsorLogo: string;
  link: string;
};

function GoldSponsorCard({ title, sponsorLogo, link }: GoldSponsorCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className="
          flex items-center justify-center
          w-[28vw] h-[14vw]
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

export default GoldSponsorCard;
