import Image from "next/image";
import Link from "next/link";
import BackButton from "../../components/BackButton";

export default function AboutPage() {
    return (
        <div className="relative min-h-[100dvh] w-full overflow-hidden bg-[linear-gradient(to_bottom,#213248,#090F18,#030609)] text-white">
            <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">
                <div className="absolute top-0 left-0 h-full w-auto">
                    <Image
                        src="/expectations/left_cave.svg"
                        alt="Cave Left"
                        className="h-full w-auto object-cover md:max-w-none"
                        width={500}
                        height={1000}
                    />
                </div>
                <div className="absolute top-0 right-0 h-full w-auto">
                    <Image
                        src="/expectations/right_cave.svg"
                        alt="Cave Right"
                        className="h-full w-auto object-cover md:max-w-none"
                        width={500}
                        height={1000}
                    />
                </div>
            </div>

            <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-4xl items-center px-6 py-16 md:px-10">
                <div className="absolute top-4 left-4 z-20">
                    <BackButton />
                </div>

                <div className="w-full rounded-xl border border-white/15 bg-black/20 p-6 backdrop-blur-sm md:p-10">
                    <h1 className="mb-6 text-3xl font-semibold tracking-tight md:text-4xl">About HuskyHack</h1>

                    <div className="space-y-5 text-sm leading-7 text-white/90 md:text-base">
                        <p>
                            HuskyHack is a hackathon community formed through a collaboration between the Computer Science Club and The UX Community of George Brown Polytechnic. Its goal is to connect students and professionals through experimental environments such as hackathons, bringing together genuine builders to solve community problems with intention.
                        </p>

                        <div className="pt-2">
                            <h2 className="mb-2 text-xl font-semibold text-white">HuskyHack 2026</h2>
                            <p>
                                On May 2nd, 2026, 150+ builders joined us in the heart of Toronto at George Brown Polytechnic, Waterfront for 12 hours of building, learning, and community. Fueled by free food and plenty of caffeine, hackers formed unstoppable teams, shipped real projects, and left with unforgettable memories — and found their pack.
                            </p>
                        </div>

                        <div className="pt-2">
                            <h2 className="mb-2 text-xl font-semibold text-white">What&apos;s next</h2>
                            <p>
                                Join us for our Husky Hacktoberfest Hack Day — 6 hours in Toronto exploring open-source AI tools, open-weight models, and beyond.{" "}
                                <Link
                                    href="https://events.mlh.com/events/15057-husky-hacktoberfest-hack-day-toronto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#FED571] underline underline-offset-4"
                                >
                                    Apply on MLH
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
