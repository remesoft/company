import React from "react";
import quote from "../../assets/icons/quote.svg";

export default function TestimonialCard(props) {
  return (
    <div className="rounded-md bg-white p-5">
      <div className="flex justify-between">
        <div className="flex w-full items-center gap-4">
          <img
            className="h-10 w-10 rounded-full border border-slate-300"
            src={props.avatar}
            alt="client"
          />
          <div>
            <h4 className="font-semibold leading-4">{props.name}</h4>
            <small className="text-slate-600">{props.role}</small>
          </div>
        </div>
        <img className="h-10" src={quote} alt="quote" />
      </div>
      <p className="mt-3">{props.message}</p>
    </div>
  );
}
