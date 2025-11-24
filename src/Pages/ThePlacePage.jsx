import React, { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import TheplaceImage from "../assets/TrinityPlace.jpg";
import "./ThePlacePage.css";
import ThePlaceProdApi from "./ThePlaceProdApi";

const ThePlacePage = () => {
  const [active, setActive] = useState("deliver");
  const { cartItems, setCartItems } = useOutletContext();
   const navigate = useNavigate();
   const handleNavigate = ()=>{
    navigate("/DashBoard")
   }
 
  return (
    <section className="the_place_hero">
      <div className="place_back_link">
        <p style={{cursor:"pointer"}}>
        <FaLongArrowAltLeft onClick={handleNavigate} /> Back to restaurants
        
        </p>
         
      </div>

      <div className="the_place_hero_image">
        <img src={TheplaceImage} alt="Food banner" />
        <span className="the_place_delivery_time">
          <span className="the_place_clock_icon">⏱</span> 30 - 40 mins
        </span>
      </div>

      <div className="the_place_hero_details">
        <div className="the_place_hero_top">
          <h2 className="the_place_hero_title">
            The Place - <span className="the_place_location">Trinity</span>
          </h2>
          <p className="the_place_rating">⭐ 4.2</p>
        </div>

        <div className="the_place_hero_buttons">
          <div className="the_place_button_toggle_container">
            <button
              className={`btn ${active === "deliver" ? "active" : ""}`}
              onClick={() => setActive("deliver")}
            >
              Deliver now
            </button>
            <button
              className={`btn ${active === "pickup" ? "active" : ""}`}
              onClick={() => setActive("pickup")}
            >
              Pick up
            </button>
          </div>
        </div>
      </div>

      <hr className="the_place_divider" />

      <div className="the_place_info_row">
        <div className="the_place_info_item">
          <p className="info_label">Opening Time</p>
          <p className="info_value">5:00am - 12:00pm</p>
        </div>

        <div className="the_place_info_item">
          <p className="the_place_info_value">
            <span className="the_place_info_label">Min Order:</span> ₦1,000
          </p>
        </div>
      </div>

      <ThePlaceProdApi cartItems={cartItems} setCartItems={setCartItems} />
    </section>
  );
};

export default ThePlacePage;
