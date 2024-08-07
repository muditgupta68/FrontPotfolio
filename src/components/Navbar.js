import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/hamburger.css";
import {
  HomeOutlined,
  UserOutlined,
  ExperimentOutlined,
  ContactsOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = ()=>{
    setIsNavOpen(!isNavOpen);
  }

  return (
    <div>
      <nav className="navbar navBar navbar-expand-lg navbar-dark bg-dark justify-content-between p-4 pt-3">
        <div className="nav_left">
          <a className="navbar-brand rotate_20" href="/">
            Mudit Gupta
          </a>
          <div className>
            <button
              className="navbar-toggler navBtnStyle"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={openNav}
            >
              <div className={`hamburger hamburger--3dx ${isNavOpen?"is-active":""}`}>
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
              {/* <span className="navbar-toggler-icon"></span> */}
            </button>
          </div>
        </div>
        <div className="nav_right">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto text-center">
              <NavLink
                exact="true"
                to="/"
                className="underline_rem"
                activeclassname="active"
              >
                <li className="nav-item m-2 d-flex justify-content-center align-items-center gap-1">
                  <HomeOutlined />
                  <p className="mt-3 inherit">Home</p>
                </li>
              </NavLink>
              <NavLink
                exact="true"
                to="/about"
                className="underline_rem"
                activeclassname="active"
              >
                <li className="nav-item m-2 d-flex justify-content-center align-items-center gap-1">
                  <UserOutlined />
                  <p className="mt-3 inherit">About</p>
                </li>
              </NavLink>
              <NavLink
                exact="true"
                to="/project"
                className="underline_rem"
                activeclassname="active"
              >
                <li className="nav-item m-2 d-flex justify-content-center align-items-center gap-1">
                  <ExperimentOutlined />
                  <p className="mt-3 inherit">Project</p>
                </li>
              </NavLink>
              <NavLink
                exact="true"
                to="/blog"
                className="underline_rem"
                activeclassname="active"
              >
                <li className="nav-item m-2 d-flex justify-content-center align-items-center gap-1">
                  <GlobalOutlined />
                  <p className="mt-3 inherit">Blogs</p>
                </li>
              </NavLink>
              <NavLink
                exact="true"
                to="/contact"
                className="underline_rem"
                activeclassname="active"
              >
                <li className="nav-item m-2 d-flex justify-content-center align-items-center gap-1">
                  <ContactsOutlined />
                  <p className="mt-3 inherit">Contact</p>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
