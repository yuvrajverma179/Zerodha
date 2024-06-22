import React from "react";

function Stats() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 pt-3" style={{ paddingLeft: "110px" }}>
          <h2 className="mb-4">Trust with confidence</h2>
          <h6 className="mt-4 mb-3">Customer-first always</h6>
          <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
            That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            worth of equity investments.
          </p>
          <h6 className="mt-4 mb-3">No spam or gimmicks</h6>
          <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h6 className="mt-4 mb-3">The Zerodha universe</h6>
          <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h6 className="mt-4 mb-3">Do better with money</h6>
          <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="col-6 pt-4 ">
          <img
            src="media/images/home-image.png"
            alt="Home Stats Image"
            style={{ width: "85%", height: "100%" }}
          />
          <a
            href="/"
            style={{
              display: "inline-block",
              fontSize: "13px",
              paddingLeft: "70px",
              textDecoration: "none",
            }}
          >
            Explore our products &nbsp; <i class="fa-solid fa-arrow-right"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="/"
            style={{
              textDecoration: "none",
              display: "inline-block",
              fontSize: "13px",
            }}
          >
            Try Kite demo &nbsp; <i class="fa-solid fa-arrow-right"></i>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stats;
