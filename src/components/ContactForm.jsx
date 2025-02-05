import React from "react";
import sendIcon from "../assets/icons/icon-send.svg";

export default function ContactForm() {
  return (
    <section className="px-4 py-20 xl:px-0">
      <div className="mx-auto max-w-[800px]">
        <h2 className="leading-12 text-3xl font-semibold">
          Love to here from you,
          <br /> Get in touch 👋
        </h2>
        <form action="">
          <div className="mt-5 flex flex-col gap-5 md:grid md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Your Name</label>
              <input
                className="rounded border border-slate-200 bg-white px-4 py-2 focus:outline-1 focus:outline-slate-300"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Your Email</label>
              <input
                className="rounded border border-slate-200 bg-white px-4 py-2 focus:outline-1 focus:outline-slate-300"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">What you are interested</label>
              <input
                className="rounded border border-slate-200 bg-white px-4 py-2 focus:outline-1 focus:outline-slate-300"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Project Budget</label>
              <input
                className="rounded border border-slate-200 bg-white px-4 py-2 focus:outline-1 focus:outline-slate-300"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Let tell us know your project about"
                id=""
                rows={4}
                className="rounded border border-slate-200 bg-white px-4 py-2 focus:outline-1 focus:outline-slate-300"
              ></textarea>
            </div>
          </div>
          <button className="mt-8 flex w-56 items-center justify-center gap-2 rounded bg-[#14171F] py-2 text-white transition hover:bg-[#1d222e]">
            Just Send
            <img className="h-6 w-6 text-white" src={sendIcon} alt="" />
          </button>
        </form>
      </div>
    </section>
  );
}
