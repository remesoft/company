import React, { useEffect, useState } from "react";
import Ripple from "material-ripple-effects";
import logo from "../assets/logo-light.svg";
import logoDark from "../assets/logo.svg";
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
  const ripple = new Ripple();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <section
      className={`navbar ${isScrolled ? "scrolled" : ""} ${isOpen ? "bg-[#0E1925]" : ""}`}
    >
      <div className="relative mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 xl:px-0">
        <Link to="#">
          <img className="h-10" src={isScrolled ? logoDark : logo} alt="logo" />
        </Link>
        <nav
          className={`${isOpen ? "absolute left-0 top-full block h-screen w-full bg-gradient-to-b lg:w-auto xl:static xl:h-auto xl:bg-none" : "hidden"} ${
            isScrolled ? "from-white via-white" : "from-[#0E1925] via-[#0E1925]"
          } via-50% to-[#ffffff00] p-4 lg:block lg:p-0`}
        >
          <ul className="flex flex-col items-center gap-4 lg:flex-row lg:gap-2">
            <li className="w-full">
              <NavLink
                className="mx-auto flex w-[40%] items-center justify-center gap-2 rounded-full py-2 lg:w-auto lg:px-4 xl:w-auto xl:py-1"
                onClick={(e) =>
                  isScrolled
                    ? ripple.create(e, "dark")
                    : ripple.create(e, "light")
                }
              >
                <Home03Icon className="h-[1.3rem]" />
                Home
              </NavLink>
            </li>

            <li className="w-full">
              <NavLink
                className="mx-auto flex w-[40%] items-center justify-center gap-2 whitespace-nowrap rounded-full py-2 lg:w-auto lg:px-4 xl:w-auto xl:py-1"
                onClick={(e) =>
                  isScrolled
                    ? ripple.create(e, "dark")
                    : ripple.create(e, "light")
                }
              >
                <NewsIcon className="h-[1.3rem]" />
                About Us
              </NavLink>
            </li>

            <li className="w-full">
              <NavLink
                className="mx-auto flex w-[40%] items-center justify-center gap-2 rounded-full py-2 lg:w-auto lg:px-4 xl:w-auto xl:py-1"
                onClick={(e) =>
                  isScrolled
                    ? ripple.create(e, "dark")
                    : ripple.create(e, "light")
                }
              >
                <DeliveryBox01Icon className="h-[1.3rem]" />
                Services
              </NavLink>
            </li>

            <li className="w-full">
              <NavLink
                className="mx-auto flex w-[40%] items-center justify-center gap-2 rounded-full py-2 lg:w-auto lg:px-4 xl:w-auto xl:py-1"
                onClick={(e) =>
                  isScrolled
                    ? ripple.create(e, "dark")
                    : ripple.create(e, "light")
                }
              >
                <Comment01Icon className="h-[1.3rem]" />
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Link className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900">
            <CallAddIcon className="h-5 w-5" />
            Book a call
          </Link>
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
