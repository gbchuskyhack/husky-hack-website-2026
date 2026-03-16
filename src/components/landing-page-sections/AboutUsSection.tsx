import Image from "next/image";
import Link from "next/link";
import campus from "../../assets/gbp-waterfront-campus.png";
import studentsLearning from "../../assets/gbp-students-learning.png";

function DiscordCustomIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px] shrink-0"
            fill="currentColor"
        >
            <path d="M20.3 4.37A19.8 19.8 0 0 0 15.42 2.8a.07.07 0 0 0-.07.03c-.21.37-.45.86-.62 1.24a18.4 18.4 0 0 0-5.46 0 12.7 12.7 0 0 0-.63-1.24.07.07 0 0 0-.07-.03c-1.74.3-3.39.84-4.88 1.57a.06.06 0 0 0-.03.02C.54 8.9-.27 13.3.12 17.64a.08.08 0 0 0 .03.05c1.9 1.4 3.74 2.25 5.54 2.8a.08.08 0 0 0 .09-.03c.42-.58.8-1.2 1.12-1.86a.08.08 0 0 0-.04-.11 13 13 0 0 1-1.76-.84.08.08 0 0 1-.01-.13c.12-.09.25-.19.36-.29a.07.07 0 0 1 .08-.01c3.7 1.7 7.7 1.7 11.35 0a.07.07 0 0 1 .08.01c.12.1.24.2.36.29a.08.08 0 0 1-.01.13c-.56.33-1.15.61-1.76.84a.08.08 0 0 0-.04.11c.33.65.7 1.28 1.12 1.86a.08.08 0 0 0 .09.03c1.8-.55 3.64-1.4 5.54-2.8a.08.08 0 0 0 .03-.05c.47-5.03-.79-9.39-3.52-13.24a.06.06 0 0 0-.03-.03ZM8.73 14.98c-1.1 0-2-.99-2-2.2 0-1.22.89-2.2 2-2.2 1.12 0 2.02.99 2 2.2 0 1.22-.89 2.2-2 2.2Zm6.54 0c-1.1 0-2-.99-2-2.2 0-1.22.89-2.2 2-2.2 1.12 0 2.02.99 2 2.2 0 1.22-.88 2.2-2 2.2Z" />
        </svg>
    );
}

export default function AboutUsSection() {
    return (
        <section
            className="relative w-full lg:pb-20 px-8 lg:px-0
            overflow-hidden flex flex-col items-center justify-center
            bg-[#1C6D41] scroll-mt-40 pt-5"
            id="About-Us"
        >
            <div className="relative z-10 flex flex-row items-end justify-between w-full lg:w-[95%]">
                <div className="hidden w-1/4 h-auto xl:block">
                    <Image
                        src={studentsLearning}
                        alt="GBP Students Learning"
                        className="w-[80%] h-[80%] object-cover"
                        width={800}
                    />
                </div>
                <div className="flex-1 w-full flex flex-col items-center gap-4 md:w-1/2 pb-0 xl:pb-20">
                    <h2 className="text-white text-3xl font-rethink font-semibold">
                        ABOUT US
                    </h2>
                    <h1 className="font-bold text-4xl md:text-6xl text-[#FED571] text-center font-rethink font-base">
                        George Brown Polytechnic's largest student-run hackathon
                    </h1>
                    <p className="italic text-lg text-gray-200 text-center font-instrument md:not-italic md:text-xl">
                        Spend <strong className="text-white">24 hours</strong>{" "}
                        in the heart of Toronto building something you're
                        passionate about, food and caffeine is on us.{" "}
                        <strong className="text-white">Find your pack</strong>{" "}
                        among 150+ other to form an unstoppable team and
                        unforgettable memories
                    </p>
                </div>
                <div className="hidden w-1/4 h-auto xl:block">
                    <Image
                        src={campus}
                        alt="GBP Waterfront Campus"
                        className="w-[90%] h-[90%] object-cover"
                        width={800}
                    />
                </div>
            </div>

            <div className="block xl:hidden py-12 md:py-16">
                <div className="relative w-[40vw] md:w-[30vw] lg:w-[20vw] aspect-square mx-auto">
                    <Image
                        src={studentsLearning}
                        alt="GBP Students Learning"
                        className="absolute inset-0 z-0 w-full h-full object-contain translate-x-12 translate-y-12 md:translate-x-16 md:translate-y-16"
                        width={800}
                    />
                    <Image
                        src={campus}
                        alt="GBP Waterfront Campus"
                        className="absolute inset-0 z-10 w-full h-full object-contain -translate-x-12 -translate-y-12 md:-translate-x-16 md:-translate-y-16"
                        width={800}
                    />
                </div>
            </div>

            <div className="xl:hidden w-full flex justify-center mb-10">
                <Image
                    src="/husky-falling.svg"
                    alt="Falling husky"
                    className="w-[150px] md:w-[200px] h-auto"
                    width={300}
                    height={300}
                />
            </div>

            <div className="flex flex-col items-center justify-center z-10 relative">
                <Image
                    src="/hole.svg"
                    alt="Hole"
                    className="w-[350px] md:w-[450px] lg:w-[600px] h-auto"
                    width={796}
                    height={202}
                />
                <Link
                    href={process.env.NEXT_PUBLIC_DISCORD_INVITE_URL || ""}
                    className="absolute top-1/2 left-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 
                    px-4 py-3
                    md:px-8 md:py-4 rounded-full border-2 border-[#A6D6B8]/70 bg-[#1E5A37]/85 text-white transition hover:bg-[#287246]/90 hover:border-[#C2E6CF]"
                >
                    <DiscordCustomIcon />
                    <span className="font-rethink text-md font-semibold tracking-wide whitespace-nowrap ">Join Our Discord!</span>
                </Link>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
                <div className="relative w-full aspect-[1440/220] min-h-[72px] md:min-h-[110px]">
                    <Image
                        src="/about-us-section/about-us.svg"
                        alt="Grass foreground"
                        className="object-cover object-bottom"
                        priority
                        fill
                        sizes="100vw"
                    />
                </div>
            </div>
        </section>
    );
}
