import React from "react";
import SectionIntro from "./ui/SectionIntro";
import about from "../assets/about/About-img.png";

export default function About() {
  return (
    <>
      <section id="about-us" className="section-padding bg-[#F5F6F8]">
        <div className="section-margin flex flex-col md:flex-row">
          <div className="w-full p-4 md:w-[50%]">
            <h2 className="mb-4 text-4xl font-semibold">
              About [Company Name]
            </h2>
            <p className="leading-8">
              At [Company Name], we specialize in providing high-quality IT
              services, including website development, graphic design, SEO,
              content writing, and video editing. Our goal is to help businesses
              grow by combining creativity with the latest technology to deliver
              impactful digital solutions.
            </p>
            <p className="mt-4 leading-8">
              We work closely with our clients to understand their unique needs,
              ensuring that every project is tailored to drive real results.
              Whether you're a startup or an established business, we are
              committed to helping you succeed in the digital world.
            </p>
          </div>
          <div className="flex justify-center md:w-[50%]">
            <img
              className="h-auto w-[70%] max-w-full object-cover"
              src={about}
              alt="About Us"
            />
          </div>
        </div>
      </section>
    </>
  );
}
