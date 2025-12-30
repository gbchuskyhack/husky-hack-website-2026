import SponsorLayout from "../sponsors/SponsorLayout";

export default function SponsorsSection() {
    return (
        <section id="Sponsors" className="flex justify-center py-10">
            <div className="">
                <h1 className="text-3xl text-center">
                    Our Sponsors
                </h1>

                <div className="flex justify-center min-h-[30vh]">
                    <SponsorLayout />
                </div>
                {/* To implemement in the future */}
                {/* <div id="SponsorSignUp" className="flex justify-center w-full mt-8">
                    <button
                        className="
              px-8 py-3 rounded-md 
              bg-gradient-to-r from-amber-500 to-yellow-400
              text-black font-semibold tracking-wide shadow-md
              transition-all duration-300 hover:scale-[1.04]
              hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-[#333]">
                        Become a Sponsor
                    </button>
                </div> */}

            </div>
        </section>
    );
}
