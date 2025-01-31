import { Menu02Icon, Cancel02Icon } from "hugeicons-react";
import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Nav from "./Nav";
import NavLinks from "./NavLinks";
import Button from "./ui/Button";

export default function Header() {
  const [nav, setNav] = useState(false);
  const handleToggleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <header className="sticky w-full top-0 left-0 z-50 shadow-md bg-white">
        <div className="max-w-[100%] m-auto flex item-center justify-between px-4 py-4">

          <div className="logo">
          <img src={logo} alt="" />
          </div>

          <div>
            <Nav />
          </div>
          <div className="hidden md:flex">
            <Button />
          </div>
          <div className="md:hidden z-50">
            <button onClick={handleToggleNav}>
              {nav ? <Cancel02Icon size={30} /> : <Menu02Icon size={30} />}
            </button>
          </div>

        </div>
        {nav && (
        <div className="absolute top-0 left-0 w-full h-screen bg-slate-300 text-2xl flex gap-10 flex-col items-center justify-center">
          <NavLinks />
        </div>
      )}
      </header>
      
    </>
  );
}
