import React, { useState } from "react";
import sendIcon from "../assets/icons/icon-send.svg";

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState("");
  const [popup, setPopup] = useState({ show: false, message: "" });
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading
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
        setSelectedService(""); // Reset dropdown
      })
      .catch((err) => {
        console.error(err);
        setPopup({ show: true, message: "Something went wrong! Try again." });
      })
      .finally(() => setIsLoading(false)); // Stop loading
  };

  return (
    <section id="contact-us" className="px-4 py-20 xl:px-0">
      <div className="mx-auto max-w-[800px]">
        <h2 className="text-3xl font-semibold leading-[45px]">
          Love to hear from you,
          <br /> Get in touch 👋
        </h2>
        <form className="mt-4" onSubmit={handleFormSubmit}>
          <div className="mt-5 flex flex-col gap-5 md:grid md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Your Name</label>
              <input
                className="rounded border border-slate-200 bg-white px-4 py-2 transition focus:bg-slate-50 focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Your Email</label>
              <input
                className="rounded border border-slate-200 bg-white px-4 py-2 transition focus:bg-slate-50 focus:outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone</label>
              <input
                className="rounded border border-slate-200 bg-white px-4 py-2 transition focus:bg-slate-50 focus:outline-none"
                type="number"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="service">What service are you looking for?</label>
              <select
                id="service"
                name="service"
                value={selectedService} // Controlled state
                onChange={(e) => setSelectedService(e.target.value)}
                className="rounded border border-slate-200 bg-white px-4 py-2 transition focus:bg-slate-50 focus:outline-none"
                required
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
                rows={4}
                className="rounded border border-slate-200 bg-white px-4 py-2 transition focus:bg-slate-50 focus:outline-none"
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="mt-8 flex w-56 items-center justify-center gap-2 rounded bg-[#14171F] py-2 text-white transition hover:bg-[#1d222e] disabled:cursor-not-allowed disabled:bg-gray-400"
            type="submit"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? (
              <>
                <svg
                  className="h-6 w-6 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l3 3"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Just Send
                <img className="h-6 w-6 text-white" src={sendIcon} alt="" />
              </>
            )}
          </button>
        </form>

        {/* Popup Message */}
        {popup.show && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="max-w-md rounded-lg bg-white p-6 text-center shadow-lg">
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
