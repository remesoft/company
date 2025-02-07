import React from "react";
import SectionIntro from "./ui/SectionIntro";
import about1 from "../assets/about/about-img-1.png";
import about2 from "../assets/about/about-img-2.png";
import about from "../assets/about/About-img.png";

export default function About() {
  return (
    <>
      <section className="section-padding bg-[#F5F6F8] px-8">
        <SectionIntro title="About Us" />
        <div className="mx-w-sm m-auto flex flex-col justify-center gap-4 md:flex-row">
          <div className="w-full p-4 text-justify md:w-[50%] md:p-8">
            <h1 className="mb-8 text-3xl font-bold">
            Crafting <strong className="text-green-500">Solutions</strong> That Matter
            </h1>
            <p className="leading-8">
              <strong>W</strong>e are passionate about helping businesses thrive in the digital
              world. As a team of skilled software engineers, designers, and
              creative thinkers, we specialize in crafting custom websites,
              mobile apps, and tools that drive growth and innovation. <br />
              Our mission is simple: to transform your ideas into powerful
              digital solutions that deliver real results. Whether you’re a
              startup, small business, or enterprise, we work closely with you
              to understand your goals and create tailored solutions that set
              you apart. <br />
              With a focus on quality, creativity, and cutting-edge technology,
              we’re here to be your trusted partner in building a brighter
              digital future. Let’s create something amazing together!
            </p>
            <button className="mt-8 flex w-56 items-center justify-center gap-2 rounded bg-[#14171F] py-2 text-white transition hover:bg-[#1d222e]">
              Learn More
            </button>
          </div>
          <div className="w-full flex justify-center md:w-[50%]">
            <img className="mx-w-full p-8" src={about} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
