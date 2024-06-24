import React from "react";
import { Link } from "react-router-dom";

function NavBar2() {
  return (
    <>
      <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary pt-0 pb-0">
        <div class="container-fluid border" style={{ height: "48px" }}>
          <Link class="navbar-brand offset-2" to="/">
            <img
              src="media/images/logo.png"
              style={{ width: "100px", margin: "" }}
              alt="Logo"
            />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar2;
