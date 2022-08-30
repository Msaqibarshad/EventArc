import React, { useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "./Images/logofornavbar.png";
import { useState } from "react";

const Header = () => {
  const [buttons, setButtons] = useState(false);
  useEffect(() => {
    var auth = localStorage.getItem("auth-token");
    if (auth !== null) {
      setButtons(true);
    } else {
      setButtons(false);
    }
  }, []);

  const authtokenremove = () =>{
    localStorage.removeItem("auth-token");
    setButtons(false);

  }

  return (
    <>
      <nav class="navbar  navbar-expand-lg nav4color " id="up">
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            {/* <img src={logo} alt="" /> */}
            <span className="forarc">EVENT</span>ARC
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse  justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav ">
              <li class="nav-item">
                <NavLink activeClassName="active" exact to="/">
                  <a class="nav-link " href="#">
                    HOME
                  </a>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink activeClassName="active" exact to="/about">
                  <a class="nav-link" href="#">
                    ABOUT
                  </a>
                </NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services">
                  SERVICES
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#plan">
                  PLANS
                </a>
              </li>

              <li class="nav-item">
                <NavLink activeClassName="active" exact to="/contact">
                  <a class="nav-link " aria-current="page" href="#">
                    CONTACT
                  </a>
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink exact to="/dashboard">
                  <a class="nav-link " aria-current="page" href="#">
                    MY DASHBOARD
                  </a>
                </NavLink>
              </li>
              {buttons ? (
                <>
                  <li  class="nav-item orderbtn4header mx-1">
                    <a onClick={authtokenremove} class="nav-link ">SIGN OUT</a>
                  </li>

                  <li class="nav-item orderbtn4header">
                    <NavLink exact to="/allsetups">
                      <a class="nav-link " aria-current="page" href="#">
                        ORDER TO US
                      </a>
                    </NavLink>
                  </li>
                </>
              ) : (
                <li class="nav-item orderbtn4header ">
                  <NavLink exact to="/signin">
                    <a class="nav-link ">SIGN IN</a>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
