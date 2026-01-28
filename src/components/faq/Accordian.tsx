"use client";

import { useState } from "react";
import { Cross, X } from "lucide-react";

type AccordionProps = {
    question: string;
    answer: string;
};

function Accordion({ question, answer }: AccordionProps) {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

    return (
        <div className={"w-full flex-col border-black border-2 px-4 py-2 "}>
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className={`flex justify-between items-center text-left group w-full ${accordionOpen ? "pb-4" : "pb-0"}`}
                aria-expanded={accordionOpen}
            >
                <h3 className="text-xl md:text-3xl font-instrument-sans font-bold">{question}</h3>

                {/* Icon */}
                <div
                    className={`group-hover:opacity-100  `}
                >
                    {/*<svg*/}
                    {/*    className="fill-gray-900 shrink-0 ml-6 transition-transform"*/}
                    {/*    width="16"*/}
                    {/*    height="16"*/}
                    {/*    viewBox="0 0 16 16"*/}
                    {/*>*/}
                    {/*    <rect*/}
                    {/*        y="7"*/}
                    {/*        width="16"*/}
                    {/*        height="2"*/}
                    {/*        rx="1"*/}
                    {/*        className={`transform origin-center transition duration-200 ${*/}
                    {/*            accordionOpen ? "rotate-[135deg]" : ""*/}
                    {/*        }`}*/}
                    {/*    />*/}
                    {/*    <rect*/}
                    {/*        y="7"*/}
                    {/*        width="16"*/}
                    {/*        height="2"*/}
                    {/*        rx="1"*/}
                    {/*        className={`transform origin-center transition duration-200 ${*/}
                    {/*            accordionOpen ? "rotate-45" : "rotate-90"*/}
                    {/*        }`}*/}
                    {/*    />*/}
                    {/*</svg>*/}
                    {/*// TODO: add actual icons*/}
                    {!accordionOpen ?
                        <Cross className={""} />
                        :
                        <X />
                    }
                </div>
            </button>

            {accordionOpen && (
                <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out`}
                >
                    <div className="overflow-hidden text-black text-md md:text-lg leading-relaxed">
                        {answer}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Accordion;
