import React, { useState } from "react";
// import googlePlay from "../../../Images/googleplay.png";
// import appStore from "../../../Images/appstore.png";
import heroImg from "../../../Images/hero image.svg";
import secondImg from "../../../Images/second image.png";
import vector1 from "../../../Images/Vector (1).svg";
import vector2 from "../../../Images/Group 2.svg";
import vector3 from "../../../Images/Vector (2).svg";
import "../Landing-Page/LandingPage.scss";
// import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
// import gmobile from "../../../Images/googleplay.svg";
// import amobile from "../../../Images/appstore.svg";

// const handleDragStart = (e) => e.preventDefault();

// const items = [
//   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
//   <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
// ];

export default function LandingPage() {
  const [faqOne, setFaqOne] = useState(false);
  const [faqTwo, setFaqTwo] = useState(false);

  function setDropHandler() {
    setFaqOne((prev) => !prev);
  }
  function setDropHandler2() {
    setFaqTwo((prev) => !prev);
  }
  return (
    <div className="main">
      <div className="hero">
        <div className="hero-text">
          <h1>
            Delivering
            <br /> your essentials
            <br />
            <span>right on time!</span>
          </h1>
          <p>
            Experience convenience, timely orders, and cost-effectiveness with
            just a click on our app!
          </p>
          {/* <div className="download-btns">
            <img src={googlePlay} alt="goog"/>
            <img src={appStore} />
          </div> */}
          {/* <div className="download-mobile">
            <img src={gmobile} />
            <img src={amobile} />
          </div> */}
          <button>Get started</button>
        </div>

        <div className="hero-img">
          <img src={heroImg} alt="hero-Img" />
        </div>
      </div>

      <div className="section-one">
        <h2>Start using Odafasta in a few simple steps</h2>
        <div className="section-one-instructions">
          <img src={secondImg} alt="second-Img" />
          <div className="section-one-text">
            <p>1. Create an account with your email and phone number</p>
            <p>
              2. Start shipping a wide range of goods from China with our
              delivery service.
            </p>
          </div>
        </div>
      </div>

      <div id="about" className="section-two">
        <div className="section-two-header">
          <h2>What we Offer</h2>
          <p>We consistently deliver outstanding service, always on time.</p>
        </div>
        <div className="carousel">
          <div className="carousel-card">
            <img src={vector1} alt="vector1" />
            <h4>Quick Deliveries</h4>
            <p>
              Enjoy the convenience of prompt shipping for your merchandise,
              ensuring your items reach you in due time.
            </p>
            <BsArrowRight color="#FFD700" size={20} />
          </div>

          <div className="carousel-card">
            <img src={vector2} alt="" />
            <h4>Save Time</h4>
            <p>
              No need to spend hours searching and comparing vendors. We have
              all the stores, reviews, and deliveries you need right at your
              fingertips.
            </p>
            <BsArrowRight color="#FFD700" size={20} />
          </div>

          <div className="carousel-card">
            <img src={vector3} alt="" />
            <h4>Great Savings, Great Variety</h4>
            <p>
              Discover a world of unbeatable deals and pick your favorites with
              complete freedom.
            </p>
            <BsArrowRight color="#FFD700" size={20} />
          </div>
        </div>
      </div>

      <div id="faq" className="section-three">
        <div className="section-three-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            We've collated answers to some questions you might have and we hope
            this helps you understand our service
          </p>
        </div>

        <div className="faq-section">
          <div className="faq">
            <div>
              <div className="faq-icon" onClick={setDropHandler}>
                <h4>What is Odafasta</h4>
                {!faqOne ? <AiOutlinePlusCircle /> : <AiOutlineMinusCircle />}
              </div>
              {faqOne && (
                <p>
                  Odafasta is a tech solution that combines online food and
                  grocery delivery into a single, user-friendly app, making it
                  easier for you to access and receive what you need. Our vision
                  is to simplify your life, one order at a time without full
                  ownership.
                </p>
              )}
            </div>
          </div>

          <div className="faq-border"></div>
          <div className="faq">
            <div>
              <div className="faq-icon" onClick={setDropHandler2}>
                <h4>At what locations does Odafasta deliver?</h4>
                {!faqTwo ? <AiOutlinePlusCircle /> : <AiOutlineMinusCircle />}
              </div>
              {faqTwo && (
                <p>We will be launching our services within Tanzania.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}