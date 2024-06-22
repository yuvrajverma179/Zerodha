import React from "react";

function Footer() {
  return (
    <>
      <footer
        className="container-fluid border mt-5"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="row mt-5">
          <div className="col-2 offset-2 pt-3">
            <img
              src="media/images/logo.png"
              style={{ width: "100px", margin: "" }}
              alt="Logo"
            />
            <p
              style={{ fontSize: "10px", fontWeight: "600" }}
              className="text-muted mt-3 mb-2"
            >
              © 2010 - 2024, Zerodha Broking Ltd.{" "}
            </p>
            <p
              style={{ fontSize: "10px", fontWeight: "600" }}
              className="text-muted mb-4"
            >
              All rights reserved.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "120px",
              }}
              className="mb-2"
            >
              <i class="fa-brands fa-x-twitter opacity-50"></i>
              <i class="fa-brands fa-square-facebook opacity-50"></i>
              <i class="fa-brands fa-instagram opacity-50"></i>
              <i class="fa-brands fa-linkedin opacity-50"></i>
            </div>
            <hr style={{ marginTop: "4px", marginBottom: "4px" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "85px",
              }}
              className="mt-2"
            >
              <i class="fa-brands fa-youtube opacity-50"></i>
              <i class="fa-brands fa-whatsapp opacity-50"></i>
              <i class="fa-brands fa-telegram opacity-50"></i>
            </div>
          </div>
          <div className="col-2" style={{ paddingLeft: "35px" }}>
            <h5 style={{ fontSize: "15px" }} className="pt-3 mb-3">
              Company
            </h5>
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              About
            </a>
            <br />
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              Products
            </a>
            <br />
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              Pricing
            </a>
            <br />
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              Referral programme
            </a>
            <br />
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              Careers
            </a>
            <br />
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              Zerodha.tech
            </a>
            <br />
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              Press & media
            </a>
            <br />
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              Zerodha Cares (CSR)
            </a>
            <br />
          </div>
          <div className="col-3" style={{ paddingLeft: "65px" }}>
            <h5 style={{ fontSize: "15px" }} className="pt-3 mb-3">
              Support
            </h5>
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              Contact us
            </a>
            <br />
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              Support portal
            </a>
            <br />
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              Z-Connect blog
            </a>
            <br />
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              List of charges
            </a>
            <br />
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              Downloads & resources
            </a>
            <br />
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              Videos
            </a>
            <br />
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              Market overview
            </a>
            <br />
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              How to file a complaint?
            </a>
            <br />
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              Status of your complaints
            </a>
            <br />
          </div>
          <div className="col-3 offset-left-2" style={{ paddingLeft: "0px" }}>
            <h5 style={{ fontSize: "16px" }} className="pt-3 mb-3">
              Account
            </h5>
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              Open an account
            </a>
            <br />
            <a
              style={{
                fontSize: "14px",
                fontWeight: "600",
                textDecoration: "none",
              }}
              className="text-muted pt-2 pb-2"
            >
              Fund transfer
            </a>
            <br />
          </div>
          <div className="col-1"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row pt-5" style={{ paddingRight: "110px" }}>
          <div className="col">
            <p
              className="offset-2 text-muted"
              style={{ fontSize: "8px", paddingRight: "90px", color: "gray" }}
            >
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX - SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. - SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 - SEBI Registration no.: INZ000038238
              Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p
              className="offset-2 text-muted"
              style={{ fontSize: "8px", paddingRight: "90px", color: "gray" }}
            >
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
            <p
              className="offset-2 text-muted"
              style={{ fontSize: "8px", paddingRight: "90px", color: "gray" }}
            >
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>
            <p
              className="offset-2 text-muted"
              style={{ fontSize: "8px", paddingRight: "90px", color: "gray" }}
            >
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p
              className="offset-2 text-muted"
              style={{ fontSize: "8px", paddingRight: "90px", color: "gray" }}
            >
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p
              className="offset-2 text-muted"
              style={{ fontSize: "8px", paddingRight: "90px", color: "gray" }}
            >
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>
          </div>
        </div>
        <div className="row"></div>
      </footer>
    </>
  );
}

export default Footer;
