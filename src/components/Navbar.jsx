import React, { useEffect, useState } from "react";
import logo from "../assets/logo-light.svg";
import { Link, NavLink } from "react-router-dom";
import {
  CallAddIcon,
  Comment01Icon,
  DeliveryBox01Icon,
  Home03Icon,
  Menu11Icon,
  NewsIcon,
} from "hugeicons-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 xl:px-0">
        <Link to="#">
          <img className="h-10" src={logo} alt="" />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            <li className="flex items-center gap-2">
              <Home03Icon className="h-[1.3rem]" />
              <NavLink>Home</NavLink>
            </li>
            <li className="flex items-center gap-2">
              <NewsIcon className="h-[1.3rem]" />
              <NavLink>About Us</NavLink>
            </li>
            <li className="flex items-center gap-2">
              <DeliveryBox01Icon className="h-[1.3rem]" />
              <NavLink>Services</NavLink>
            </li>
            <li className="flex items-center gap-2">
              <Comment01Icon className="h-[1.3rem]" />
              <NavLink>Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
            <CallAddIcon className="h-5 w-5" />
            Book a call
          </Link>
          <button className="lg:hidden">
            <Menu11Icon color="#fff" height={30} />
          </button>
        </div>
      </div>
    </section>
  );
}
