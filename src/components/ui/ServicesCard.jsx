import React from "react";

export default function ServicesCard({ title, description, icon }) {
  return (
    <div className="rounded-md border bg-[#F7F8F8] p-4">
      <div className="grid h-14 w-14 place-content-center rounded-full border bg-white">
        {icon}
      </div>
      <h3 className="mt-3 py-2 text-xl font-semibold text-slate-800">
        {title}
      </h3>
      <p className="text-sm text-slate-700">{description}</p>
    </div>
  );
}
