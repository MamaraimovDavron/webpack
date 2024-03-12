import React from "react";
import img1 from "../imgs/planet-earth (1) 1.png";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="left">
        <li>
          <a href="!#">About Us</a>
        </li>
        <li>
          <a href="!#">Service</a>
        </li>
        <li>
          <a href="!#">Menu</a>
        </li>
        <li>
          <a href="!#">Contact</a>
        </li>
      </ul>

      <div className="img">
        <img src={img1} alt="planet-earth" />
      </div>

      <ul className="right">
        <li id="search">
          <a href="!#">
            <IoSearch />
          </a>
        </li>

        <li id="cart">
          <a href="!#">
            <IoCartOutline />
          </a>
        </li>

        <li>
          <a href="!#" id="register">
            Register Now
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
