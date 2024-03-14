import React from "react";
import { FaMotorcycle } from "react-icons/fa6";
import { GrBusinessService } from "react-icons/gr";
import { ImStopwatch } from "react-icons/im";
import line from "../imgs/imgsBest/Vector 16.png";
import right from "../imgs/imgsBest/Rectangle 366.png";
import left from "../imgs/imgsBest/Rectangle 365.png";
import ellipse from "../imgs/imgsBest/Ellipse 140.png";
import circle from "../imgs/imgsBest/Ellipse 141.png";
import person from "../imgs/imgsBest/groceries-packages-delivery-covid-19-quarantine-shopping-concept-smiling-handsome-bearded-courier-red-uniform-bring-food-package-grocery-order-client-box-look-amused_1258-16715-removebg-preview 1.png";

const data = [
  {
    icon: <FaMotorcycle className="icon" />,
    title: "Fasted delivery Service",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: <GrBusinessService className="icon" />,
    title: "Online order Service",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    icon: <ImStopwatch className="icon" />,
    title: "24/8 Service",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

const Best = () => {
  return (
    <div className="best-container">
      <div className="left">
        <h1>Why We Are The Best?</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley...
        </p>

        <div className="card-box">
          {data.map((item, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-left">
                  <a href="!#">{item.icon}</a>
                </div>
                <div className="card-right">
                  <h3>{item.title}</h3>
                  <p>{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="right">
        <img src={line} alt="" className="line" />
        <div className="imgBox">
          <img src={person} alt="" id="person" />
          <img src={left} alt="" id="left" />
          <img src={right} alt="" id="right" />
          <img src={ellipse} alt="" id="ellipse" />
          <img src={circle} alt="" id="circle" />
        </div>
      </div>
    </div>
  );
};

export default Best;
