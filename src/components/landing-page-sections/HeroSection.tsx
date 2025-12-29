import NewsletterForm from "../NewsletterForm.tsx";

export default function HeroSection() {
    return (
        <div id='Home' className='h-screen flex flex-col justify-center items-center gap-4'>
            <div className='content-center mx-5'>
                <h1 className='text-4xl font-extrabold text-blue-600 text-center mt-5'>Husky Hack</h1>
                <p className="text-sm text-gray-600">
                    May 2026 (Detail TBD)
                </p>
            </div>

            <NewsletterForm />

            <div>
                Interested in sponsoring?
                <span> </span>
                <a href="mailto:huskyhack.sponsor@gmail.com" className="underline">
                    Contact us!
                </a>
            </div>
        </div>
    );
}

