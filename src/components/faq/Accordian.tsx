"use client";

import { useState } from "react";

type AccordionProps = {
  title: string;
  answer: string;
};

function Accordion({ title, answer }: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

  return (
    <div
      className="bg-[#434343] border border-[#555] rounded-md px-5 py-4 transition">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full text-left"
        aria-expanded={accordionOpen}
      >
        <span className="text-white font-medium">
          {title}
        </span>

        {/* Icon */}
        <svg
          className="fill-gray-300 shrink-0 ml-6 transition-transform"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ${accordionOpen ? "rotate-180" : ""
              }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ${accordionOpen ? "rotate-180" : ""
              }`}
          />
        </svg>
      </button>

      {/* Answer */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen
            ? "grid-rows-[1fr] opacity-100 mt-3"
            : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden text-gray-300 text-sm leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
