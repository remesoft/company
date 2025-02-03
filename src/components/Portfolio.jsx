import React from "react";
import SectionIntro from "./ui/SectionIntro";
import webPortfolio from "../assets/portfolio/portfolio-web.png";
import CategorySelector from "./ui/CategorySelector";

export default function Portfolio() {
  return (
    <section className="relative bg-[#F5F6F8] pt-16 lg:pt-36">
      <div className="mx-auto max-w-[1200px] px-4 xl:px-0">
        <SectionIntro
          title="Our Portfolio"
          subtitle="See our popular projects"
        />
        <CategorySelector />
        <img src={webPortfolio} alt="" />
      </div>
      <div className="absolute bottom-0 h-1/3 w-full bg-gradient-to-t from-[#F5F6F8] to-transparent"></div>
    </section>
  );
}
