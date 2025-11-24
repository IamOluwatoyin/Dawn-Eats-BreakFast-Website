import React, { useState } from "react";
import "./DinePage.css";
import {
  FaSearch,
  FaRegClock,
  FaUserAlt,
  FaFacebook,
  FaInstagramSquare,
} from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  FaArrowLeftLong,
  FaLocationDot,
  FaStar,
  FaSquareTwitter,
} from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import Modal4 from "../Components/Modal4";
import Header from "./Header";
import Footer from "../Components/Footer";
import { menuItems } from "../utils";
import { useNavigate } from "react-router-dom";

const DinePage = () => {
  const [toggleswitch, setToggleSwitch] = useState("deliver");

  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate("/DashBoard")
   }
  return (
    <>
      {/* <header className="header">
        <div className="header-container">
          <img src="./public/Logo.png" alt="logo" className="logo" />
          <div className="location">
            <span className="location-icon">
              <FaLocationDot />
            </span>
            <span className="location-text">
              Olodi Apapa <RiArrowDropDownLine className="dropicon" />
            </span>
          </div>
        </div>
        <div className="left-header">
          <div className="search-container">
            <FaSearch className="searchicon" />
            <input type="text" className="search-input" placeholder="Search" />
          </div>

          <div className="header-icons">
            <div className="cart-icon">
              <MdShoppingCart />
            </div>
            <div className="profile-icon">
              <FaUserAlt onClick={() => setProfileOpen(true)} />
              {profileOpen ? (
                <div
                  className="profile-dropdown"
                  onMouseLeave={() => setProfileOpen(false)}
                >
                  <Modal4 />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </header> */}

      <a href="#" className="back-button">
        <span className="back-arrow">
          <FaArrowLeftLong onClick={handleNavigate} />
        </span>
        Back to restaurants
      </a>

      <div className="hero-section">
        <span className="delivery-time">
          <span className="clock-icon">
            <FaRegClock className="searchicon" />
          </span>
          30 - 45 mins
        </span>
      </div>

      <div className="restaurant-info">
        <div>
          <h1 className="restaurant-name">
            The Place - <FaLocationDot className="searchicon" /> Wilmer
            <span className="rating">
              <span className="star">
                <FaStar />
              </span>
              4.20
            </span>
          </h1>
        </div>
        <div className="action-buttons">
          <button
            className={`deliver-now ${
              toggleswitch === "deliver" ? "active" : ""
            }`}
            onClick={() => setToggleSwitch("deliver")}
          >
            Deliver now
          </button>
          <button
            className={`pick-up ${toggleswitch === "pickup" ? "active" : ""}`}
            onClick={() => setToggleSwitch("pickup")}
          >
            Pick up
          </button>
        </div>
      </div>

      <div className="opening-hours">
        <div className="hours-info">
          <h3>Opening time</h3>
          <p>9 am - 10 pm</p>
        </div>
        <div className="min-order">Min order: ₦1,000</div>
      </div>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.image} alt={item.name} className="menu-image" />
            <div className="menu-info">
              <p className="menu-title">{item.name}</p>
              <div className="priceandaddtocart">
                <p className="menu-price">₦{item.price.toLocaleString()}</p>
                <button className="add-btn">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default DinePage;
