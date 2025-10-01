import React from 'react'
import "./Footer.css"
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
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div>
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
    </div>
  )
}

export default Footer
