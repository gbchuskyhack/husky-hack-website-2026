import faqs from "../../data/faqs.json";
import Accordion from "../faq/Accordian";
import huskyPeekComputer from "../../assets/husky-peek-computer.png";
import Image from "next/image";

export default function FAQSection() {
    return (
        <section id="FAQ" className="py-40 pt-10">
            <h1 className="text-4xl font-serif text-center mb-10">FAQs</h1>

            <div className="flex flex-col justify-center items-center md:flex-row-reverse gap-4 w-full ">
                <div className="justify-self-center md:justify-self-end self-center md:self-start flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-serif">?</h1>
                    <Image
                        src={huskyPeekComputer}
                        alt="Husky Peek Using Computer"
                        width={300}
                        height={300}
                        className="w-1/2"
                    />
                </div>

                <div className="flex flex-col gap-4 w-[50vw] items-center">
                    {faqs.map((faq, index) => (
                        <Accordion

                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
