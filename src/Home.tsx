import HeroSection from "./components/landing-page-sections/HeroSection";
import AboutUsSection from "./components/landing-page-sections/AboutUsSection";
// import ScheduleSection from "./components/landing-page-sections/ScheduleSection";
import SponsorsSection from "./components/landing-page-sections/SponsorsSection";
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
            <HeroSection />
            <AboutUsSection />
            <CaveDecorationWrapper>

                <WhatToExpectSection />
                <ScheduleSection />
            </CaveDecorationWrapper>
            <SponsorsSection />
            {/* Partner Section */}
            <FAQSection />
            <TeamSection />
            {/* Contact Section */}
            {/* <ContactSection/> */}
            {/* Footer */}
            <FooterSection />
        </>
    );
}
