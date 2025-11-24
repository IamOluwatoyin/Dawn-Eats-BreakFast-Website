import React from "react";
import Footer from "../Components/Footer";
import Header from "./Header";
import DashboardCard from "../Components/DashboardCard";
import "./DashBoard.css";
import { useNavigate } from "react-router-dom";

const restaurantItems = [
  {
    id: 1,
    image: "/Images/Pancakes.jpg",
    text: "The Dines - Olodi, Apapa",
    route: "/dinepage",
  },
  {
    id: 2,
    image: "/Images/coffee.jpg",
    text: "The Place - Olodi, Apapa",
    route: "/theplacepage",
  },
];

const DashBoard = () => {
  const navigate = useNavigate(); 

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="content-holder">
      <Header />
      <div className="content-container">
        <h1>Explore Menu</h1>
        <DashboardCard />

        <section className="section2-holder">
          <div className="image1holder">
            <p style={{ color: "white", fontWeight: "400", fontSize: "40px", left: "10%", position: "absolute", }}>
              Get any <br /> breakfast of
              <br /> your choice
            </p>
          </div>
          <div className="image1holder2">
            <p style={{ color: "white", fontWeight: "400", fontSize: "40px", left: "10%", position: "absolute", }}>
              Delivered to <br />
              anywhere within <br /> your location
            </p>
          </div>
        </section>

        <div className="Header">
          <h1>Restaurant</h1>
        </div>

        <div className="restaurant-row">
          {restaurantItems.map((item) => (
            <div key={item.id} className="restaurant-card">
              <img
                src={item.image}
                alt={item.text}
                className="restaurant-image"
                onClick={() => handleNavigation(item.route)}
                style={{ cursor: "pointer" }}
              />
              <p >{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashBoard;
