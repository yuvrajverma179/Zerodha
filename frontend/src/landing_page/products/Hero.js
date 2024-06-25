import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5 pt-4 pb-3">
        <h2 className="mb-1" style={{ fontSize: "2.25rem" }}>
          Technology
        </h2>
        <p style={{ fontSize: "16px" }} className="mb-2 mt-2">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p style={{ fontSize: "14px" }} className="mb-5 mt-2">
          Check out our &nbsp;
          <a
            href="/"
            style={{
              textDecoration: "none",
              display: "inline-block",
              fontSize: "14px",
            }}
          >
            investment offerings &nbsp; <i class="fa-solid fa-arrow-right"></i>{" "}
          </a>
        </p>
      </div>
      {/* Horizintal Line */}
      <div
        style={{ width: "1024px", paddingLeft: "150px" }}
        className="m-0 pt-0 pb-0"
      >
        <hr />
      </div>
    </div>
  );
}

export default Hero;
