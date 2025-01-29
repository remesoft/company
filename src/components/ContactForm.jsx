import { MailAtSign01Icon } from "hugeicons-react";
import React from "react";

export default function ContactForm() {
  return (
    <section className="bg-[#F5F6F8] py-16">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-3xl font-semibold leading-12 ">
          Love to here from you,
          <br /> Get in touch 👋
        </h2>
        <form action="">
          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Your Name</label>
              <input
                className="bg-white py-2 px-4 focus:outline-1 focus:outline-slate-400 rounded-sm outline-slate-200 outline-1"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Your Email</label>
              <input
                className="bg-white py-2 px-4 focus:outline-1 focus:outline-slate-400 rounded-sm outline-slate-200 outline-1"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">What you are interested</label>
              <input
                className="bg-white py-2 px-4 focus:outline-1 focus:outline-slate-400 rounded-sm outline-slate-200 outline-1"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Project Budget</label>
              <input
                className="bg-white py-2 px-4 focus:outline-1 focus:outline-slate-400 rounded-sm outline-slate-200 outline-1"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col col-span-2 gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Let tell us know your project about"
                id=""
                rows={4}
                className="bg-white py-2 px-4 focus:outline-1 focus:outline-slate-400 rounded-sm outline-slate-200 outline-1"
              ></textarea>
            </div>
          </div>
          <button className="py-2 px-15 mt-8 bg-[#14171F] text-white flex items-center gap-2 transition rounded-sm hover:bg-[#1d222e]">
            Just Send
            <MailAtSign01Icon className="h-4.5 w-4.5" />
          </button>
        </form>
      </div>
    </section>
  );
}
