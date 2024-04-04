import React from "react";
import logo from "../assets/Atom-logo.png";

function Navbar() {
  return (
    <nav className=" sticky top-0">
    <div className=" text-white h-[56px] bg-black w-full">
      <div className="mx-[16px] h-[56px] ">
        <a className=" font-display3 inline-flex  h-[56px]" href="/">
          <img
            className="pt-[8px] pr-[4px] pb-[8px] pl-[12px]"
            style={{ width: "56px", height: "56px " }}
            src={logo}
          ></img>
          <span className=" hidden md:block  text-[20px] px-[12px] py-[16px] content-center">Atom Space</span>
        </a>
      </div>
    </div>
    </nav>
  );
}

export default Navbar;
