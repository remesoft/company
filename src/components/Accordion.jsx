import { useState } from "react";
import { motion } from "framer-motion";
import accordionData from "../data/accordion";
import { ArrowDown01Icon } from "hugeicons-react";
import SectionIntro from "./ui/SectionIntro";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F5F6F8] px-4 py-16">
      <SectionIntro subtitle="Frequently Asked Questions" />
      <div className="mx-auto mt-8 max-w-[1200px]">
        {accordionData.map((item, index) => (
          <div key={index} className="border-b border-[#dddddd]">
            <button
              className={`flex w-full items-center justify-between gap-2 py-5 text-left transition ${
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
              <div className="mb-4 pb-4 text-gray-700">{item.content}</div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
