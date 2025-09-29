import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import LandingPageCard from "../Components/LandingPageCard";

const LandingPage = () => {
  const Content = [
    {
      h1: "Your morning, your \nway ",
      span: "Choose from local favourites or \nhealthy picks, delivered fresh to your \ndoor",
    },

    {
      h1: "Start your day right",
      span: "Fresh healthy breakfasts \ndelivered on time every \nmorning",
    },

    {
      h1: "No more skipped \nbreakfasts",
      span: "Order in seconds, enjoy in \nminutes. simple fast and reliable",
    },
  ];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prevtextIndex) => (prevtextIndex + 1) % Content.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const [carouselImg, setCarouselImg] = useState(0);
  const [direction, setDirection] = useState(1); //1 = right -1=left

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselImg((prev) => {
        let next = prev + direction * 100; // move by100px adjust
        if (next > (LandingPageCard.length - 3) * 100) {
          setDirection(-1);
          return prev - 100;
        }
        if (next < 0) {
          setDirection(1);
          return prev + 100;
        }
        return next;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, [direction,LandingPageCard.length ]);

  return (
    <div className="general-wrapper">
      <div className="LandingPage-Wrapper">
        <section className="LandingPage-container">
          <div>
            <img src="/Images/DawnEatsLogo.jpg" alt="logo" />
          </div>

          <div className="button-div">
            <button className="SignUp-btn">Sign Up</button>
            <button className="login-btn">Sign In</button>
          </div>
        </section>

        <article className="Img-Content-section">
          <div className="Text-content">
            {Content.map((item, i) => (
              <div
                key={i}
                style={{
                  display: i === textIndex ? "block" : "none",
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                <h1
                  style={{
                    fontWeight: "bolder",
                    fontSize: "80px",
                    paddingBottom: "20px",
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.h1}
                </h1>
                <span style={{ fontSize: "30px", whiteSpace: "pre-line" }}>
                  {item.span}
                </span>
              </div>
            ))}
          </div>

          <div className="image-container">
            <img src="./Images/Chef.jpg" alt="chef" />
          </div>
        </article>
      </div>
      <section className="Restaurant-section">
        <h1>Top Restaurant in DawnEats</h1>
        <article className="Restaurant-content">
          <div className="Restaurant-image-holder">
            <img
              src="/Images/restaurant1.jpg"
              alt=""
              className="restaurant-img-container"
            />
            <img
              src="/Images/restaurant2.jpg"
              alt=""
              className="restaurant-img-container"
            />

            <img
              src="/Images/restaurant3.jpg"
              alt=""
              className="restaurant-img-container"
            />
          </div>

          <div className="Resuarant-span">
            <span className="img-text">The Dines</span>
            <span className="img-text">The Place</span>
            <span className="img-text">The Cafe</span>
          </div>
        </article>
      </section>
      <section className="BreakFast-choice-section">
        <h1>Any Breakfast of Your Choice</h1>
        <div className="carouselWrapper">
          <div
            className="carouselContainer"
            style={{ transform: `translateX(-${carouselImg}px)`,  transition: "transform 0.5s ease-in-out",}}
           
          >
            <LandingPageCard />
          </div>
        </div>
      </section>
      <section className="dispacth-container">
        <div className="dispatchImg-holder">
          <img src="/Images/deliveryBike.jpg" />
        </div>
        <div className="dispatch-content">
          <h1>
            Breakfast Delivered Fast,
            <br />
            Fresh, And On Time
          </h1>
          <p>
            Mornings should be easy not stressful. That why we are here to make{" "}
            <br /> sure your day starts right.Wether you 're rushing to work,
            simply working at <br /> home, or simply want to enjoy a calm
            morning. Our services are guarantees <br /> speed without
            compromising freshness. From the moment you place <br /> order, our
            team gets to work preparing your meal with care and <br />
            delivering it straight to your door while it's still hot and tasty.
            No long <br /> wait. Beacuse with us, it's not just food, it's fast,
            reliable, and right on <br />
            time.
          </p>
          <button className="dispatch-btn">order now</button>
        </div>
      </section>

      <section className="logistics-container">
        <div className="logistics-content">
          <h1>Easy Access Online</h1>
          <p>
            Place your order in seconds with our easy-to-use app. Browse,
            select, and check <br /> out in just few taps - no stress. <br />{" "}
            Your breakfast is on the way before you know it.
          </p>
          <div className="logistics-btn-holder">
            <button className="logistics-btn1">Sign up</button>
            <button className="logistics-btn2">Sign in</button>
          </div>
        </div>

        <div className="logisticsImg-holder">
          <img src="/Images/logistics.jpg" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
