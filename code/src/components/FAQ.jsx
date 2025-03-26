import React from "react";
import { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <div className="py-3 border-b-[1px] border-black">
      <button
        onClick={() => setFaqOpen(!faqOpen)}
        className="flex justify-between w-full"
      >
        <span>{question}</span>
        {faqOpen ? <span>-</span> : <span>+</span>}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 easy-in-out text-sm text-gray-400 
      ${faqOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="mt-2 overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default FAQ;
