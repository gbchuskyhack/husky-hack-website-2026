import Image from "next/image";

type BronzeSponsorCardProps = {
  title: string;
  sponsorLogo: string;
  link: string;
  cardClassName?: string;
};

function BronzeSponsorCard({ title, sponsorLogo, link, cardClassName = "" }: BronzeSponsorCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
      <div
        className={`
          relative flex items-center justify-center
          display-flex
          transition duration-300
          rounded-md
          overflow-hidden
          group
          ${cardClassName}
        `}
      >
        <Image
          src={sponsorLogo}
          width={1}
          height={1}
          alt={`Brand logo for ${title}`}
          className="w-full h-full object-contain transition duration-100 rounded-md"
        />
        {/* subtle shine sweep */}
        <span
          aria-hidden
          className="sponsor-shine pointer-events-none absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
        <span
          className="
            absolute inset-0 flex items-center justify-center
            text-white font-bold text-xs sm:text-sm
            bg-black/40
            opacity-0 group-hover:opacity-100
            transition duration-300
            pointer-events-none
            rounded
          "
        >
          {title}
        </span>
      </div>
    </a>
  );
}

export default BronzeSponsorCard;
