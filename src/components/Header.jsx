import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
// import Technologies from "./Technologies";

export default function Header() {
  return (
    <header className="header-gradient relative text-white">
      <Navbar />
      <div className="w-full bg-[url(/src/assets/pattern-03.svg)] bg-center">
        <Hero />
      </div>
      <div className="bg-[#23343F]">
        <p className="mx-auto max-w-[1200px] px-4 py-4 xl:px-0">
          Manage and
          <strong className="text-yellow-300"> grow your business</strong> with
          us for a seamless and successful experience.
        </p>
      </div>
    </header>
  );
}
