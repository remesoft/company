import { ArrowUpRight01Icon } from "hugeicons-react";
import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../assets/animations/coding.json";

export default function Hero() {
  return (
    <section className="flex flex-col items-center pt-40">
      <div className="mx-auto flex max-w-[1200px] flex-col justify-between overflow-hidden px-4 pb-10 lg:flex-row xl:px-0">
        <div className="flex flex-col lg:w-1/2 lg:justify-center">
          <p className="border-slate-00 self-start rounded-full border-slate-700 bg-[#1a2329] px-4 py-1">
            <span className="inline-block bg-gradient-to-r from-[#99CAA9] to-[#4395A3] bg-clip-text text-transparent">
              Solution for tomorrow
            </span>
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-[4rem]">
            Empower your financial Journey with Zipper
          </h1>
          <p className="mt-4">
            Modern technology, trusted expertise,
            <br /> and <strong>limitless potential.</strong>
          </p>
          <div className="mt-5 flex items-center gap-4">
            <Link className="block rounded-full bg-lime-300 px-8 py-3 font-semibold text-slate-900 transition">
              Get Started Today
            </Link>
            <Link className="flex rounded-full bg-white px-3 py-3">
              <ArrowUpRight01Icon color="#1a2329" />
            </Link>
          </div>
        </div>
        <div className="mb-[-2.8rem] mt-10 flex justify-end lg:mb-0 lg:w-1/2 lg:px-0">
          <Lottie
            style={{
              pointerEvents: "none",
              scale: "1.3",
            }}
            className="ml-[-4rem] lg:scale-x-[-1]"
            animationData={animation}
            loop={true}
          />
        </div>
      </div>
    </section>
  );
}
