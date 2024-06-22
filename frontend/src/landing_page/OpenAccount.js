import React from "react";
import { useState } from "react";

function OpenAccount() {
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
          <h2 className="mt-4 m-auto mb-3" style={{ fontWeight: "600" }}>
            Open a Zerodha account
          </h2>
          <p className="mb-5 m-auto" style={{ fontSize: "14px" }}>
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
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

export default OpenAccount;
