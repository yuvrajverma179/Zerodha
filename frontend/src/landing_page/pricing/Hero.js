import React from "react";

function Hero() {
  return (
    <>
      <div className="container">
        {/* First Section (Above Horizontal Line) */}
        <div className="row text-center p-5 mt-5 mb-4">
          <h2 style={{ color: "#3f3f3f", fontWeight: "500" }} className="fs-1">
            Pricing
          </h2>
          <p style={{ fontSize: "18px" }} className="mt-2">
            Free equity investments and flat ₹20 intraday and F&O trades
          </p>
        </div>
        {/* Second Section (Horizontal Line) */}
        <div
          style={{ width: "1024px", paddingLeft: "150px" }}
          className="m-0 pt-0 pb-0"
        >
          <hr />
        </div>
        {/* Images Portion */}
        <div className="row mt-5 mb-5">
          <div
            className="col-3 offset-2 pt-4 pb-4 text-center"
            style={{ alignItems: "center" }}
          >
            <img
              src="media/images/pricing-hero(1).png"
              alt="pricing-hero 1"
              style={{ width: "80%" }}
            />
            <h4 className="mt-2">Free equity delivery</h4>
            <p className="text-muted mt-4" style={{ fontSize: "13px" }}>
              All equity delivery investments (NSE, BSE), <br /> are absolutely
              free — ₹ 0 brokerage.
            </p>
          </div>
          <div
            className="col-3 pt-4 pb-4 text-center pl-0 pr-0"
            style={{ alignItems: "center" }}
          >
            <img
              src="media/images/pricing-hero(2).png"
              alt="pricing-hero 1"
              style={{ width: "73%" }}
            />
            <h4 className="mt-2">Intraday and F&O trades</h4>
            <p className="text-muted mt-4" style={{ fontSize: "13px" }}>
              Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order
              on intraday trades across <br /> equity, currency, and commodity
              trades. <br />
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div
            className="col-3 pt-4 pb-4 text-center"
            style={{ alignItems: "center" }}
          >
            <img
              src="media/images/pricing-hero(3).png"
              alt="pricing-hero 1"
              style={{ width: "80%" }}
            />
            <h4 className="mt-2">Free direct MF</h4>
            <p className="text-muted mt-4" style={{ fontSize: "13px" }}>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
        {/* Ending Line */}
        <div
          style={{ width: "1024px", paddingLeft: "150px" }}
          className="m-0 pt-0 pb-0"
        >
          <hr />
        </div>
      </div>
    </>
  );
}

export default Hero;
