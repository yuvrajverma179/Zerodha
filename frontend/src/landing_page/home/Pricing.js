import React from "react";

function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6" style={{ paddingLeft: "110px" }}>
          <h2 className="mt-5 mb-4">Unbeatable pricing</h2>
          <p style={{ fontSize: "14px", marginBottom: "10px" }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/" style={{ textDecoration: "none", fontSize: "13px" }}>
            See pricing &nbsp; <i class="fa-solid fa-arrow-right"></i>{" "}
          </a>
        </div>
        <div
          className="col-6"
          style={{ paddingLeft: "0px", paddingRight: "20px" }}
        >
          <div className="row" style={{ marginTop: "3.5rem" }}>
            <div
              className="col-6"
              style={{ paddingRight: "0px", paddingLeft: "0px" }}
            >
              <div style={{ marginLeft: "30px" }} className="border">
                <h1
                  style={{
                    textAlign: "center",
                    marginBottom: "15px",
                    marginTop: "15px",
                  }}
                >
                  &#8377;0
                </h1>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "15px",
                    fontSize: "14px",
                    marginBottom: "25px",
                  }}
                >
                  Free equity delivery and <br />
                  direct mutual funds
                </p>
              </div>
            </div>
            <div className="col-6" style={{ paddingLeft: "0px" }}>
              <div
                style={{ marginRight: "30px", paddingBottom: "20px" }}
                className="border"
              >
                <h1
                  style={{
                    textAlign: "center",
                    marginBottom: "15px",
                    marginTop: "15px",
                  }}
                >
                  &#8377;20
                </h1>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "15px",
                    fontSize: "14px",
                    marginBottom: "25px",
                  }}
                >
                  Intraday and F&O
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
