import React from "react";
import SectionIntro from "./ui/SectionIntro";
import webPortfolio1 from "../assets/portfolio/digital-shikkhok.png";
import webPortfolio2 from "../assets/portfolio/ftc.png";
import webPortfolio3 from "../assets/portfolio/headway.png";
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
        <div className="grid h-[500px] gap-4 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          <img src={webPortfolio1} alt="" className="h-full w-full" />
          <img src={webPortfolio2} alt="" className="h-full w-full" />
          <img src={webPortfolio3} alt="" className="h-full w-full" />
        </div>
      </div>
      <div className="absolute bottom-0 h-1/3 w-full bg-gradient-to-t from-[#F5F6F8] to-transparent"></div>
    </section>
  );
}
