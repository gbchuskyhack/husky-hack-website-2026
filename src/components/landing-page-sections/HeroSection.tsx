import NewsletterForm from "../NewsletterForm";
import SponsorContactLink from "../SponsorContactLink";

export default function HeroSection() {
    return (
        <div id='Home' className='h-screen flex flex-col justify-center items-center gap-4'>
            <div className='content-center mx-5'>
                <h1 className='text-4xl font-bold text-blue-600 text-center mt-5'>Husky Hack</h1>
                <p className="text-sm text-gray-600">
                    24h &bull; May 2026 &bull; GBC Daniel Campus
                    <br />
                    (Detail TBD)
                </p>
            </div>

            <NewsletterForm />

            <SponsorContactLink />
        </div>
    );
}

