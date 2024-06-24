import React from "react";

function Team() {
  return (
    <>
      <div className="container">
        {/* Heading Section */}
        <div className="row text-center p-5 mt-3 mb-3">
          <h4 style={{ color: "#3f3f3f" }}>People</h4>
        </div>
        {/* CEO Section */}
        <div className="row">
          <div
            className="col-4 offset-2 text-center"
            style={{ alignItems: "center" }}
          >
            <img
              src="media/images/about-team(1).png"
              alt="founder-image"
              style={{ borderRadius: "100%", width: "70%" }}
            />
            <h6 style={{ fontWeight: "400" }} className="mt-3">
              Nithin Kamath
            </h6>
            <p style={{ color: "gray", fontSize: "13px" }} className="mt-3">
              Founder, CEO
            </p>
          </div>
          <div className="col-5">
            <p style={{ fontSize: "13px", color: "#2A3439" }} className="pt-3">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the{" "}
              <br />
              hurdles he faced during his decade long stint as a trader. Today,{" "}
              <br />
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p style={{ fontSize: "13px", color: "#2A3439" }}>
              He is a member of the SEBI Secondary Market Advisory Committee{" "}
              <br /> (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p style={{ fontSize: "13px", color: "#2A3439" }}>
              Playing basketball is his zen.
            </p>
            <p style={{ fontSize: "13px", color: "#2A3439" }}>
              Connect on{" "}
              <a href="/home" style={{ textDecoration: "none" }}>
                Homepage
              </a>
              /
              <a href="/home" style={{ textDecoration: "none" }}>
                TradingQnA
              </a>
              /
              <a href="/home" style={{ textDecoration: "none" }}>
                Twitter
              </a>
            </p>
          </div>
        </div>
        {/* Team Section */}
        {/* ROw 1 */}
        <div className="row pt-5">
          <div
            className="col-3 mt-5 text-center offset-2"
            style={{ alignItems: "center" }}
          >
            <img
              src="media/images/about-team(2).png"
              alt="team photo"
              style={{ borderRadius: "100%", width: "80%" }}
            />
            <h6 style={{ fontWeight: "400" }} className="mt-3">
              Nikhil Kamath
            </h6>
            <p style={{ color: "gray", fontSize: "13px" }} className="mt-3">
              Co-founder & CFO
            </p>
            <details>
              <summary
                style={{ fontSize: "13px", fontWeight: "400" }}
                className="text-muted"
              >
                Bio
              </summary>
              <p
                style={{
                  fontSize: "13px",
                  color: "#2A3439",
                  paddingLeft: "35px",
                  paddingRight: "35px",
                }}
              >
                Nikhil is an astute and experienced investor, and he heads
                financial planning at Zerodha. An avid reader, he always
                appreciates a good game of chess.
              </p>
            </details>
          </div>
          <div
            className="col-3 mt-5 text-center"
            style={{ alignItems: "center" }}
          >
            <img
              src="media/images/about-team(3).png"
              alt="team photo"
              style={{ borderRadius: "100%", width: "80%" }}
            />
            <h6 style={{ fontWeight: "400" }} className="mt-3">
              Dr. Kailash Nadh
            </h6>
            <p style={{ color: "gray", fontSize: "13px" }} className="mt-3">
              CTO
            </p>
            <details>
              <summary
                style={{ fontSize: "13px", fontWeight: "400" }}
                className="text-muted"
              >
                Bio
              </summary>
              <p
                style={{
                  fontSize: "13px",
                  color: "#2A3439",
                  paddingLeft: "35px",
                  paddingRight: "35px",
                }}
              >
                Kailash has a PhD in Artificial Intelligence & Computational
                Linguistics, and is the brain behind all our technology and
                products. He has been a developer from his adolescence and
                continues to write code every day.
              </p>
            </details>
          </div>
          <div
            className="col-3 mt-5 text-center"
            style={{ alignItems: "center" }}
          >
            <img
              src="media/images/about-team(4).png"
              alt="team photo"
              style={{ borderRadius: "100%", width: "80%" }}
            />
            <h6 style={{ fontWeight: "400" }} className="mt-3">
              Venu Madhav
            </h6>
            <p style={{ color: "gray", fontSize: "13px" }} className="mt-3">
              COO
            </p>
            <details>
              <summary
                style={{ fontSize: "13px", fontWeight: "400" }}
                className="text-muted"
              >
                Bio
              </summary>
              <p
                style={{
                  fontSize: "13px",
                  color: "#2A3439",
                  paddingLeft: "35px",
                  paddingRight: "35px",
                }}
              >
                Venu is the backbone of Zerodha taking care of operations and
                ensuring that we are compliant to rules and regulations. He has
                over a dozen certifications in financial markets and is also
                proficient in technical analysis. Workouts, cycling, and
                adventuring is what he does outside of Zerodha.
              </p>
            </details>
          </div>
        </div>
        {/* Row 2 */}
        <div className="row pt-3">
          <div
            className="col-3 mt-5 text-center offset-2"
            style={{ alignItems: "center" }}
          >
            <img
              src="media/images/about-team(5).png"
              alt="team photo"
              style={{ borderRadius: "100%", width: "80%" }}
            />
            <h6 style={{ fontWeight: "400" }} className="mt-3">
              Hanan Delvi
            </h6>
            <p style={{ color: "gray", fontSize: "13px" }} className="mt-3">
              CCO
            </p>
            <details>
              <summary
                style={{ fontSize: "13px", fontWeight: "400" }}
                className="text-muted"
              >
                Bio
              </summary>
              <p
                style={{
                  fontSize: "13px",
                  color: "#2A3439",
                  paddingLeft: "35px",
                  paddingRight: "35px",
                }}
              >
                We take pride in the way we support our clients, and Hanan is
                responsible for this with his never ending flow of energy. He is
                the man behind many of our support initiatives that have helped
                us stay ahead of the game. A free thinker, Hanan can be seen
                posing as one in his free time.
              </p>
            </details>
          </div>
          <div
            className="col-3 mt-5 text-center"
            style={{ alignItems: "center" }}
          >
            <img
              src="media/images/about-team(6).png"
              alt="team photo"
              style={{ borderRadius: "100%", width: "80%" }}
            />
            <h6 style={{ fontWeight: "400" }} className="mt-3">
              Seema Patil
            </h6>
            <p style={{ color: "gray", fontSize: "13px" }} className="mt-3">
              Director
            </p>
            <details>
              <summary
                style={{ fontSize: "13px", fontWeight: "400" }}
                className="text-muted"
              >
                Bio
              </summary>
              <p
                style={{
                  fontSize: "13px",
                  color: "#2A3439",
                  paddingLeft: "35px",
                  paddingRight: "35px",
                }}
              >
                Seema who has lead the quality team since the beginning of
                Zerodha, is now a director. She is an extremely disciplined
                fitness enthusiast.
              </p>
            </details>
          </div>
          <div
            className="col-3 mt-5 text-center"
            style={{ alignItems: "center" }}
          >
            <img
              src="media/images/about-team(7).png"
              alt="team photo"
              style={{ borderRadius: "100%", width: "80%" }}
            />
            <h6 style={{ fontWeight: "400" }} className="mt-3">
              Karthik Rangappa
            </h6>
            <p style={{ color: "gray", fontSize: "13px" }} className="mt-3">
              Chief of Education
            </p>
            <details>
              <summary
                style={{ fontSize: "13px", fontWeight: "400" }}
                className="text-muted"
              >
                Bio
              </summary>
              <p
                style={{
                  fontSize: "13px",
                  color: "#2A3439",
                  paddingLeft: "35px",
                  paddingRight: "35px",
                }}
              >
                Karthik "Guru" Rangappa single handledly wrote Varsity,
                Zerodha's massive educational program. He heads investor
                education initiatives at Zerodha and loves stock markets,
                classic rock, single malts, and photography.
              </p>
            </details>
          </div>
        </div>
        {/* Row 3 */}
        <div className="row pt-3 pb-4">
          <div
            className="col-3 mt-5 text-center offset-2"
            style={{ alignItems: "center" }}
          >
            <img
              src="media/images/about-team(8).png"
              alt="team photo"
              style={{ borderRadius: "100%", width: "80%" }}
            />
            <h6 style={{ fontWeight: "400" }} className="mt-3">
              Austin Prakesh
            </h6>
            <p style={{ color: "gray", fontSize: "13px" }} className="mt-3">
              Director Strategy
            </p>
            <details>
              <summary
                style={{ fontSize: "13px", fontWeight: "400" }}
                className="text-muted"
              >
                Bio
              </summary>
              <p
                style={{
                  fontSize: "13px",
                  color: "#2A3439",
                  paddingLeft: "35px",
                  paddingRight: "35px",
                }}
              >
                Austin is a successful self-made entrepreneur from Singapore.
                His area of specialty revolves around helping organisations
                including grow by optimizing revenue streams and creating growth
                strategies. He is a boxing enthusiast and loves collecting
                exquisite watches.
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
