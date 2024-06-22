import React from "react";
import { useState } from "react";

function Hero() {
  const [isHover, setisHover] = useState(false);
  // Hover Styling on Signup Button
  const handleMouseEnter = () => {
    setisHover(true);
  };
  const handleMouseLeave = () => {
    setisHover(false);
  };
  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="row text-center">
          <img
            src="media/images/home-hero.png"
            alt="Hero-image"
            className="mb-3 m-auto"
            style={{ width: "650px" }}
          />
          <h1 className="mt-4 m-auto mb-3" style={{ fontWeight: "600" }}>
            Invest in everything
          </h1>
          <p className="mb-5 m-auto">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <button
            style={{
              width: "12.5%",
              borderRadius: "3px",
              fontWeight: "600",
              backgroundColor: isHover ? "black" : "#387ed1",
            }}
            className="btn btn-primary fs-6 m-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Sign up now
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
