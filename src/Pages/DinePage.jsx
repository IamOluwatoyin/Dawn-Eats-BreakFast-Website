import React from "react";
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

const DinePage = () => {
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
              <FaUserAlt />
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
        <div className="delivery-time">
          <span className="clock-icon">
            <FaRegClock className="searchicon" />
          </span>
          30 - 45 mins
        </div>
      </div>

      <div className="restaurant-info">
        <div>
          <h1 className="restaurant-name">
            The Place - <FaLocationDot className="searchicon" /> Wilmer
            <span className="rating">
              <span class="star">⭐</span>
              4.20
            </span>
          </h1>
        </div>
        <div className="action-buttons">
          <button className="deliver-now">Deliver now</button>
          <button className="pick-up">Pick up</button>
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
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">OwenEats for partners</a>
              </li>
              <li>
                <a href="#">Couriers</a>
              </li>
              <li>
                <a href="#">OwenEats partners</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Locations</h3>
            <ul>
              <li>
                <a href="#">Abeokuta</a>
              </li>
              <li>
                <a href="#">Festac</a>
              </li>
              <li>
                <a href="#">Amuwo Odofin</a>
              </li>
              <li>
                <a href="#">Lekki</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Terms of use</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Detail</h3>
            <ul>
              <li>
                <a href="#">+234 9062771345</a>
              </li>
              <li>
                <a href="#">Owentech@gmail.com</a>
              </li>
              <li>
                <a href="#">Address - 72 Wilmer Crescent</a>
              </li>
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
