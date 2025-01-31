import React from "react";

export default function SectionIntro({ title, subtitle }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="mb-1 font-semibold text-[#23343F] lg:text-lg">{title}</h2>
      <h3 className="text-2xl font-semibold lg:text-4xl">{subtitle}</h3>
    </div>
  );
}
