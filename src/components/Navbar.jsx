import React, { useEffect, useState } from "react";
import Ripple from "material-ripple-effects";
import logo from "../assets/logo-light.svg";
import logoDark from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
// import { Link as RouterLink, NavLink } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";
import { CallAddIcon, Menu11Icon } from "hugeicons-react";
import menuData from "../data/main-menu";

export default function Navbar() {
  const ripple = new Ripple();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`navbar ${isScrolled ? "scrolled" : ""} ${isOpen ? "bg-[#0E1925]" : ""}`}
    >
      <div className="relative mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 xl:px-0">
        {/* logo area start */}
        <Link to="/">
          <img className="h-6" src={isScrolled ? logoDark : logo} alt="logo" />
        </Link>

        {/* menu area start */}
        <nav
          onClick={() => setTimeout(() => setIsOpen(false), 200)}
          className={`${
            isOpen
              ? "absolute left-0 top-full block h-screen w-full bg-gradient-to-b lg:w-auto xl:static xl:h-auto xl:bg-none"
              : "hidden"
          } ${isScrolled ? "from-white via-white" : "from-[#0E1925] via-[#0E1925]"} via-50% to-[#ffffff00] p-4 lg:block lg:p-0`}
        >
          <ul className="flex flex-col items-center gap-4 lg:flex-row lg:gap-2">
            {menuData.map((item, index) => (
              <li key={index} className="w-full">
                <NavLink
                  to={item.path}
                  className={`${isScrolled ? "text-black hover:bg-slate-400" : "text-white hover:bg-slate-100"} mx-auto flex w-[40%] items-center justify-center gap-2 whitespace-nowrap rounded-full py-2 transition-all hover:bg-opacity-10 lg:w-auto lg:px-4 xl:w-auto xl:py-1`}
                  onClick={(e) => {
                    setTimeout(() => setIsOpen(false), 200);
                    ripple.create(e, isScrolled ? "dark" : "light");
                  }}
                >
                  {item.icon}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* buttons area start */}
        <div className="flex items-center gap-2">
          <Link
            to="#contact-us"
            className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-all hover:cursor-pointer hover:bg-slate-50"
            onClick={(e) => ripple.create(e, "dark")}
          >
            <CallAddIcon className="h-5 w-5" />
            Book a call
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="relative grid h-10 w-10 place-content-center overflow-hidden rounded-full lg:hidden"
            onClick={(e) => {
              ripple.create(e, "light");
              setIsOpen(!isOpen);
            }}
          >
            <Menu11Icon color={isScrolled ? "#1a2329" : "#fff"} height={30} />
          </button>
        </div>
      </div>
    </section>
  );
}
