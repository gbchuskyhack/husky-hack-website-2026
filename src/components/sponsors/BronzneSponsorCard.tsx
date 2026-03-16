import Image from "next/image";

type BronzeSponsorCardProps = {
  title: string;
  sponsorLogo: string;
  link: string;
};

function BronzeSponsorCard({ title, sponsorLogo, link }: BronzeSponsorCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className="
          flex items-center justify-center
          w-[14vw] h-[7vw]
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

export default BronzeSponsorCard;
