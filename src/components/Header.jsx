import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import parsley from "../imgs/imgsBest/parsley.png";
import vegetables from "../imgs/vegetables.png";
import { FaUserAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { GiGoldMine } from "react-icons/gi";

const data = [
  {
    icon: <FaUserAlt style={{ color: "#09A66D", fontSize: "32px" }} />,
    userNum: "30K",
    text: "User Order",
  },
  {
    icon: <FaStar style={{ color: "#FED42D", fontSize: "32px" }} />,
    userNum: "20K",
    text: "Reviews(4.8)",
  },
  {
    icon: <GiGoldMine style={{ color: "#09A66D", fontSize: "32px" }} />,
    userNum: 300,
    text: "Items",
  },
];
const Header = () => {
  return (
    <div className="header">
      <div className="top">
        <img src={parsley} alt="" />
        <h1>Organic Fruit & Vegetables</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley...
        </p>
        <span>
          <a href="!#">
            Order Now
            <i id="arrow-box">
              <FaArrowRight id="rightArrow" />
            </i>
          </a>
        </span>
      </div>

      <div className="bottom">
        <img src={vegetables} alt="" />
        <div className="users">
          {data.map((item, index) => {
            return (
              <div className="user" key={index}>
                <a href="!#" className="itemIcon">
                  {item.icon}
                </a>
                <span>
                  <h1>{item.userNum}</h1>
                  <h3>{item.text}</h3>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
