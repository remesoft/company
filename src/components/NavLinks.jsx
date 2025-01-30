import React from 'react'
import { NavLink } from "react-router-dom";


export default function NavLinks() {
  return (
    <>
    <NavLink to="/">Home</NavLink>
        <NavLink to="/">Services</NavLink>
        <NavLink to="/">Our Work</NavLink>
        <NavLink to="/">About Us</NavLink>
        <NavLink to="/">Contact</NavLink>
    </>
  )
}
