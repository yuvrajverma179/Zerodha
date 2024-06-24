import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container">
      {/* First Section (Above Horizontal Line) */}
      <div className="row text-center p-5 mt-5 mb-5">
        <h4 style={{ color: "#3f3f3f" }}>
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h4>
      </div>
      {/* Second Section (Horizontal Line) */}
      <div
        style={{ width: "1024px", paddingLeft: "150px" }}
        className="m-0 pt-0 pb-0"
      >
        <hr />
      </div>
      {/* Third Section (Below Horizontal Section) */}
      <div className="row">
        <div
          className="col"
          style={{
            paddingRight: "15px",
            paddingTop: "70px",
            paddingLeft: "200px",
          }}
        >
          <p className="text-muted" style={{ fontSize: "14px" }}>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div
          className="col"
          style={{
            paddingLeft: "15px",
            paddingTop: "70px",
            paddingRight: "170px",
          }}
        >
          <p className="text-muted" style={{ fontSize: "14px" }}>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            <Link
              style={{ textDecoration: "none", color: "#387ed1" }}
              to="https://rainmatter.com/"
            >
              Rainmatter
            </Link>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <Link style={{ textDecoration: "none", color: "#387ed1" }} to="">
              blog
            </Link>{" "}
            or see what the media is{" "}
            <Link style={{ textDecoration: "none", color: "#387ed1" }} to="">
              saying about us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
