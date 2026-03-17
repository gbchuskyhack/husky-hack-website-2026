import Image from "next/image";

type GoldSponsorCardProps = {
  title: string;
  sponsorLogo: string;
  link: string;
};

function GoldSponsorCard({ title, sponsorLogo, link }: GoldSponsorCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
      <div className="relative flex items-center justify-center w-full h-full transition duration-100 group rounded-md">
        <Image
          src={sponsorLogo}
          width={1}
          height={1}
          alt={`Brand logo for ${title}`}
          className="w-full h-full object-contain transition duration-100 rounded-md"
        />
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-base bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none rounded">
          {title}
        </span>
      </div>
    </a>
  );
}

export default GoldSponsorCard;
