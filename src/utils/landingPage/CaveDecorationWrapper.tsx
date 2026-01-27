import Image from "next/image";

const CaveDecorationWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div  className="relative pt-12 md:pt-48 bg-[linear-gradient(to_bottom,#1C6D41,#243B5C,#090F18,#030609)] text-white overflow-hidden min-h-screen h-auto">
                  {/* Background  */}
            <div className="absolute top-0 left-0 h-full w-auto z-0 pointer-events-none opacity-30 lg:opacity-100">
                <Image
                    src={"/expectations/left_cave.svg"}
                    alt="Cave Left"
                    className="h-full w-auto object-cover md:max-w-none translate-x-[-50%] md:translate-x-0"
                    width={500}
                    height={1000}
                    unoptimized
                />
            </div>

            <div className="absolute top-0 right-0 h-full w-auto z-0 pointer-events-none opacity-30 lg:opacity-100">
                <Image
                    src={"/expectations/right_cave.svg"}
                    alt="Cave Right"
                    className="h-full w-auto object-cover md:max-w-none translate-x-[50%] md:translate-x-0"
                    width={500}
                    height={1000}
                    unoptimized
                />
            </div>

            {children}
        </div>
    );
};

export default CaveDecorationWrapper;