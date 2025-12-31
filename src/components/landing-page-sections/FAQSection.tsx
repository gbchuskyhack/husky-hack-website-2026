import Accordion from "../faq/Accordian";

export default function FAQSection() {
    return (
        <section id="FAQ" className="min-h-screen bg-[#222] text-white py-16">
            <h1 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
            </h1>

            <div className="flex justify-center gap-12 px-8">
                {/* Left Column */}
                <div className="bg-[#1a1a1a] w-[40vw] p-6 space-y-4 rounded-md">
                    <Accordion
                        title="When is it?"
                        answer="We’ll announce the official date soon. Stay tuned!"
                    />

                    <Accordion
                        title="Who can participate?"
                        answer="Anyone with an interest in technology, design, or innovation is welcome."
                    />

                    <Accordion
                        title="Is it beginner friendly?"
                        answer="Yes! We welcome participants of all skill levels."
                    />
                </div>

                {/* Right Column */}
                <div className="bg-[#1a1a1a] w-[40vw] p-6 space-y-4 rounded-md">
                    <Accordion
                        title="How much does it cost?"
                        answer="The event is completely free to attend."
                    />

                    <Accordion
                        title="Do I need a team?"
                        answer="You can join solo or form a team at the event."
                    />

                    <Accordion
                        title="What should I bring?"
                        answer="Bring your laptop, charger, and enthusiasm!"
                    />
                </div>
            </div>
        </section>
    );
}
