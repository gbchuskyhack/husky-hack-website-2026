"use client";

import { useState, useRef, useEffect } from "react";
import { Minus, Plus } from "lucide-react";

type AccordionProps = {
    question: string;
    answer: string;
    collapseTrigger?: number;
};

function FAQAccordion({ question, answer, collapseTrigger }: AccordionProps) {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (collapseTrigger !== undefined && collapseTrigger > 0) {
            setAccordionOpen(false);
        }
    }, [collapseTrigger]);

    return (
        <div className="w-full flex-col py-2">
            <button
                onClick={() => setAccordionOpen((prev) => !prev)}
                className={`flex gap-4 items-center group w-full 
                    text-white
                    ${accordionOpen ? "pb-4" : "pb-2"}`}
                aria-expanded={accordionOpen}
            >
                <div className="group-hover:opacity-100 text-white shrink-0">
                    {!accordionOpen ? <Plus /> : <Minus />}
                </div>
                <h3 className="text-xl md:text-2xl font-rethink-sans font-semibold text-white pr-4">{question}</h3>

                {/* Icon */}

            </button>

            <div
                ref={contentRef}
                style={{
                    maxHeight: accordionOpen
                        ? contentRef.current?.scrollHeight
                            ? `${contentRef.current.scrollHeight}px`
                            : '500px'
                        : "0px"
                }}
                className={`transition-[max-height] duration-300 ease-in-out overflow-hidden grid`}
            >
                <div className="overflow-hidden text-white/90 font-rethink-sans text-light md:text-lg leading-relaxed p-1">
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default FAQAccordion;
