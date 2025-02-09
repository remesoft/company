import React from "react";

export default function SectionIntro({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="mb-1 font-semibold text-[#23343F] dark:text-white lg:text-lg">{title}</h2>
      <h3 className="text-2xl font-semibold text-slate-700 dark:text-white lg:text-4xl">
        {subtitle}
      </h3>
    </div>
  );
}
