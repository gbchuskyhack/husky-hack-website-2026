import HeroSection from "./components/landing-page-sections/HeroSection";
import AboutUsSection from "./components/landing-page-sections/AboutUsSection";
// import ScheduleSection from "./components/landing-page-sections/ScheduleSection";
import SponsorsSection from "./components/landing-page-sections/SponsorsSection";
import FAQSection from "./components/landing-page-sections/FAQSection";
import TeamSection from "./components/landing-page-sections/TeamSection";
import FooterSection from "./components/landing-page-sections/FooterSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutUsSection />
            {/* <ScheduleSection /> */}
            <SponsorsSection />
            {/* Partner Section */}
            <FAQSection />
            <TeamSection />
            {/* Contact Section */}
            <FooterSection />
        </>
    )
}
