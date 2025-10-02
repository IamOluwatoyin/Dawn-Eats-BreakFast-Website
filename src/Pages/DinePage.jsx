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
  FaSquareTwitter,
} from "react-icons/fa6";
import { MdShoppingCart } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import Modal4 from "../Components/Modal4";

const DinePage = () => {
  const [toggleswitch, setToggleSwitch] = useState("deliver");
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <>
      <header className="header">
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
      </header>

      <a href="#" className="back-button">
        <span className="back-arrow">
          <FaArrowLeftLong />
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
              <span className="star">⭐</span>
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

      <div className="menu-grid" id="menuGrid"></div>

      <footer className="footer">
        <img src="./public/Logo.png" alt="" className="footer-logo" />
        <div className="footer-content">
          <div className="footer-section">
            <h3>Let's do it together</h3>
            <ul>
              <li>Careers</li>
              <li>OwenEats for partners</li>
              <li>Couriers</li>
              <li>OwenEats partners</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Locations</h3>
            <ul>
              <li>Abeokuta</li>
              <li>Festac</li>
              <li>Amuwo Odofin</li>
              <li>Lekki</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li>Privacy policy</li>
              <li>Terms of use</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Detail</h3>
            <ul>
              <li>+234 9062771345</li>
              <li>Owentech@gmail.com</li>
              <li>Address - 72 Wilmer Crescent</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright">© 2025 OwenEats</div>
          <div className="social-icons">
            <div className="social-icon facebook">
              <FaFacebook />
            </div>
            <div className="social-icon instagram">
              <FaInstagramSquare />
            </div>
            <div className="social-icon twitter">
              <FaSquareTwitter />
            </div>
            <div className="social-icon gmail">
              <SiGmail />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DinePage;
