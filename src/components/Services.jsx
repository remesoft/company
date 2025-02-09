import React from "react";
import SectionIntro from "./ui/SectionIntro";
import { ComputerCloudIcon } from "hugeicons-react";
import ServicesCard from "./ui/ServicesCard";
import servicesData from "../data/services";

export default function Services() {
  return (
    <section id="services" className="section-padding dark:bg-[#0E1925]">
      <div className="section-margin">
        <SectionIntro title="Our Services" subtitle="Services provides by us" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-3">
          {servicesData.map((item, index) => (
            <ServicesCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
