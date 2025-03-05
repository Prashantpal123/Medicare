import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      className="p-2 rounded-lg border border-gray-300 bg-white shadow-sm transition-all duration-300 hover:shadow-md cursor-pointer"
    >
      {/* Question Section */}
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleOpen}
      >
        <h4 className="text-lg font-semibold text-gray-900">{item.question}</h4>
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? "bg-sky-700 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      {/* Answer Section (Collapsible) */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? " max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-700 text-[15px] leading-6">
          {item.content}
        </p>
      </div>
    </div>
  );
};

export default FaqItem;
