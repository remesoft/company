import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-light.svg";
import { Linkedin01Icon, TwitterIcon, YoutubeIcon } from "hugeicons-react";

export default function Footer() {
  return (
    <div className="bg-[#14171F] text-[#DDDDDE]">
      <div className="mx-auto max-w-[1200px] px-4 py-16 lg:flex lg:gap-12 lg:px-0">
        <div className="flex flex-col gap-2 lg:w-[30%] lg:items-start lg:text-left">
          <Link to="#">
            <img src={logo} alt="company logo" />
          </Link>
          <p className="mt-4">
            Make your data invisible by generating unlimited identities. The
            next-level in privacy protection for online and travel.
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
          <div className="md:text-center lg:text-left">
            <h3 className="text-xl font-bold">Company</h3>
            <ul className="mt-6 flex flex-col gap-4">
              <li>
                <Link to="#" className="hover:underline">
                  Why ClarityU?
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:text-center lg:text-left">
            <h3 className="text-xl font-bold">Solutions</h3>
            <ul className="mt-6 flex flex-col gap-4">
              <li>
                <Link to="#" className="hover:underline">
                  Personal information removal
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Cloaking alias profiles
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Cloaking alias profiles
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:text-center lg:text-left">
            <h3 className="text-xl font-bold">Legal</h3>
            <ul className="mt-6 flex flex-col gap-4">
              <li>
                <Link to="#" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Privacy Policy / GDPR
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#272c39] py-8 text-center">
        ©Company 2024. All rights reserved
      </div>
    </div>
  );
}
