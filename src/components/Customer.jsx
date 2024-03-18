import React from "react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import bigAvatar from "../imgs/avatars/bohemian-man-with-his-arms-crossed 1.png";
import avatar1 from "../imgs/avatars/Ellipse 116.png";
import avatar2 from "../imgs/avatars/Ellipse 123.png";
import avatar3 from "../imgs/avatars/Ellipse 124.png";
import avatar4 from "../imgs/avatars/Ellipse 125.png";

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

              <span className="stars">
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
                <IoIosArrowBack className="icon" />
              </a>
              <a href="!#">
                <IoIosArrowForward className="icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="avatarBox">
            <img src={bigAvatar} alt="" id="bigAvatar" />
          </div>
          <div className="boxcha">
            <span className="starsSpan">
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStarHalfAlt className="icon" />
            </span>

            <span className="avatars">
              <img src={avatar1} alt="" />
              <img src={avatar2} alt="" />
              <img src={avatar3} alt="" />
              <img src={avatar4} alt="" />
              <img src={avatar3} alt="" />
              <img src={avatar4} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
