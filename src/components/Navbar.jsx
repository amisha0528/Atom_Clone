import React from "react";
import logo from "../assets/Atom-logo.png";

function Navbar() {
  return (
    <div className=" h-[56px] bg-gray-500 w-full">
      <div className="mx-[16px] h-[56px] ">
        <a className=" inline-flex  h-[56px]" href="/">
          <img
            className="pt-[8px] pr-[4px] pb-[8px] pl-[12px]"
            style={{ width: "56px", height: "56px " }}
            src={logo}
          ></img>
          <span className=" font text-[20px] px-[12px] py-[16px] content-center">Atom Space</span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
