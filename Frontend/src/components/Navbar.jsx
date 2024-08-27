import React from "react";
import { TfiAngleDown } from "react-icons/tfi";
import { TfiAngleUp } from "react-icons/tfi";

function Navbar() {
  return (
    <div className="justify-between text-amber-300 font-serif bg-custom-blue pb-5">
      <div className="h-20 pl-20 flex items-center justify-between">
        <div className="flex">
          <img src="/vite.svg" alt="Vite" />
          <span className="font-bold text-2xl pl-5">
            Indian Philatelic Society
          </span>
        </div>
        <ul className="flex items-center space-x-4 pr-10 font-semibold">
          {["About", "Contact", "Join", "Donate", "Login"].map(
            (item, index) => (
              <li key={index} className="relative flex items-center">
                {index > 0 && <span className="mr-2">|</span>}
                <span>{item}</span>
              </li>
            )
          )}
        </ul>
        {/* <ul className="flex items-center space-x-4 pr-10 font-semibold">
          <li className="relative">
            <span>About</span>
          </li>
          <li className="relative">
            <span className="mr-2">|</span>
            <span>Contact</span>
          </li>
          <li className="relative">
            <span className="mr-2">|</span>
            <span>Join</span>
          </li>
          <li className="relative">
            <span className="mr-2">|</span>
            <span>Donate</span>
          </li>
          <li className="relative">
            <span className="mr-2">|</span>
            <span>Login</span>
          </li>
        </ul> */}
      </div>
      {/* <div className="flex z-10 bg-navbar-blue p-2 w-3/5 mx-auto justify-center font-semibold rounded-lg">
        <ul className="flex justify-between">
          <li className="hover:bg-amber-300 hover:text-navbar-blue p-4 rounded-lg flex">
            <span className="px-2">Member Benefits</span>
            <TfiAngleDown className="pt-1" />
          </li>
          <li className="hover:bg-amber-300 hover:text-navbar-blue p-4 rounded-lg flex">
            <span className="px-2">Community</span>
            <TfiAngleDown className="pt-1" />
          </li>
          <li className="hover:bg-amber-300 hover:text-navbar-blue p-4 rounded-lg flex">
            <span className="px-2">Shop</span>
            <TfiAngleDown className="pt-1" />
          </li>
          <li className="hover:bg-amber-300 hover:text-navbar-blue p-4 rounded-lg flex">
            <span className="px-2">Event</span>
            <TfiAngleDown className="pt-1" />
          </li>
          <li className="hover:bg-amber-300 hover:text-navbar-blue p-4 rounded-lg flex">
            <span className="px-2">News</span>
            <TfiAngleDown className="pt-1" />
          </li>
        </ul>
      </div> */}
      <div className="flex z-10 bg-navbar-blue p-2 w-3/5 mx-auto justify-center font-semibold rounded-lg">
        <ul className="flex justify-between">
          {["Member Benefits", "Community", "Shop", "Event", "News"].map(
            (item, index) => (
              <li
                key={index}
                className="group hover:bg-amber-300 hover:text-navbar-blue p-4 rounded-lg flex items-center"
              >
                <span className="px-2">{item}</span>
                <span className="pt-1">
                  <TfiAngleDown className="group-hover:hidden" />
                  <TfiAngleUp className="hidden group-hover:block" />
                </span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;