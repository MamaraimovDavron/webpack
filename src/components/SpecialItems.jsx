import React from "react";
import img from "../imgs/imgsBest/Group 5287.png";
import { FaArrowRightLong } from "react-icons/fa6";
import parsley from "../imgs/imgsBest/parsley.png";

export const SpecialItems = () => {
  return (
    <div className="specialItems">
      <div className="left">
        <img src={img} alt="" />
      </div>
      <div className="right">
        <h1>Explore Our Special Items</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer...
        </p>
        <span>
          Explore Now{" "}
          <a href="!#">
            <FaArrowRightLong className="icon" />
          </a>
        </span>
        <img src={parsley} alt="" />
      </div>
    </div>
  );
};
