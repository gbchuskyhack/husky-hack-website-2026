import NewsletterForm from "../NewsletterForm";
import SponsorContactLink from "../SponsorContactLink";
import Image from 'next/image'
import huskyPeekingImg from "../../assets/husky-peeking.png"

export default function HeroSection() {
    return (
        <section id='Home' className='h-screen flex flex-col justify-center items-center gap-4'>
            <div className='content-center mx-5 justify-center'>
                <div className="flex flex-col items-center justify-center px-5 py-1 text-center ">
                    {/* Logo Container */}
                    <div >
                        <Image
                            className={"w-36 h-auto mx-auto md:w-60"}
                            width={300}
                            height={250}
                            src={huskyPeekingImg}
                            alt="Husky hack logo"
                            placeholder="blur"

                        />
                        {/* Heading */}
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 font-serif tracking-tight p-0 -translate-y-2">
                            {"Husky"}<span className={"text-sky-500"}>{"<Hack/>"}</span>
                        </h1>
                    </div>



                    {/* Details */}
                    <div className="mx-10">
                        <p className="text-sm md:text-lg font-light text-gray-700 uppercase tracking-widest">
                            May 1-2 • George Brown College, Daniel’s Building
                        </p>
                        <p className="text-base text-gray-500">
                            24 Hours &bull; May 2026
                        </p>

                    </div>
                    <NewsletterForm/>
                </div>

                <SponsorContactLink/>

            </div>


        </section>
    );
}

