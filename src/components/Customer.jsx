import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Customer = () => {
  return (
    <div className="customer-container">
      <div className="topBox">
        <div className="left">
          <h1>What Our Customers About Us saying</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularis
          </p>

          <div className="box">
            <div className="nameStar">
              <h4>Ahmed Hridoy</h4>
              <span>
                <a href="!#">
                  <FaStar />
                </a>
                <a href="!#">
                  <FaStar />
                </a>
                <a href="!#">
                  <FaStar />
                </a>
                <a href="!#">
                  <FaStar />
                </a>
                <a href="!#">
                  <FaStarHalfAlt />
                </a>
              </span>
            </div>

            <div className="arrows">
              <a href="!#">
                <IoIosArrowBack />
              </a>
              <a href="!#">
                <IoIosArrowForward />
              </a>
            </div>
          </div>
        </div>

        <div className="right">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Customer;
