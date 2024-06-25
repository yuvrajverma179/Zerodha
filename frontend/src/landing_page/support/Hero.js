import React from "react";

function Hero() {
  return (
    <>
      <div
        className="container-fliud"
        style={{ backgroundColor: "rgb(56,126,209)", paddingBottom: "85px" }}
      >
        <div className="row pt-5" style={{ paddingBottom: "105pxpx" }}>
          <div className="col-5 offset-2">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                color: "white",
                fontWeight: "500",
              }}
            >
              Support Portal
            </div>
            <div className="mt-5">
              <h5
                style={{
                  color: "white",
                  fontWeight: "480",
                  fontSize: "1.21rem",
                }}
              >
                Search for an answer or browse help topics to create a ticket
              </h5>
            </div>
            {/* Input Holder */}
            <div class="input-group mb-3 mt-4">
              <input
                type="text"
                class="form-control"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                style={{ fontSize: "14px" }}
              />
              <div class="input-group-append rounded-0">
                <span
                  class="input-group-text rounded-0"
                  id="basic-addon2"
                  style={{ fontSize: "20px", height: "35px" }}
                >
                  <i
                    class="fa fa-search"
                    aria-hidden="true"
                    style={{ fontSize: "16px" }}
                  ></i>
                </span>
              </div>
            </div>
            {/* Anchor Tags */}
            <div>
              <a href="/home" style={{ color: "white", fontSize: "15px" }}>
                Track account opening
              </a>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/home" style={{ color: "white", fontSize: "15px" }}>
                Track segment activation
              </a>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/home" style={{ color: "white", fontSize: "15px" }}>
                Intraday margins
              </a>
              <br />
              <a href="/home" style={{ color: "white", fontSize: "15px" }}>
                Kite user manual
              </a>
            </div>
          </div>
          <div className="col-4">
            <div
              style={{ display: "flex", flexDirection: "row-reverse" }}
              className="mb-5"
            >
              <a
                href="/home"
                style={{
                  textDecoration: "underline",
                  color: "white",
                  paddingRight: "50px",
                  fontSize: "14px",
                }}
              >
                Track tickets
              </a>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                color: "white",
                fontWeight: "500",
              }}
              className="mt-5 pt-3"
            >
              Featured
            </div>
            <div>
              <ul
                style={{
                  listStyleType: "number",
                  color: "white",
                  fontSize: "13px",
                }}
                className="mt-2"
              >
                <li style={{ marginBottom: "20px" }}>
                  <a href="/home" style={{ color: "white", fontSize: "13px" }}>
                    Latest Intraday leverages and Square-off timings
                  </a>
                </li>
                <li>
                  <a href="/home" style={{ color: "white", fontSize: "13px" }}>
                    Surveillance measure on scrips - June 2024
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
