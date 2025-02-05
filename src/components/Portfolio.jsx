import React from "react";
import SectionIntro from "./ui/SectionIntro";
import portfolioData from "../data/portfolio";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <section className="section-padding relative bg-[#F5F6F8]">
      <div className="section-margin">
        <SectionIntro
          title="Our Portfolio"
          subtitle="See our popular projects"
        />
        <div className="md:grid:cols-2 mt-8 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-4">
          {portfolioData.map((item, index) => (
            <Link key={index} to={item.link}>
              <div
                className={`flex flex-col border bg-white transition hover:bg-slate-50`}
              >
                <div className="m-2">
                  <img
                    className="h-56 w-full rounded border border-slate-100 object-cover object-top"
                    src={item.image}
                    alt="Project Image"
                  />
                </div>
                <div className="px-2 pb-4">
                  <h4 className="mb-0.5 font-semibold">{item.title}</h4>
                  <p className="font-inter text-sm">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
