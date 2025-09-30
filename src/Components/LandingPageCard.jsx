// import scrambled from "../assets/";

import React from "react";
import "./LandingPageCard.css";

const LandingPageCard = () => {
  const LandingPageData = [
    {
      id: 1,
      image: "/Images/",
    },
    {
      id: 2,
      image: "/Images/Smoothies.jpg",
    },
    {
      id: 3,
      image: "/Images/Smoothies.jpg",
    },
    {
      id: 4,
      image: "/Images/Espresso-coffee.jpg",
    },
    {
      id: 5,
      image: "/Images/Oatmeal-blueberries.jpg",
    },
    {
      id: 6,
      image: "/Images/Greek-youghurt-berries.jpg",
    },
    {
      id: 7,
      image: "/Images/Toastbread.jpg",
    },
    {
      id: 8,
      image: "/Images/Pastries.jpg",
    },
  ];

  return (
    <div className="landingpageCard-container">
      {LandingPageData.map((ima) => (
        <img src={ima.image} alt="" />
      ))}
    </div>
  );
};

export default LandingPageCard;
