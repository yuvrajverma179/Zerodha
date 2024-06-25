import React from "react";

function hero() {
  return (
    <>
      <div className="container">
        <div className="row border pb-2" style={{ marginTop: "120px" }}>
          {/* Image Section */}
          <div className="col-7 border" style={{ alignItems: "center" }}>
            <img
              src="media/images/signupimage.png"
              alt="signup image"
              style={{ width: "76%", paddingLeft: "70px" }}
              className="offset-2"
            />
          </div>

          {/* Form Page */}
          <div className="col-5 border">
            <h2 className="mt-4 m-auto mb-3" style={{ fontWeight: "600" }}>
              Open a Zerodha account
            </h2>
            <p className="text-muted">Or track your existing application.</p>
          </div>
        </div>

        {/* Bottom Part */}
        <div className="row border text-center pt-2 mb-5 pb-5">
          <p className="text-muted" style={{ fontSize: "10px", color: "gray" }}>
            I authorise Zerodha to contact me even if my number is registered on
            DND. I authorise Zerodha to fetch my KYC information from the C-KYC
            registry with my PAN. <br />
            Please visit{" "}
            <a href="/home" style={{ textDecoration: "none" }}>
              this article
            </a>{" "}
            to know more.
          </p>
          <p className="text-muted" style={{ fontSize: "10px", color: "gray" }}>
            If you are looking to open a HUF, Corporate, Partnership, or NRI
            account, you have to use the{" "}
            <a href="/home" style={{ textDecoration: "none" }}>
              offline forms
            </a>
            . For help,{" "}
            <a href="/home" style={{ textDecoration: "none" }}>
              click here
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

export default hero;
