import React from "react";
import quote from "../../assets/icons/quote.svg";

export default function TestimonialCard(props) {
  return (
    <div className="rounded-md border bg-[#F7F8F8] p-4">
      <div className="flex justify-between">
        <img className="h-8 opacity-30" src={quote} alt="quote" />
      </div>
      <p className="mt-3">{props.message}</p>
      <div className="mt-4 flex w-full items-center gap-4">
        <img
          className="h-10 w-10 rounded-full border border-slate-300 object-cover"
          src={props.avatar}
          alt="client"
        />
        <div>
          <h4 className="font-semibold leading-4">{props.name}</h4>
          <small className="text-slate-600">{props.role}</small>
        </div>
      </div>
    </div>
  );
}
