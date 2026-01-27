import faqs from "../../data/faqs.json";
import Accordion from "../faq/Accordian";
import huskyPeekComputer from "../../assets/husky-peek-computer.png";
import Image from "next/image";

export default function FAQSection() {
    return (
        <section id="FAQ" className="py-40 pt-10 bg-[#1C6D41]">
            <h1 className="text-xl  md:text-2xl font-rethink-sans text-center mb-10 text-white">FREQUENTLY ASKED QUESTIONS</h1>

            <div className="flex flex-col justify-center items-center md:flex-row-reverse gap-4 w-full ">

                <div className="flex flex-col gap-4 w-[50vw] items-start">
                    {faqs.map((faq, index) => (

                        <div className="bg-[#5E4527] rounded-lg w-[50vw] text-black" key={index}>

                            <Accordion
                                question={faq.question}
                                answer={faq.answer} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
