import React from "react";

function LeftSection({
  image,
  title,
  description,
  anchor_first,
  anchor_second,
}) {
  let toShow1 = false;
  if (anchor_first == "") {
    toShow1 = false;
  } else {
    toShow1 = true;
  }
  let toShow2 = false;
  if (anchor_second == "") {
    toShow2 = false;
  } else {
    toShow2 = true;
  }
  return (
    <>
      <div className="container mt-5 mb-5 pt-5 pb-5">
        <div className="row">
          <div className="col-5 offset-2">
            <a href="/home">
              <img src={image} alt="products image" style={{ width: "90%" }} />
            </a>
          </div>
          <div
            className="col-4"
            style={{ paddingLeft: "60px", paddingTop: "30px" }}
          >
            <h3>{title}</h3>
            <p style={{ fontSize: "14px" }} className="mt-3 text-muted">
              {description}
            </p>
            {toShow1 || toShow2 ? (
              <div>
                {toShow1 ? (
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
                    {anchor_first}&nbsp; <i class="fa-solid fa-arrow-right"></i>
                  </a>
                ) : null}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {toShow2 ? (
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      display: "inline-block",
                      fontSize: "13px",
                      color: "#387ed1",
                    }}
                  >
                    {" "}
                    {anchor_second} &nbsp;{" "}
                    <i class="fa-solid fa-arrow-right"></i>
                  </a>
                ) : null}
              </div>
            ) : null}
            <div
              style={{ display: "flex", flexDirection: "row" }}
              className="mt-3"
            >
              <img
                src="media/images/google-play-badge.svg"
                alt="google play"
                style={{ width: "35%" }}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src="media/images/appstore-badge.svg"
                alt="google play"
                style={{ width: "35%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
