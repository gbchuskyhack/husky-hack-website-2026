"use client";

import { useState } from "react";

type AccordionProps = {
    question: string;
    answer: string;
};

function Accordion({ question, answer }: AccordionProps) {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

    return (
        <div>
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between items-center text-left group"
                aria-expanded={accordionOpen}
            >
                <h3 className="text-2xl font-serif ">{question}</h3>

                {/* Icon */}
                <div
                    className={`${accordionOpen ? "opacity-100" : "opacity-0"} group-hover:opacity-100 transition-all duration-100 `}
                >
                    <svg
                        className="fill-gray-900 shrink-0 ml-6 transition-transform"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                    >
                        <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`transform origin-center transition duration-200 ${
                                accordionOpen ? "rotate-[135deg]" : ""
                            }`}
                        />
                        <rect
                            y="7"
                            width="16"
                            height="2"
                            rx="1"
                            className={`transform origin-center transition duration-200 ${
                                accordionOpen ? "rotate-45" : "rotate-90"
                            }`}
                        />
                    </svg>
                </div>
            </button>

            {accordionOpen && (
                <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out`}
                >
                    <div className="overflow-hidden text-gray-700 text-sm leading-relaxed">
                        {answer}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Accordion;
