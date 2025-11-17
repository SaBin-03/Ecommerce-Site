import React from "react";
import { NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  return (
    <div>
      <div className="text-center bg-black text-white">
        <h3 className="text-[11px] md:text-[15px] roboto">
          Get 20% off on NewArrivals{" "}
          <a className="underline decoration-solid" href="/">
             Sign-Up Now
          </a>
        </h3>
      </div>
      <div className="h-[10vh] w-screen bg-white flex justify-around items-center">
        <div className="h-full w-[100px] overflow-hidden ">
          <NavLink to={"/"}>
            <img
              className="h-full w-full object-contain "
              src="src/assets/logo.png"
              alt=""
            />
          </NavLink>
        </div>
        <div>
          <ul className="hidden md:flex justify-center items-center md:gap-5 lg:gap-10">
            <NavLink to={"/"}>
              <p className="md:text-[13px] lg:text-[18px]">Collections</p>
            </NavLink>
            <NavLink to={"/MensSection"}>
              <p className="md:text-[13px] lg:text-[18px]">Mens</p>
            </NavLink>
            <NavLink to={"/WomensSection"}>
              <p className="md:text-[13px] lg:text-[18px]">Womens</p>
            </NavLink>
            <NavLink to={"/KidsSection"}>
              <p className="md:text-[13px] lg:text-[18px]">Kids</p>
            </NavLink>
            <NavLink to={"/NewArrivalsSection"}>
              <p className="md:text-[13px] lg:text-[18px]">New Arrivals</p>
            </NavLink>
          </ul>
        </div>
        <div className="relative h-full w-[30%] flex justify-center items-center">
          <input
            className=" hidden md:block md:px-3 lg:px-10 rounded-full bg-gray-100  focus:outline-none focus:border-0 "
            type="search"
            placeholder="Search for Products..."
          />
          <i className="ri-shopping-cart-line cursor-pointer text-xl m-2"></i>
          <i className="ri-account-circle-line cursor-pointer text-xl"></i>
        </div>
      </div>

      {/* Side Menu Bar for the mobile view */}

      <div>
        <ul className="flex justify-center items-center md:hidden gap-3">
          <NavLink to={"/"}>
            <p className="border-2 rounded-full px-1 text-[10px] border-gray-400">Collections</p>
          </NavLink>
          <NavLink to={"/MensSection"}>
            <p className="border-2 rounded-full px-1 text-[10px] border-gray-400">Mens</p>
          </NavLink>
          <NavLink to={"/WomensSection"}>
            <p className="border-2 rounded-full px-1 text-[10px] border-gray-400">Womens</p>
          </NavLink>
          <NavLink to={"/KidsSection"}>
            <p className="border-2 rounded-full px-1 text-[10px] border-gray-400">Kids</p>
          </NavLink>
          <NavLink to={"/NewArrivalsSection"}>
            <p className="border-2 rounded-full px-1 text-[10px] border-gray-400">New Arrivals</p>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
