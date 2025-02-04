import React from "react";
import SectionIntro from "./ui/SectionIntro";
import avatar from "../assets/avatars/dwip.jpg";
import quote from "../assets/icons/quote.svg";
import testimonialData from "../data/testimonials";
import TestimonialCard from "./ui/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="bg-[#F5F6F8] py-16 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-4 xl:px-0">
        <SectionIntro
          title="Testimonials"
          subtitle="What client say about us"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-12 xl:grid-cols-3">
          {testimonialData.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
