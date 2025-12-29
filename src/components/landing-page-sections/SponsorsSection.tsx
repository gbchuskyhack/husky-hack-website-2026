import SponsorLayout from "../sponsors/SponsorLayout.tsx";

export default function SponsorsSection() {
    return (
        <section id="Sponsors" className="min-h-screen bg-[#333] flex justify-center">
            <div className="w-full max-w-7xl px-6 py-24">
                <h1 className="text-3xl font-bold text-center mb-10 text-white p-2">
                    Our Sponsors
                </h1>

                <div className="flex justify-center min-h-[30vh]">
                    <SponsorLayout />
                </div>
                {/* To implemement in the future */}
                <div id="SponsorSignUp" className="flex justify-center w-full mt-8">
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
                </div>

            </div>
        </section>
    );
}
