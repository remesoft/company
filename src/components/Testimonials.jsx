import React from "react";
import SectionIntro from "./ui/SectionIntro";
import testimonialData from "../data/testimonials";
import TestimonialCard from "./ui/TestimonialCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Testimonials() {
  const splideOptions = {
    interval: 3000,
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "20px",
    pagination: false,
    autoHeight: true,
    autoplay: true,
    breakpoints: {
      1024: { perPage: 2 },
      768: { perPage: 1 },
    },
  };

  return (
    <section className="section-padding">
      <div className="section-margin">
        <SectionIntro
          title="Testimonials"
          subtitle="What clients say about us"
        />
        <div className="mt-8 lg:mt-12">
          <Splide options={splideOptions} aria-label="Client Testimonials">
            {testimonialData.map((item, index) => (
              <SplideSlide key={index}>
                <TestimonialCard {...item} />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </section>
  );
}
