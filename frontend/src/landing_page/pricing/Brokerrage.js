import React from "react";

function Brokerrage() {
  return (
    <>
      <div className="container">
        <div className="row mt-5 mb-3">
          <div className="col-6 offset-2" style={{ paddingRight: "0px" }}>
            <a
              href="/home"
              style={{
                textDecoration: "none",
                fontSize: "16px",
                color: "#387ed1",
                marginLeft: "75px",
              }}
              className="mb-5"
            >
              Brokerage calculator
            </a>
            <ul
              className="pt-4"
              style={{
                fontSize: "12px",
                paddingLeft: "0px",
                paddingRight: "0px",
              }}
            >
              <li
                style={{ fontSize: "10px", padding: "0.15rem" }}
                className="text-muted"
              >
                Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
                GST per order.
              </li>
              <li
                style={{ fontSize: "10px", padding: "0.15rem" }}
                className="text-muted"
              >
                Digital contract notes will be sent via e-mail.
              </li>
              <li
                style={{ fontSize: "10px", padding: "0.15rem" }}
                className="text-muted"
              >
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>
              <li
                style={{ fontSize: "10px", padding: "0.15rem" }}
                className="text-muted"
              >
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li
                style={{ fontSize: "10px", padding: "0.15rem" }}
                className="text-muted"
              >
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>
              <li
                style={{ fontSize: "10px", padding: "0.15rem" }}
                className="text-muted"
              >
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </ul>
          </div>
          <div className="col-4">
            <a
              href="/home"
              style={{
                textDecoration: "none",
                fontSize: "16px",
                color: "#387ed1",
              }}
            >
              List of charges
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brokerrage;
