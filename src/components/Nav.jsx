import React from "react";
import NavLinks from "./NavLinks";

export default function Nav() {
 
  return (
    <>
      <nav>
        <ul>
          <div className="hidden  md:flex gap-8 w-full justify-between items-center">
            <NavLinks />
          </div>
        </ul>
      </nav>
      
    </>
  );
}
