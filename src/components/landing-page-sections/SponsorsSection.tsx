import SponsorLayout from "../sponsors/SponsorLayout";

export default function SponsorsSection() {
    return (
        <section
            id="Sponsors"
            className="w-full pt-24 pb-8"
        >
            <div className="mx-auto w-full max-w-6xl px-6 md:px-12">
                <h1 className="mb-12 text-center font-rethink text-3xl font-semibold text-[#FED571]">
                    OUR SPONSORS
                </h1>

                <SponsorLayout />
            </div>
        </section>
    );
}
