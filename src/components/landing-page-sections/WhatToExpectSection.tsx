import Image, { StaticImageData } from "next/image";
import packResults from "../../assets/WhatToExpect/pack.png";
import trailHonour from "../../assets/WhatToExpect/trail_honours.png";
import scoutMentor from "../../assets/WhatToExpect/scout_mentor.png";

interface FeatureCardProps {
    image: StaticImageData;
    title: string;
    description: string;
    className?: string;
    imageClassName?: string;
}

const FeatureCard = ({ image, title, description, className = "", imageClassName = "" }: FeatureCardProps) => (
    <div className={`flex flex-col items-center flex-1 text-center w-fit ${className}`}>
        <div className={`w-full flex items-center justify-center`}>
            <Image src={image} alt={title} className={imageClassName} />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-[#fbbf24] mb-2">{title}</h3>
        <p className="text-gray-300 text-sm md:text-base max-w-xs mx-auto">
            {description}
        </p>
    </div>
);

interface RoleCardProps {
    image?: StaticImageData | string;
    title: string;
    description: string;
    buttonText: string;
}

const RoleCard = ({ image = "/huskyhacklogo.svg", title, description, buttonText }: RoleCardProps) => (
    <div className="relative bg-[#1e293b] rounded-3xl p-8 pt-20 flex flex-col items-center text-center flex-1 shadow-lg hover:scale-105 transition-transform duration-300 max-w-[250px] mt-16">

        {/* Image Container: Absolute positioned to stick out the top */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-orange-100 border-4 border-[#92400e] overflow-hidden flex items-center justify-center shadow-md">
            <Image
                src={image}
                alt={title}
                className="object-cover w-full h-full"
                width={1}
                height={1}
            />
        </div>

        {/* Content: Now follows naturally because of the pt-20 on the parent */}
        <h3 className="text-2xl md:text-3xl font-bold text-[#fbbf24] pb-1 mb-4 w-full underline">
            {title}
        </h3>

        <p className="text-gray-300 mb-8 text-sm leading-relaxed">
            {description}
        </p>

        <button className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-3 px-12 rounded-full transition-colors mt-auto w-full max-w-[200px]">
            {buttonText}
        </button>
    </div>
);

const WhatToExpectSection = () => {
    return (
        <div className="relative py-12 md:py-64 px-4 sm:px-8 bg-[linear-gradient(to_bottom,#1C6D41,#243B5C,#090F18,#030609)] text-white overflow-hidden min-h-screen h-auto pb-32">
            {/* Background  */}
            <div className="absolute top-0 left-0 h-full w-auto z-0 pointer-events-none opacity-30 md:opacity-100">
                <Image
                    src={"/expectations/left_cave.svg"}
                    alt="Cave Left"
                    className="h-full w-auto object-cover max-w-[150px] md:max-w-none"
                    width={500}
                    height={1000}
                    unoptimized
                />
            </div>

            <div className="absolute top-0 right-0 h-full w-auto z-0 pointer-events-none opacity-30 md:opacity-100">
                <Image
                    src={"/expectations/right_cave.svg"}
                    alt="Cave Right"
                    className="h-full w-auto object-cover max-w-[150px] md:max-w-none"
                    width={500}
                    height={1000}
                    unoptimized
                />
            </div>

            <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-center mt-8 md:mt-12">What to Expect</h1>

            <div className="flex flex-col justify-evenly gap-32 md:gap-24 mt-24 md:mt-12">
                {/* Features */}
                <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 w-full max-w-6xl mx-auto">
                    <FeatureCard
                        image={packResults}
                        title="Networking"
                        description="Our hackathon is more than just code—it's a place to learn, collaborate, and tell meaningful stories through technology."
                        className="w-full md:w-auto px-4"
                    />

                    <FeatureCard
                        image={trailHonour}
                        title="Prizes"
                        description="Our hackathon is more than just code—it's a place to learn, collaborate, and tell meaningful stories through technology."
                        className="mt-0 md:mt-16 md:translate-y-24 w-full md:w-auto px-4"
                    />

                    <FeatureCard
                        image={scoutMentor}
                        title="Mentorship"
                        description="Our hackathon is more than just code—it's a place to learn, collaborate, and tell meaningful stories through technology."
                        className="w-full md:w-auto px-4"
                    />
                </div>

                <div className="flex flex-col items-center gap-4 mt-24 md:mt-32">
                    <h3 className="text-xl md:text-2xl font-bold text-center mb-8">And more along the journey...</h3>
                    <h2 className="text-3xl md:text-5xl font-bold text-center mt-12">How to Participate</h2>
                </div>

                {/* Section 2: Hacker, Mentor, Sponsor Cards */}
                <div className="relative z-10 flex flex-col lg:flex-row justify-center gap-8 w-full max-w-6xl mx-auto px-4">
                    <RoleCard

                        title="Hacker"
                        description="This is the body copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        buttonText="Apply"
                    />

                    <RoleCard

                        title="Mentor"
                        description="This is the body copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        buttonText="Apply"
                    />

                    <RoleCard

                        title="Sponsor"
                        description="This is the body copy. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                        buttonText="Apply"
                    />
                </div>
            </div>
        </div>
    );
};

export default WhatToExpectSection;