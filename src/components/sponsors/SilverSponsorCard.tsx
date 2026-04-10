import Image from "next/image";

type SilverSponsorCardProps = {
  title: string;
  sponsorLogo: string;
  link: string;
};

function SilverSponsorCard({ title, sponsorLogo, link }: SilverSponsorCardProps) {
  return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
        <div className="relative flex items-center justify-center w-full h-full transition duration-100 group rounded-md overflow-hidden">
          <Image
            src={sponsorLogo}
            width={1}
            height={1}
            alt={`Brand logo for ${title}`}
            className="w-full h-full object-cover transition duration-100 rounded-md"
          />
          {/* subtle shine sweep */}
          <span
            aria-hidden
            className="sponsor-shine pointer-events-none absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
          <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none rounded">
            {title}
          </span>

      </div>
    </a>
  );
}

export default SilverSponsorCard;
