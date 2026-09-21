import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface RoleCardColors {
    outerBadgeColor: string;
    borderBadgeColor: string;
    innerBadgeColor: string;
}

const DEFAULT_ROLE_CARD_COLORS: RoleCardColors = {
    outerBadgeColor: "#216b3f",
    borderBadgeColor: "#055e3c",
    innerBadgeColor: "#008f58",
};

const ROLE_CARD_COLORS_BY_LOGO: Record<string, RoleCardColors> = {
    "/husky-hack-hacker-logo.svg": {
        outerBadgeColor: "#8C5B22",
        borderBadgeColor: "#6F4516",
        innerBadgeColor: "#a17f54",
    },
    "/husky-hack-mentor-logo.svg": {
        outerBadgeColor: "#2A5278",
        borderBadgeColor: "#1E3F5D",
        innerBadgeColor: "#2C6EA6",
    },
    "/husky-hack-sponsor-logo.svg": {
        outerBadgeColor: "#365E45",
        borderBadgeColor: "#2A4C37",
        innerBadgeColor: "#008F58",
    },
};

export interface RoleCardProps {
    image?: StaticImageData | string;
    title: string;
    description: string;
    buttonText: string;
    disabled?: boolean;
    buttonLink?: string;
    colors?: RoleCardColors;
    hideImage?: boolean;
    badge?: string;
}

const getImagePath = (image: StaticImageData | string): string =>
    typeof image === "string" ? image : image.src;

const getRoleCardColors = (image: StaticImageData | string): RoleCardColors =>
    ROLE_CARD_COLORS_BY_LOGO[getImagePath(image)] ?? DEFAULT_ROLE_CARD_COLORS;

const RoleCard = ({
    image = "/huskyhacklogo.svg",
    title,
    description,
    buttonText,
    disabled = false,
    buttonLink,
    colors,
    hideImage = false,
    badge,
}: RoleCardProps) => {
    const fallbackColors = getRoleCardColors(image);
    const { outerBadgeColor, borderBadgeColor, innerBadgeColor } =
        colors ?? fallbackColors;

    return (
        <div className="w-full max-w-[360px] flex flex-col items-center text-center flex-1">
            {!hideImage && (
                <div className="translate-y-8 w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
                    <Image
                        src={image}
                        alt={title}
                        className="object-cover w-full h-full"
                        width={1}
                        height={1}
                    />
                </div>
            )}

            <div className="w-full p-1.5 rounded-[42px]" style={{ backgroundColor: outerBadgeColor }}>
                <div
                    className="w-full p-1.5 rounded-[36px] border-[3px]"
                    style={{
                        backgroundColor: innerBadgeColor,
                        borderColor: borderBadgeColor,
                    }}
                >
                        <div
                        className="w-full rounded-[30px] p-4"
                        style={{
                            borderColor: outerBadgeColor,
                            borderStyle: "dashed",
                            borderWidth: "3px",
                        }}
                    >
                        {badge && (
                            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-black/20 border border-white/25 px-3 py-1 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] text-white/85">
                                {badge}
                            </span>
                        )}
                        <h3 className="text-2xl md:text-3xl font-semibold text-white pb-1 mb-1 w-full font-rethink">
                            {title}
                        </h3>

                        <p className="text-white mb-4 text-md leading-relaxed font-instrument">
                            {description}
                        </p>

                        {buttonLink ? (
                            <Link
                                href={buttonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full max-w-[200px] mx-auto"
                            >
                                <button
                                    disabled={disabled}
                                    className="w-full disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-12 rounded-full transition-all duration-200 ease-out hover:brightness-90 hover:-translate-y-0.5 disabled:hover:brightness-100 disabled:hover:translate-y-0 mt-auto font-rethink"
                                    style={{
                                        backgroundColor: borderBadgeColor,
                                        border: `2px solid ${borderBadgeColor}`,
                                    }}
                                >
                                    {buttonText}
                                </button>
                            </Link>
                        ) : (
                            <div className="w-full max-w-[200px] mx-auto">
                                <button
                                    disabled={disabled}
                                    className="w-full disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-12 rounded-full transition-all duration-200 ease-out hover:brightness-90 hover:-translate-y-0.5 disabled:hover:brightness-100 disabled:hover:translate-y-0 mt-auto font-rethink"
                                    style={{
                                        backgroundColor: borderBadgeColor,
                                        border: `2px solid ${borderBadgeColor}`,
                                    }}
                                >
                                    {buttonText}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoleCard;
