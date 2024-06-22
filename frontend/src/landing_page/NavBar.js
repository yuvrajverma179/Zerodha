import React from "react";
import { useState } from "react";

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
          <a class="navbar-brand offset-2" href="#">
            <img
              src="media/images/logo.png"
              style={{ width: "100px", margin: "" }}
              alt="Logo"
            />
          </a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-aorund offset-3">
            <li class="nav-item p-2 text-muted">
              <a
                class="nav-link"
                href="#"
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
              </a>
            </li>
            <li class="nav-item p-2 text-muted">
              <a
                class="nav-link"
                href="#"
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
              </a>
            </li>
            <li class="nav-item p-2 text-muted">
              <a
                class="nav-link"
                href="#"
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
              </a>
            </li>
            <li class="nav-item p-2 text-muted">
              <a
                class="nav-link"
                href="#"
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
              </a>
            </li>
            <li class="nav-item p-2 text-muted">
              <a
                class="nav-link"
                href="#"
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
              </a>
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
