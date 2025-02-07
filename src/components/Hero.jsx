import React from "react";
import Ripple from "material-ripple-effects";
import { ArrowUpRight01Icon } from "hugeicons-react";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import animation from "../assets/animations/coding.json";

export default function Hero() {
  const ripple = new Ripple();
  return (
    <div className="w-full bg-[url(/src/assets/pattern-03.svg)] bg-center">
      <section className="flex flex-col items-center pt-32 lg:pt-40">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between overflow-hidden px-4 pb-10 lg:flex-row xl:px-0">
          <div className="flex flex-col lg:w-1/2 lg:justify-center">
            <p className="self-start rounded-full border border-slate-600 bg-[#1a2329] px-4 py-1">
              <span className="inline-block bg-gradient-to-r from-[#99CAA9] to-[#4395A3] bg-clip-text text-transparent">
                Solution for tomorrow...
              </span>
            </p>
            <h1 className="mt-5 text-5xl font-semibold leading-[4rem] lg:mt-6">
              Transforming Ideas into Digital Reality
              <span className="text-lime-300">.</span>
            </h1>
            <p className="mt-4 w-[70%]">
              Modern technology, trusted expertise, and
              <strong className="text-yellow-300"> limitless potential.</strong>
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link
                to="contact-us"
                smooth={true}
                duration={500}
                className="block rounded-full bg-lime-400 px-8 py-3 font-semibold text-slate-900 transition-all hover:bg-lime-500"
                onClick={(e) => ripple.create(e, "dark")}
              >
                Get Started Today
              </Link>
              <Link
                to="contact-us"
                smooth={true}
                duration={500}
                className="flex rounded-full bg-white px-3 py-3 transition-all hover:bg-slate-100"
                onClick={(e) => ripple.create(e, "dark")}
              >
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
    </div>
  );
}
