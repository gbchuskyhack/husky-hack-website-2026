import SponsorLayout from "../sponsors/SponsorLayout";
import SponsorContactLink from "../SponsorContactLink";

export default function SponsorsSection() {
    return (
        <section id="Sponsors" className="flex justify-center py-10">
            <div className="">
                <h1 className="text-3xl text-center">
                    Our Sponsors
                </h1>

                <div className="flex justify-center">
                    <SponsorLayout />
                </div>
                
                <div className="flex justify-center w-full mt-4">
                     <SponsorContactLink />
                </div>

            </div>
        </section>
    );
}
