import { useState } from "react";
import { motion } from "framer-motion";
import accordionData from "../data/accordion";
import { ArrowDown01Icon } from "hugeicons-react";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        {accordionData.map((item, index) => (
          <div className="border-b border-[#dddddd]">
            <button
              className={`flex gap-2 items-center text-left justify-between transition w-full py-5 ${
                openIndex === index ? "font-semibold" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <ArrowDown01Icon className="text-[#8c8d91]" />
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pb-4 text-gray-700 mb-4">{item.content}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
