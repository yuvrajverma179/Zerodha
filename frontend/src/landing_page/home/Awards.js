import React from "react";

function Awards() {
  return (
    <div className="container mt-5 border mb-5">
      <div className="row border">
        {/* Image Section */}
        <div className="col-6 border">
          <div className="row">
            <div className="col offset-2">
              <img
                src="media/images/home-awards.png"
                alt="Home Awards image"
                style={{ width: "350px", height: "228px" }}
              />
            </div>
          </div>
        </div>

        <div className="col-6 border" style={{ paddingRight: "100px" }}>
          <h2 className="mb-4">Largest stock broker in India</h2>
          <p className="mb-4" style={{ fontSize: "0.90rem" }}>
            1.5+ Crore Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6 border">
              <ul>
                <li
                  className="mr-2 ml-0 mt-2 mb-2"
                  style={{ fontSize: "0.85rem" }}
                >
                  Futures and Options
                </li>
                <li
                  className="mr-2 ml-0 mt-2 mb-2"
                  style={{ fontSize: "0.85rem" }}
                >
                  Commodity derivatives
                </li>
                <li
                  className="mr-2 ml-0 mt-2 mb-2"
                  style={{ fontSize: "0.85rem" }}
                >
                  Currency derivatives
                </li>
              </ul>
            </div>
            <div className="col-6 border">
              <ul>
                <li
                  className="mr-2 ml-0 mt-2 mb-2"
                  style={{ fontSize: "0.85rem" }}
                >
                  Stocks & IPOs
                </li>
                <li
                  className="mr-2 ml-0 mt-2 mb-2"
                  style={{ fontSize: "0.85rem" }}
                >
                  Direct mutual funds
                </li>
                <li
                  className="mr-2 ml-0 mt-2 mb-2"
                  style={{ fontSize: "0.85rem" }}
                >
                  Bonds and Govt. Securities
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/home-hero(2).png"
            alt="Home Hero (2)"
            style={{ width: "100%", height: "10%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
