import React from "react";
import SectionIntro from "./ui/SectionIntro";
import icon from "../assets/icons/linkedin.svg";
import dwip from "../assets/leaders/dwip.jpg";
import anik from "../assets/leaders/anik.jpg";

export default function Team() {
  return (
    <section className="bg-[#F5F6F8] px-4 py-16 lg:py-36">
      <div>
        <SectionIntro
          title="Management Team"
          subtitle="Commitment From Leaders"
        />
        <div className="mx-auto mt-12 flex max-w-[800px] justify-center gap-5 lg:mt-12">
          {/* card one start  */}
          <div>
            <div className="mb-5 h-[400px] overflow-hidden rounded-md bg-slate-200">
              <img
                className="h-full w-full object-cover"
                src={dwip}
                alt="Dwip Sarker"
              />
            </div>
            <div>
              <div className="mb-2 flex items-start">
                <div className="w-full gap-4">
                  <h2 className="text-lg font-semibold leading-5">
                    Dwip Sarker
                  </h2>
                  <small className="text-slate-600">Co-Founder of Zipper</small>
                </div>
                <img className="mt-1 h-5" src={icon} alt="linkedin" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                harum provident repellendus in fugit corporis asperiores commodi
                dolorum dolore ex?
              </p>
            </div>
          </div>

          {/* card two start  */}
          <div>
            <div>
              <div className="mb-2 flex items-start">
                <div className="w-full gap-4">
                  <h2 className="text-lg font-semibold leading-5">Anik Dey</h2>
                  <small className="text-slate-600">Co-Founder of Zipper</small>
                </div>
                <img className="mt-1 h-5" src={icon} alt="linkedin" />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                harum provident repellendus in fugit corporis asperiores commodi
                dolorum dolore ex?
              </p>
            </div>
            <div className="mt-5 h-[400px] overflow-hidden rounded-md bg-slate-200">
              <img
                className="h-full w-full object-cover"
                src={anik}
                alt="Anik Dey"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
