import Image from "next/image";
import danielCampus from "../../assets/gbp-daniels-campus.png";
import studentsLearning from "../../assets/gbp-students-learning.png";
export default function AboutUsSection() {
return (
    <section className="relative w-full min-h-[75vh] overflow-hidden">
        <div className="absolute flex flex-row items-center bottom-0 z-20 h-full w-full justify-between px-[20px]">
            <div className="hidden absolute bottom-0 w-1/4 relative h-auto top-[100px] md:block">
                <Image
                    src={studentsLearning}
                    alt="GBP Students Learning"
                    className="w-auto h-auto "
                    width={800}
                    height={800}
                />
            </div>
            <div className="flex-1 w-full relative flex flex-col items-center top-0 h-full gap-4 md:w-3/4">
                <h2 className="text-white text-3xl font-rethink font-semibold">ABOUT US</h2>
                <h1 className="text-4xl md:text-6xl text-[#FED571] text-center font-rethink font-bold">
                    <span className="md:block">We are George Brown Polytechnic's </span>
                    <span className="md:block">first ever hack-a-thon!</span>
                </h1>
                <p className="italic text-lg text-white text-center font-instrument md:not-italic md:text-xl">A hackathon is a short, collaborative event where students team up to build projects,
                    learn new skills, and explore ideas together. It’s a space for creativity, learning,
                    and community—no experience required.</p>
                <p className="italic text-lg text-white text-center font-instrument md:not-italic md:text-xl"> But our hackathon is more than just code—it’s a place to learn, collaborate, and
                    tell meaningful stories through technology. Whether you’re hacking for the first
                    time or returning with a big idea, we’re here to support your journey from curiosity
                    to creation.</p>
            </div>
            <div className="absolute bottom-0 hidden w-1/4 relative h-auto top-[100px] md:block">
                <Image
                    src={danielCampus}
                    alt="Daniels Campus"
                    className="w-auto h-auto"
                    width={800}
                    height={800}
                    />
            </div>
        </div>
        <div className="absolute bottom-0 w-full h-full z-10">
            <Image
                src="/about-us-section/about-us.svg"
                alt="Camping landscape"
                className="object-cover object-bottom"
                priority
                fill
                sizes="100vw"
            />
        </div>
    </section>


);
}
