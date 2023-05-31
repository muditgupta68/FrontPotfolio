import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between p-4 pt-3">
        <div className="nav_left">
          <a className="navbar-brand" href="/">
            Mudit Gupta
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="nav_right">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto text-center">
              <li className="nav-item m-2">
                <NavLink
                  exact="true"
                  to="/"
                  className="underline_rem"
                  activeclassname="active"
                >
                  <p className="mt-2 inherit">Home</p>
                </NavLink>
              </li>
              <li className="nav-item m-2">
                <NavLink
                  exact="true"
                  to="/about"
                  className="underline_rem"
                  activeclassname="active"
                >
                  <p className="mt-2 inherit">About</p>
                </NavLink>
              </li>
              <li className="nav-item m-2">
                <NavLink
                  exact="true"
                  to="/project"
                  className="underline_rem"
                  activeclassname="active"
                >
                  <p className="mt-2 inherit">Project</p>
                </NavLink>
              </li>
              <li className="nav-item m-2">
                <NavLink
                  exact="true"
                  to="/"
                  className="underline_rem"
                  activeclassname="active"
                >
                  <p className="mt-2 inherit">Blogs</p>
                </NavLink>
              </li>
              <li className="nav-item m-2">
                <NavLink
                  exact="true"  
                  to="/contact"
                  className="underline_rem"
                  activeclassname="active"
                >
                  <p className="mt-2 inherit">Contact</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
