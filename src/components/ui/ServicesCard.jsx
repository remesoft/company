import React from "react";

export default function ServicesCard({ title, description, icon }) {
  return (
    <div className="rounded-md border bg-[#F7F8F8] dark:bg-[#14171F] p-4">
      <div className="grid h-12 w-12 place-content-center rounded-full border bg-white ">
        {icon}
      </div>
      <h3 className="mt-3 py-2 text-xl font-semibold text-slate-800 dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-slate-700 dark:text-white">{description}</p>
    </div>
  );
}
