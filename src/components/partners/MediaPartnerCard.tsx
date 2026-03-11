import Image, { StaticImageData } from "next/image";

type MediaPartnerCardProps = {
    name: string;
    logo?: string | StaticImageData | any;
    logoDark?: string | StaticImageData | any;
    link: string;
};

export default function MediaPartnerCard({
    name,
    logo = "/huskyhacklogo.png", // Fallback placeholder
    logoDark,
    link,
}: MediaPartnerCardProps) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="group block">
            <div
                className="
          flex flex-col items-center justify-center
          rounded-md 
          h-[15vw] w-[15vw]
          min-h-[160px] min-w-[160px]
          p-4
          transition duration-300
        "
            >
                {/* Logo */}
                <div className="flex items-center justify-center flex-1 relative w-full transition-transform duration-300 group-hover:scale-105">
                    <Image
                        src={logo}
                        alt={`Media partner logo for ${name}`}
                        fill
                        className={`object-contain p-2 transition-opacity duration-300 ${logoDark ? "group-hover:opacity-0" : ""}`}
                    />
                    {logoDark && (
                        <Image
                            src={logoDark}
                            alt={`Dark Media partner logo for ${name}`}
                            fill
                            className="object-contain p-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        />
                    )}
                </div>

                {/* Name */}
                <h3 className="mt-2 text-center text-white text-sm font-semibold max-w-full truncate">
                    {name}
                </h3>
            </div>
        </a>
    );
}
