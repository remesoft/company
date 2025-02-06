import React, { useState } from "react";
import sendIcon from "../assets/icons/icon-send.svg";

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState("");
  const [popup, setPopup] = useState({ show: false, message: "" });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbw4LbtDC2OnBEnBGkf9E4hRXhFf4AcCUxmndhVLrqMq4eFBwDs6dzJg0Yk6moiG5Qd6fw/exec";

    const formData = new URLSearchParams();
    formData.append("Name", e.target.name.value);
    formData.append("Email", e.target.email.value);
    formData.append("Phone", e.target.phone.value);
    formData.append("Service", e.target.service.value);
    formData.append("Message", e.target.message.value);

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    })
      .then((res) => res.json())
      .then((data) => {
        setPopup({ show: true, message: data.message });
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="px-4 py-20 xl:px-0">
      <div className="mx-auto max-w-[800px]">
        <h2 className="leading-12 text-3xl font-semibold">
          Love to here from you,
          <br /> Get in touch 👋
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mt-5 flex flex-col gap-5 md:grid md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Your Name</label>
              <input
                className="rounded border border-slate-200 bg-white px-4 py-2 transition focus:bg-slate-50 focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Your Email</label>
              <input
                className="rounded border border-slate-200 bg-white px-4 py-2 transition focus:bg-slate-50 focus:outline-none"
                type="text"
                name="email"
                id="email"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Phone</label>
              <input
                className="rounded border border-slate-200 bg-white px-4 py-2 transition focus:bg-slate-50 focus:outline-none"
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="service">What service are you looking for?</label>
              <select
                id="service"
                name="service"
                value={selectedService} // Controlled by React state
                onChange={(e) => setSelectedService(e.target.value)}
                className="rounded border border-slate-200 bg-white px-4 py-2 transition focus:bg-slate-50 focus:outline-none"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="website">Website</option>
                <option value="app">App</option>
                <option value="Graphics Design">Graphics Design</option>
                <option value="seo">SEO</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Content Writing">Content Writing</option>
              </select>
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Tell us more about your work"
                id=""
                rows={4}
                className="rounded border border-slate-200 bg-white px-4 py-2 transition focus:bg-slate-50 focus:outline-none"
              ></textarea>
            </div>
          </div>
          <button
            className="mt-8 flex w-56 items-center justify-center gap-2 rounded bg-[#14171F] py-2 text-white transition hover:bg-[#1d222e]"
            type="submit"
          >
            Just Send
            <img className="h-6 w-6 text-white" src={sendIcon} alt="" />
          </button>
        </form>


        {/* Popup */}
        {popup.show && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-md  rounded-lg bg-white p-6 text-center shadow-lg">
              <p className="text-lg font-medium">{popup.message}</p>
              <button
                className="mt-4 rounded bg-[#14171F] px-4 py-2 text-white hover:bg-[#1d222e]"
                onClick={() => setPopup({ show: false, message: "" })}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
