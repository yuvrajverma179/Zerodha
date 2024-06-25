import React from "react";
import { useState } from "react";

function Universe() {
  const [isHover, setisHover] = useState(false);
  // Hover Styling on Signup Button
  const handleMouseEnter = () => {
    setisHover(true);
  };
  const handleMouseLeave = () => {
    setisHover(false);
  };

  return (
    <div className="container">
      <div
        className="row text-center mt-5 mb-3"
        style={{ alignItems: "center" }}
      >
        <p>
          Want to know more about our technology stack? Check out the{" "}
          <a style={{ textDecoration: "none", color: "#387ed1" }} href="/home">
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
      </div>
      {/* Text Section */}
      <div
        className="row text-center mt-3 pt-5"
        style={{ alignItems: "center" }}
      >
        <h3 className="mb-3">The Zerodha Universe</h3>
        <p style={{ fontSize: "13px" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      {/* Images Section - 1st Row*/}
      <div className="row">
        <div
          className="col-3 offset-2 text-center pt-5"
          style={{ alignItems: "center" }}
        >
          <a href="/home" style={{ textDecoration: "none" }}>
            <figure>
              <img
                src="media/images/products-image(1).png"
                alt="image 1"
                style={{ width: "50%" }}
              />
              <figcaption
                style={{ fontSize: "10px", color: "gray" }}
                className="mt-1"
              >
                Thematic Investment platform
              </figcaption>
            </figure>
          </a>
        </div>
        <div
          className="col-3 text-center pt-5"
          style={{ alignItems: "center" }}
        >
          <a href="/home" style={{ textDecoration: "none" }}>
            <figure>
              <img
                src="media/images/products-image(2).png"
                alt="image 2"
                style={{ width: "50%" }}
              />
              <figcaption
                style={{ fontSize: "10px", color: "gray" }}
                className="mt-1"
              >
                Algo & Strategy Platform
              </figcaption>
            </figure>
          </a>
        </div>
        <div
          className="col-3 text-center pt-5"
          style={{ alignItems: "center" }}
        >
          <a href="/home" style={{ textDecoration: "none" }}>
            <figure>
              <img
                src="media/images/products-image(3).svg"
                alt="image 3"
                style={{ width: "50%" }}
              />
              <figcaption
                style={{ fontSize: "10px", color: "gray" }}
                className="mt-1"
              >
                Options Trading Platform
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
      {/* Images Section - 2nd Row */}
      <div className="row">
        <div
          className="col-3 offset-2 text-center pt-3"
          style={{ alignItems: "center" }}
        >
          <a href="/home" style={{ textDecoration: "none" }}>
            <figure>
              <img
                src="media/images/products-image(4).png"
                alt="image 1"
                style={{ width: "50%" }}
              />
              <figcaption
                style={{ fontSize: "10px", color: "gray" }}
                className="mt-1"
              >
                Asset Management
              </figcaption>
            </figure>
          </a>
        </div>
        <div
          className="col-3 text-center pt-3"
          style={{ alignItems: "center" }}
        >
          <a href="/home" style={{ textDecoration: "none" }}>
            <figure>
              <img
                src="media/images/products-image(5).svg"
                alt="image 2"
                style={{ width: "50%" }}
              />
              <figcaption
                style={{ fontSize: "10px", color: "gray" }}
                className="mt-1"
              >
                Fundamental Research Platform
              </figcaption>
            </figure>
          </a>
        </div>
        <div
          className="col-3 text-center pt-3"
          style={{ alignItems: "center" }}
        >
          <a href="/home" style={{ textDecoration: "none" }}>
            <figure>
              <img
                src="media/images/products-image(6).png"
                alt="image 3"
                style={{ width: "50%" }}
              />
              <figcaption
                style={{ fontSize: "10px", color: "gray" }}
                className="mt-1"
              >
                Insurance
              </figcaption>
            </figure>
          </a>
        </div>
      </div>
      {/* Button Section */}
      <div className="row mt-5 mb-5">
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
  );
}

export default Universe;
