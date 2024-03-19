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
import phone1 from "../imgs/Phone/Group 5278.png";
import phone2 from "../imgs/Phone/Group 5280.png";
import { IoLogoApple } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import img from "../imgs/imgsBest/c83b249c64943e53c12013e7a35da769.jpg";

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

      <div className="middle-box">
        <div className="left">
          <img src={phone1} alt="" className="img1" />
          <img src={phone2} alt="" className="img2" />
        </div>

        <div className="right">
          <a href="!#">Download App</a>
          <h1>Simple Way To Order Your Organic Fruit </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer...
          </p>

          <div className="markets">
            <span className="appStore">
              <IoLogoApple className="icon" />
              <span className="text">
                <h5>Download on the</h5>
                <h3>App Store</h3>
              </span>
            </span>
            <span className="playMarket">
              <FaGooglePlay className="icon" />
              <span className="text">
                <h5>GET IT ON</h5>
                <h3>Google Play</h3>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="box globe">
          <img src={img} alt="" id="planet1" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer...
          </p>
        </div>
        <div className="box navigation">
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="!#">About Us</a>
            </li>
            <li>
              <a href="!#">Service</a>
            </li>
            <li>
              <a href="!#">Menu</a>
            </li>
          </ul>
        </div>
        <div className="box resources">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="!#">Reviews</a>
            </li>
            <li>
              <a href="!#">Blog</a>
            </li>
            <li>
              <a href="!#">Update News</a>
            </li>
          </ul>
        </div>
        <div className="box contact">
          <h3>Contact Us</h3>
          <p className="email">Email: oyasim@email.com</p>
          <span className="socialMedia">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Customer;
