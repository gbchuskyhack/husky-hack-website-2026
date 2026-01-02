import Image from "next/image";
import huskyUseComputer from "../../assets/husky-use-computer.png";
import Underline1 from "../scribbles/Underline1";
import Star1 from "../scribbles/Star1";

export default function AboutUsSection() {
    return (
        <div className="flex flex-row justify-center md:justify-center w-full">
            <div
                id="About-Us"
                className="py-10 px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
                <Image
                    src={huskyUseComputer}
                    alt="Husky Use Computer"
                    className="w-full max-w-[250px] md:max-w-[250px] h-auto object-contain"
                    width={400}
                    height={400}
                />

                <div className="flex flex-col gap-4 max-w-lg">
                    <div className="flex flex-row justify-center md:justify-start">
                        <div className="w-fit relative">
                            <h1 className="text-4xl font-serif relative z-10">
                                About HuskyHack
                            </h1>
                            <Underline1 className="text-neutral-700 w-full h-auto absolute -bottom-3 left-0 z-0 opacity-80" />
                            <Star1 className="text-sky-400 w-8 h-8 absolute -right-7 -top-5" />
                            <Star1 className="text-amber-500 w-5 h-6 absolute -right-10 -top-0 rotate-3 -scale-x-100" />
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <p className="text-sm text-gray-600 font-sans mt-2 mb-4">
                            Everyone has a story to tell. Turn yours into
                            something real alongside 100+ new friends in the
                            heart of Toronto.
                        </p>
                        <p className="text-sm text-gray-600 font-sans">
                            Join us at HuskyHack on May 1st-2nd for a 24-hour
                            hackathon to build solutions that bring ideas to
                            life. We'll handle the space, food, and coffee; you
                            just need to bring a team, or join one when you get
                            here.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
