import Image from "next/image";

export default function ScheduleSection() {
    return (
        <section className="relative w-full mt-24 overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
            {/* Left Content (Text) */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6 drop-shadow-sm font-rethink-sans">
                        Our schedule is ...
                    </h3>
                    {/* Placeholder for schedule details */}
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-sm font-rethink-sans">COMING SOON</h2>
                </div>
            </div>

            {/* Image 1: Positioned Top Left (Decorative) */}
            {/* <div className="absolute top-0 left-0 w-[50vw] md:w-[300px] lg:w-[400px] pointer-events-none z-0 opacity-90">
                <Image
                    src="/coming-soon/bg-1.svg"
                    alt="Left Decoration"
                    width={400}
                    height={400}
                    className="object-contain w-full h-auto"
                />
            </div> */}

            {/* Image 2: Bottom Right (Hill) */}
            {/* Requirement: fully in frame (dont clip the top), left can be clipped, responsive */}
            <div className="absolute bottom-0 right-0 w-full pointer-events-none z-0">
                <img
                    src="/coming-soon/background-hill.svg"
                    alt="Hill Decoration"
                    className=""
                />
            </div>
        </section>
    );
}
