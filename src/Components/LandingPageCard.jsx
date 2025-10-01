import React, { useEffect, useState } from "react";
import "./LandingPageCard.css";
import { LandingPageData } from "../utils";

const LandingPageCard = () => {
  
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
