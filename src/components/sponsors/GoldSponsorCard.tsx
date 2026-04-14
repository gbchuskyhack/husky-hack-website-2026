import Image from "next/image";

type GoldSponsorCardProps = {
  title: string;
  sponsorLogo: string;
  link: string;
  scale?: number;
};

function GoldSponsorCard({ title, sponsorLogo, link, scale }: GoldSponsorCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
      <div className="relative flex items-center justify-center w-full aspect-square transition duration-100 group rounded-md overflow-hidden bg-white">
        <Image
          src={sponsorLogo}
          width={400}
          height={400}
          alt={`Brand logo for ${title}`}
          className="w-full h-full object-contain transition duration-100 rounded-md"
          style={scale ? { transform: `scale(${scale})` } : undefined}
        />
        {/* subtle shine sweep */}
        <span
          aria-hidden
          className="sponsor-shine pointer-events-none absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-base bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none rounded">
          {title}
        </span>
      </div>
    </a>
  );
}

export default GoldSponsorCard;
