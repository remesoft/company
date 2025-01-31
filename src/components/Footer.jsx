import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-light.svg";
import { Linkedin01Icon, TwitterIcon, YoutubeIcon } from "hugeicons-react";

export default function Footer() {
  return (
    <div className="bg-[#14171F] text-[#DDDDDE]">
      <div className="max-w-[1200px] lg:flex mx-auto py-16 px-4 lg:px-0 lg:gap-12">
        <div className="flex lg:w-[30%] flex-col gap-2 items-center lg:items-start text-center lg:text-left">
          <Link to="#">
            <img src={logo} alt="company logo" />
          </Link>
          <p className="mt-4">
            Make your data invisible by generating unlimited identities. The
            next-level in privacy protection for online and travel.
          </p>
          <ul className="flex gap-2 mt-5">
            <li>
              <Link
                to="#"
                className="grid h-10 w-10  hover:bg-white/5 transition hover:scale-105  rounded-full place-content-center"
              >
                <YoutubeIcon />
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="grid h-10 w-10 hover:bg-white/5 transition hover:scale-105 rounded-full place-content-center"
              >
                <Linkedin01Icon />
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="grid h-10 w-10 hover:bg-white/5 transition hover:scale-105 rounded-full place-content-center"
              >
                <TwitterIcon />
              </Link>
            </li>
          </ul>
        </div>
        <div className="grid lg:w-[70%] grid-cols-2 md:grid-cols-3 md:gap-4 gap-y-12 mt-12 lg:mt-0">
          <div className="md:text-center lg:text-left">
            <h3 className="font-bold text-xl">Company</h3>
            <ul className="flex flex-col gap-4 mt-6">
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
            <h3 className="font-bold text-xl">Solutions</h3>
            <ul className="flex flex-col gap-4 mt-6">
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
            <h3 className="font-bold text-xl">Legal</h3>
            <ul className="flex flex-col gap-4 mt-6">
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
