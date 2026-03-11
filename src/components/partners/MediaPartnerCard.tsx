import Image, { StaticImageData } from "next/image";

type MediaPartnerCardProps = {
    name: string;
    logo?: string | StaticImageData | any;
    link: string;
};

export default function MediaPartnerCard({
    name,
    logo = "/huskyhacklogo.png", // Fallback placeholder
    link,
}: MediaPartnerCardProps) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div
                className="
          flex flex-col items-center justify-center
          rounded-md 
          h-[15vw] w-[15vw]
          min-h-[160px] min-w-[160px]
          p-4
          transition duration-300
          hover:grayscale hover:opacity-90
          border-[2px] border-gray-300/20
        "
            >
                {/* Logo */}
                <div className="flex items-center justify-center flex-1 relative w-full">
                    <Image
                        src={logo}
                        alt={`Media partner logo for ${name}`}
                        fill
                        className="object-contain p-2"
                    />
                </div>

                {/* Name */}
                <h3 className="mt-2 text-center text-white text-sm font-semibold max-w-full truncate">
                    {name}
                </h3>
            </div>
        </a>
    );
}
