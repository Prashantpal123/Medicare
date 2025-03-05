import React from "react";
import { faqs } from "../../assets/data/faqs";
import FaqItem from "./Faq_item";

const FaqList = () => {
  return (
    <section className="bg-gray-100 py-4 px-5 rounded-lg shadow-sm">
      <div className="max-w-3xl mx-auto">
       

        {/* FAQ Items */}
        <ul className="space-y-3">
          {faqs.map((item, index) => (
            <FaqItem item={item} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FaqList;
