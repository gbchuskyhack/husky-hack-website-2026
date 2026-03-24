import NavBar from "./components/Nav";
import HeroSection from "./components/landing-page-sections/HeroSection";
import AboutUsSection from "./components/landing-page-sections/AboutUsSection";
// import ScheduleSection from "./components/landing-page-sections/ScheduleSection";
import SponsorsSection from "./components/landing-page-sections/SponsorsSection";
import MediaSection from "./components/landing-page-sections/MediaSection";
import SponsorContactLink from "./components/SponsorContactLink";
import FAQSection from "./components/landing-page-sections/FAQSection";
import TeamSection from "./components/landing-page-sections/TeamSection";
import FooterSection from "./components/landing-page-sections/FooterSection";
import ContactSection from "./components/landing-page-sections/ContactSection";
import ScheduleSection from "./components/landing-page-sections/ScheduleSection";
import WhatToExpectSection from "./components/landing-page-sections/WhatToExpectSection";
import CaveDecorationWrapper from "./utils/landingPage/CaveDecorationWrapper";

export default function Home() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <AboutUsSection />
            <CaveDecorationWrapper>
                <WhatToExpectSection />
                <ScheduleSection />
            </CaveDecorationWrapper>
            <div className="w-full bg-[linear-gradient(to_right,#1E6D41,#4F743C)]">
                <SponsorsSection />
                {/* Partner Section */}
                <MediaSection />
                <div className="mx-auto flex w-full max-w-6xl justify-center px-6 pb-48 md:px-12">
                    <SponsorContactLink />
                </div>
            </div>
            <FAQSection />
            <TeamSection />
            {/* Contact Section */}
            {/* <ContactSection/> */}
            {/* Footer */}
            <FooterSection />
        </>
    );
}
