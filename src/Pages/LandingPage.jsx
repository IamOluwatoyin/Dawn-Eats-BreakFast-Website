import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import LandingPageCard from "../Components/LandingPageCard";
import Footer from "../Components/Footer";
import Signup from "../Auth/Signup";
import Signin from "../Auth/Signin";
import { Content } from "../utils";

const LandingPage = () => {
  const pic=[
    {
      id: 1,
      image:"/Images/Vector.jpg"
    }
  ]

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prevtextIndex) => (prevtextIndex + 1) % Content.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const [opensignUpModal, setopensignUpModal] = useState(false);
  const [opensignInModal, setopensignInModal] = useState(false);


  return (

    <div className="general-wrapper">
      <div className="LandingPage-Wrapper">
        <main className="LandingPage-container">
          <div>
            <img src="/Images/DawnEatsLogo.jpg" alt="logo" />
          </div>

          <div className="button-div">
  
            <button
              className="SignUp-btn"
              onClick={() => {
                setopensignUpModal(true);
                setopensignInModal(false);
              }}
            >
              Sign Up
            </button>
            <button
              className="login-btn"
              onClick={() => {
                setopensignInModal(true);
                setopensignUpModal(false);
              }}
            >
              Sign In
            </button>

          </div>
          {opensignUpModal && (
            <Signup 
              onclose={() => setopensignUpModal(false)} 
              onSwitchToSignin={() => {
                setopensignUpModal(false);
                setopensignInModal(true);
              }}
            />
          )}
          {opensignInModal && (
            <Signin 
              onclose={() => setopensignInModal(false)}
              onSwitchToSignup={() => {
                setopensignInModal(false);
                setopensignUpModal(true);
              }}
            />
          )}
        </main>

        <article className="Img-Content-section" style={{ position: "relative" }}>
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
        <div
        className="dots-container top"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          position: "absolute",
          right: "40px",
          top: "40px",
        }}
      >
        {[...Array(3)].map((_, i) => (
          <img
            key={i}
            src="/Images/dot.png"
            alt="dot"
            style={{ width: "12px", height: "12px" }}
          />
        ))}
      </div>

      {/* Decorative dots (Bottom right) */}
      <div
        className="dots-container bottom"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          position: "absolute",
          right: "40px",
          bottom: "40px",
        }}
      >
        {[...Array(3)].map((_, i) => (
          <img
            key={i}
            src="/Images/Vector.jpg"
            alt="dot"
            style={{ width: "12px", height: "12px" }}
          />
        ))}
      </div>
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
          <LandingPageCard />
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
            <button 
              className="logistics-btn1"
              onClick={() => {
                setopensignUpModal(true);
                setopensignInModal(false);
              }}
            >
              Sign up
            </button>
            <button 
              className="logistics-btn2"
              onClick={() => {
                setopensignInModal(true);
                setopensignUpModal(false);
              }}
            >
              Sign in
            </button>
          </div>
        </div>

        <div className="logisticsImg-holder">
          <img src="/Images/logistics.jpg" />
        </div>
      </section>

      <section className="About-us-container">
        <div className="About-us-img-holder">
          <img src="/Images/About.jpg" />
        </div>
        <div className="About-us-content">
          <h1>About Us</h1>
          <p>
            At DawnEats, we believe that every great day starts with a great
            breakfast. Our mission is<br/> simple: to make mornings easier by
            delivering fresh, healthy, and delicious meals right to<br/> your
            doorstep, fast and on time.<br/> We know how busy mornings can be, so we
            designed DawnEats to take the stress out of <br/> breakfast. With just a
            few taps, you can explore a variety of carefully curated options —<br/>
            from protein-packed plates to energizing smoothies all prepared with
            quality ingredients to fuel your day.<br/> What makes us different?
            </p>
            <ul>
              <li>
                Speed: Your breakfast arrives before the morning rush takes
                over.
              </li>
              <li>
                Freshness: Every order is made with care, ensuring your meal is
                always hot, fresh, and,<br/> satisfying.
              </li>
              <li>
                Convenience: Simple ordering, seamless delivery, and meals
                designed to fit into your <br/>morning routine.
              </li>
            </ul>
            <p>
            At DawnEats, we’re more than a food app, we’re your morning partner,
            here to help you<br/> start the day right, every single time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
