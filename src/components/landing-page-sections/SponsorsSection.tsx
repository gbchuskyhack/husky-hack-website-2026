import SponsorContactLink from "../SponsorContactLink";
import SponsorLayout from "../sponsors/SponsorLayout";

export default function SponsorsSection() {
    return (
        <section
            id="Sponsors"
            className="w-full py-24"
        >
            <div className="mx-auto w-full max-w-6xl px-6 pb-12 md:px-12">
                <h1 className="mb-12 text-center font-rethink text-3xl font-semibold text-[#FED571]">
                    OUR SPONSORS
                </h1>

                <SponsorLayout />

                <div className="relative mt-10 flex w-full flex-col items-center justify-center gap-5">
                    <SponsorContactLink />
                </div>
            </div>
        </section>
    );
}
