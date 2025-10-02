import React, { useEffect, useState } from "react";
import "./LandingPageCard.css";
import { LandingPageData } from "../utils";

const LandingPageCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const imageWidth = 450;
  const gap = 15;
  const slideWidth = imageWidth + gap;
  const visibleImages = 4; 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = LandingPageData.length - visibleImages;

        if (direction === 1) {
          if (prev >= maxIndex) {
            setDirection(-1);
            return prev - 1;
          }
          return prev + 1;
        } else {
          if (prev <= 0) {
            setDirection(1);
            return prev + 1;
          }
          return prev - 1;
        }
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [direction, visibleImages]);

  const transformValue = currentIndex * slideWidth;

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${transformValue}px)` }}
      >
        {LandingPageData.map((ima) => (
          <div key={ima.id}>
            <img src={ima.image} alt={`slide-${ima.id}`} />
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                marginTop: "20px",
              }}
            >
              {ima.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPageCard;
