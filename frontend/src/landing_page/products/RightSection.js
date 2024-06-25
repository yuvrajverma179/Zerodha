import React from "react";

function RightSection({ image, title, description, anchor }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 offset-2">
            <div style={{ paddingTop: "55px" }}>
              <h3>{title}</h3>
              <p style={{ fontSize: "14px" }} className="mt-3 text-muted">
                {description}
              </p>
            </div>
            <div>
              <a
                href="/"
                style={{
                  display: "inline-block",
                  fontSize: "13px",
                  textDecoration: "none",
                  color: "#387ed1",
                }}
              >
                {" "}
                {anchor}&nbsp; <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-5">
            <a href="/home">
              <img src={image} alt="image right" style={{ width: "100%" }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
