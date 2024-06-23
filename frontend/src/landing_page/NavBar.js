import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isHover, setisHover] = useState(false);
  // Hover Styling on Tab Links
  //For individual color change, You have to pass object in useState for each tab as a key in it..
  const handleMouseEnter = () => {
    setisHover(true);
  };
  const handleMouseLeave = () => {
    setisHover(false);
  };
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-aorund offset-3">
            <li class="nav-item p-2 text-muted">
              <Link
                class="nav-link"
                to="/signup"
                style={{
                  fontSize: "13px",
                  marginLeft: "3px",
                  marginRight: "3px",
                  color: isHover ? "#387ed1" : "gray",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Signup
              </Link>
            </li>
            <li class="nav-item p-2 text-muted">
              <Link
                class="nav-link"
                to="/about"
                style={{
                  fontSize: "13px",
                  marginLeft: "3px",
                  marginRight: "3px",
                  color: isHover ? "#387ed1" : "gray",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                About
              </Link>
            </li>
            <li class="nav-item p-2 text-muted">
              <Link
                class="nav-link"
                to="/products"
                style={{
                  fontSize: "13px",
                  marginLeft: "3px",
                  marginRight: "3px",
                  color: isHover ? "#387ed1" : "gray",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Products
              </Link>
            </li>
            <li class="nav-item p-2 text-muted">
              <Link
                class="nav-link"
                to="/pricing"
                style={{
                  fontSize: "13px",
                  marginLeft: "3px",
                  marginRight: "3px",
                  color: isHover ? "#387ed1" : "gray",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Pricing
              </Link>
            </li>
            <li class="nav-item p-2 text-muted">
              <Link
                class="nav-link"
                to="/support"
                style={{
                  fontSize: "13px",
                  marginLeft: "3px",
                  marginRight: "3px",
                  color: isHover ? "#387ed1" : "gray",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Support
              </Link>
            </li>
            <li class="nav-item p-2">
              <a
                class="nav-link"
                href="#"
                style={{
                  fontSize: "13px",
                  marginLeft: "3px",
                  marginRight: "3px",
                }}
              >
                <i class="fa-solid fa-bars"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
