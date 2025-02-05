import {
  Comment01Icon,
  DeliveryBox01Icon,
  File02Icon,
  NewsIcon,
} from "hugeicons-react";

export default [
  {
    name: "Services",
    path: "#services",
    icon: <DeliveryBox01Icon className="h-[1.3rem]" />,
  },
  {
    name: "Portfolio",
    path: "#portfolio",
    icon: <File02Icon className="h-[1.3rem]" />,
  },
  {
    name: "About Us",
    path: "#about-us",
    icon: <NewsIcon className="h-[1.3rem]" />,
  },

  {
    name: "Contact Us",
    path: "#contact-us",
    icon: <Comment01Icon className="h-[1.3rem]" />,
  },
];
