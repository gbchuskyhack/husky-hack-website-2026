import SponsorLayout from "../sponsors/SponsorLayout";
import SponsorContactLink from "../SponsorContactLink";

export default function SponsorsSection() {
    return (
        <section id="Sponsors" className="flex justify-center py-48 bg-[#1C6D41]">
            <div className="">
                <div className="flex justify-center">
                    <div className=" relative py-4 px-4">
                        <h1 className="text-2xl md:text-3xl text-center font-rethink-sans font-bold text-white">
                            Our Sponsors
                        </h1>
                    </div>
                </div>

                <div className="flex justify-center">
                    <SponsorLayout />
                </div>

                <div className="flex flex-col justify-center w-full items-center gap-5 mt-4 pt-10 relative">
                   
                   
                    <SponsorContactLink />
                </div>
            </div>
        </section>
    );
}
