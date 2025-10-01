import React, { useEffect, useState } from "react";
import "./LandingPageCard.css";

const LandingPageCard = () => {
  const LandingPageData = [
    {
      id: 1,
      image: "/Images/Scrambledeggsandtoast.jpg",
      text: "Scrambledeggsandtoast"
    },
    {
      id: 2,
      image: "/Images/Custard.jpg",
       text: "Akara(bean-cake) pap"
    },
    {
      id: 3,
      image: "/Images/Smoothies.jpg",
       text: "Smoothies"
    },
    {
      id: 4,
      image: "/Images/Espresso-coffee.jpg",
       text: "Espresso-coffee"
    },
    {
      id: 5,
      image: "/Images/Oatmeal-blueberries.jpg",
       text: "Oatmeal, blueberries and granola"
    },

     {
      id: 5,
      image: "/Images/Pancakes.jpg",
       text: "Scrambled Eggs"
    },
    {
      id: 6,
      image: "/Images/Greek-youghurt-berries.jpg",
       text: "Greek youghurt and berries"
    },
    {
      id: 7,
      image: "/Images/Toastbread.jpg",
       text: "Toast Bread and Honey"
    },
    {
      id: 8,
      image: "/Images/Pastries.jpg",
       text: "Pastries"
    },
  ];
  const [carouselImg, setCarouselImg] = useState(0);
  const [direction, setDirection] = useState(1); //1 = right -1=left
  const imageWidth = 460;
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselImg((prev) => {
        const maxOffset = (LandingPageData.length - 1) * imageWidth;
        let next = prev + direction * imageWidth; // move by100px adjust
        if (next > maxOffset) {
          setDirection(-1);
          return prev - imageWidth;
        }
        if (next < 0) {
          setDirection(1);
          return prev + imageWidth;
        }
        return next;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, [direction, LandingPageData.length, imageWidth]);
  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${carouselImg}px)` }}
      >
        {LandingPageData.map((ima) => (
          <div key={ima.id}>
          <img  src={ima.image} alt={`slide-${ima.id}`} />
          
           <p style={{textAlign:"center", fontSize:"20px", marginTop:"20px"}}>{ima.text}</p>
           </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPageCard;
