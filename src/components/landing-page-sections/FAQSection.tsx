import faqs from "../../data/faqs.json";
import Accordion from "../faq/Accordian";
import huskyPeekComputer from "../../assets/husky-peek-computer.png";
import Image from "next/image";

export default function FAQSection() {
    return (
        <section id="FAQ" className="py-40 pt-10 bg-[#1C6D41]">
            <h1 className="text-4xl font-serif text-center mb-10">FAQs</h1>

            <div className="flex flex-col justify-center items-center md:flex-row-reverse gap-4 w-full ">
           
                <div className="flex flex-col gap-4 w-[50vw] items-start">
                    {faqs.map((faq, index) => (

                        <div className="bg-[#172334] rounded-lg w-[50vw] text-white">
                           <Accordion
                            key={index}
                            question={faq.question}
                            answer={faq.answer}                        />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
