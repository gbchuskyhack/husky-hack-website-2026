import Image, { StaticImageData } from "next/image";
import packResults from "../../assets/WhatToExpect/pack.png";
import trailHonour from "../../assets/WhatToExpect/trail_honours.png";
import scoutMentor from "../../assets/WhatToExpect/scout_mentor.png";
import RoleCard from "./RoleCard";

interface FeatureCardProps {
    image: StaticImageData;
    title: string;
    description: string;
    className?: string;
    imageClassName?: string;
}

const FeatureCard = ({
    image,
    title,
    description,
    className = "",
    imageClassName = "",
}: FeatureCardProps) => (
    <div
        className={`flex flex-col items-center flex-1 text-center w-fit ${className}`}
    >
        <div
            className={`w-full flex items-center justify-center hover:animate-wiggle mb-4`}
        >
            <Image src={image} alt={title} className={imageClassName} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-[#FED571] mb-2 font-rethink">
            {title}
        </h3>
        <p className="text-gray-300 text-sm md:text-base max-w-xs mx-auto font-instrument">
            {description}
        </p>
    </div>
);

const WhatToExpectSection = () => {
    const isHackerRegistrationOpen = Boolean(process.env.NEXT_PUBLIC_OPNFORM_HACKER_FORM_ID);
    const isMentorRegistrationOpen = Boolean(process.env.NEXT_PUBLIC_OPNFORM_MENTOR_FORM_ID);
    const isJudgeRegistrationOpen = Boolean(process.env.NEXT_PUBLIC_OPNFORM_JUDGE_FORM_ID);

    return (
        <div>
            <div>
                <Image
                    src="/expectations/top_curve.svg"
                    alt="a curve design"
                    className="w-full h-auto absolute z-10 top-0"
                    width={1}
                    height={1}
                />
            </div>
            <h1 className="relative z-10 text-3xl font-semibold text-center mt-14 font-rethink">
                WHAT TO EXPECT
            </h1>

            <div className="flex flex-col justify-evenly gap-32 md:gap-16 mt-10 md:mt-4">
                {/* Features */}
                <div className="relative z-10 flex flex-col md:flex-row gap-24 md:gap-0 justify-center items-center w-full max-w-6xl mx-auto">
                    <FeatureCard
                        image={packResults}
                        title="Networking"
                        description="Build bonds that go beyond the weekend. Connect with a community of makers that supports your journey long after camp closes."
                        className="w-full md:w-auto px-4"
                    />

                    <FeatureCard
                        image={trailHonour}
                        title="Prizes"
                        description="We have stickers, swags, and prizes for all who embrace the adventure."
                        className="mt-0 md:mt-16 md:translate-y-24 w-full md:w-auto px-4"
                    />

                    <FeatureCard
                        image={scoutMentor}
                        title="Mentorship"
                        description="Learn from makers, designers, engineers, and experienced professionals with industry and startup experience."
                        className="w-full md:w-auto px-4"
                    />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 items-center justify-items-center gap-4 mt-10 z-10 w-full">
                    <div className="hidden h-auto xl:block xl:justify-self-end">
                        <Image
                            src={'/laptop-falling.svg'}
                            alt="Laptop Falling"
                            className="w-[200px] h-[200px] object-cover"
                            width={400}
                            height={400}
                        />
                    </div>
                    <h3 className="text-xl md:text-2xl italic font-rethink text-center xl:col-start-2 text-[#FED571]">
                        And more along the journey...
                    </h3>
                    <div className="hidden h-auto xl:block xl:justify-self-start">
                        <Image
                            src={'/husky-falling2.svg'}
                            alt="Husky Falling"
                            className="w-2/3 h-auto object-cover"
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
                <section id="Participate" className="scroll-mt-40">
                    <h2 className="text-3xl font-semibold text-center md:z-10 font-rethink">
                        HOW TO PARTICIPATE
                    </h2>

                    {/* Section 2: Hacker, Mentor, Sponsor Cards */}
                    <div className="relative z-10 flex flex-col lg:flex-row justify-center gap-8 w-full max-w-6xl mx-auto px-4 items-center">
                        <RoleCard
                            image={'/husky-hack-hacker-logo.svg'}
                            title="Hacker"
                            description="Pack up your gear. Join us for 12 hours of designing, programming, and building to earn your badges and claim the top prize."
                            buttonText="Apply"
                            buttonLink={isHackerRegistrationOpen ? "/registration/hacker" : undefined}
                            disabled={true}
                        />

                        <RoleCard
                            image={'/husky-hack-mentor-logo.svg'}
                            title="Mentor"
                            description="Be a Trail Guide. Share your expertise, help teams navigate technical challenges, and lead hackers toward their 'aha' moments."
                            buttonText="Apply"
                            buttonLink={"/registration/mentor"}
                            disabled={false}
                        />

                        <RoleCard
                            image={'/husky-hack-sponsor-logo.svg'}
                            title="Judge"
                            description="Evaluate the projects. Review the teams' final builds, score technical achievements, and select the winning hacks."
                            buttonText="Apply"
                            buttonLink={"/registration/judge"}
                            disabled={false}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default WhatToExpectSection;
