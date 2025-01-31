import React from "react";
import SectionIntro from "./ui/SectionIntro";
import { ComputerCloudIcon } from "hugeicons-react";
import ServicesCard from "./ui/ServicesCard";
import servicesData from "../data/services";

export default function Services() {
  return (
    <section className="py-10 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-4 xl:px-0">
        <SectionIntro title="Our Services" subtitle="Services provides by us" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
