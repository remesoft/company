import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-light.svg";
import {
  Linkedin01Icon,
  TwitterIcon,
  YoutubeIcon,
  Mail01Icon,
  Call02Icon,
  Location01Icon,
} from "hugeicons-react";

export default function Footer() {
  return (
    <div className="bg-[#14171F] text-[#DDDDDE]">
      <div className="mx-auto max-w-[1200px] px-4 py-16 lg:flex lg:gap-12 xl:px-0">
        <div className="flex flex-col gap-2 md:items-center md:text-center lg:w-[30%] lg:items-start lg:text-left">
          <Link to="/">
            <img src={logo} alt="company logo" />
          </Link>
          <p className="mt-4">
            At Adverse, we specialize in crafting custom websites, apps, and
            tools that help businesses grow and thrive. From concept to code, we
            bring your vision to life with innovative solutions tailored to your
            needs.
          </p>
          <ul className="mt-5 flex gap-2">
            <li>
              <Link
                to="#"
                className="grid h-10 w-10 place-content-center rounded-full transition hover:scale-105 hover:bg-white/5"
              >
                <YoutubeIcon />
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="grid h-10 w-10 place-content-center rounded-full transition hover:scale-105 hover:bg-white/5"
              >
                <Linkedin01Icon />
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="grid h-10 w-10 place-content-center rounded-full transition hover:scale-105 hover:bg-white/5"
              >
                <TwitterIcon />
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-y-12 md:grid-cols-3 md:gap-4 lg:mt-0 lg:w-[70%]">
          <div className="mr-2 md:text-left lg:text-left">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-6 flex flex-col gap-4">
              <li>
                <Link className="hover:underline" to="/#about-us">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/#services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:underline" to="/#contact-us">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="privacy-policy"
                  className="hover:underline"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="terms-and-conditions"
                  className="hover:underline"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:text-left lg:text-left">
            <h3 className="text-xl font-bold">Services</h3>
            <ul className="mt-6 flex flex-col gap-4">
            <li>
                <Link to="/#services" className="hover:underline">
                  SEO
                </Link>
              </li>


              <li>
                <Link to="/#services" className="hover:underline">
                  Video Editing
                </Link>
              </li>

              <li>
                <Link to="/#services" className="hover:underline">
                  Content Writing
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:underline">
                  Graphics Design
                </Link>
              </li>   
              <li>
                <Link to="/#services" className="hover:underline">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/#services" className="hover:underline">
                  Website Development
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 md:text-center lg:text-left">
            <h3 className="text-xl font-bold">Address</h3>
            <ul className="mt-6 flex flex-col gap-4">
              <li>
                <Link to="#" className="flex gap-2 hover:underline">
                  <Mail01Icon /> info@adverse.com
                </Link>
              </li>
              <li>
                <Link to="#" className="flex gap-2 hover:underline">
                  <Call02Icon /> +1 (123) 456-7890
                </Link>
              </li>
              <li>
                <Link to="#" className="flex gap-2 hover:underline">
                  <Location01Icon /> Sylhet 3100, Bangladesh.
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#272c39] py-4 text-center text-slate-400">
        ©Company 2024. All rights reserved
      </div>
    </div>
  );
}
