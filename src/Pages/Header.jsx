import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import emekaheaderlogo from "../assets/IMG_4853.JPG";
import "./HeaderStyle.css";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  return (
    <header className="emeka_header">
      <div className="emeka_header_left">
        <img src={emekaheaderlogo} alt="Logo" className="emeka_header_logo" />
        <span className="location">
          <CiLocationOn className="emeka_location" /> Olodi Apapa
          <RiArrowDropDownLine  className="emeka_dropdown"/>
        </span>
      </div>

      <div className="emeka_header_right">
       <div className="search_container">
          <FaSearch className="search_icon" />
          <input
            type="text"
            placeholder="Search"
            className="emeka_search_bar"
          />
        </div>
        <div className="emeka_cart_container">
         <FaShoppingCart className="emeka_icon" />
           <span className="cart_count">{cartCount}</span>
           </div>
        <FaUser className="emeka_icon" />
      </div>
    </header>
  );
};

export default Header;
