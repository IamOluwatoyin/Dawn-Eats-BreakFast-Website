import React, { useState } from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import TheplaceImage from "../assets/TrinityPlace.jpg";
import "./ThePlacePage.css";

const ThePlacePage = () => {
  const [active, setActive] = useState('deliver');

  return (
    <section className="the_place_hero">
      <div className="place_back_link">
        <NavLink to="/restaurants">
          <FaLongArrowAltLeft /> Back to restaurants
        </NavLink>
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
              className={`btn ${active === 'deliver' ? 'active' : ''}`}
              onClick={() => setActive('deliver')}
            >
              Deliver now
            </button>
            <button
              className={`btn ${active === 'pickup' ? 'active' : ''}`}
              onClick={() => setActive('pickup')}
            >
              Pick up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThePlacePage;
