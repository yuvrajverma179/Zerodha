import React from "react";

function Education() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col pt-5 pb-5">
            <img
              src="media/images/home-education.png"
              alt="Home-Eductaion Image"
              style={{ width: "90%", height: "90%", paddingLeft: "110px" }}
            />
          </div>
          <div className="col pt-5" style={{ paddingRight: "120px" }}>
            <h4 className="mb-4">Free and open market education</h4>
            <p style={{ fontSize: "14px" }} className="mb-2">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a
              href="/"
              style={{
                textDecoration: "none",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              Varsity &nbsp; <i class="fa-solid fa-arrow-right"></i>{" "}
            </a>
            <p style={{ fontSize: "14px" }} className="mb-2 mt-4">
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a
              href="/"
              style={{
                textDecoration: "none",
                display: "inline-block",
                fontSize: "13px",
              }}
            >
              TradingQ&A &nbsp; <i class="fa-solid fa-arrow-right"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
