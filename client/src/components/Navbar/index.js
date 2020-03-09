import React from "react";
import "./style.css";
// import { NavLink } from "react-router-dom";


function Nav() {
  return (
    <nav className="navbar sticky-top navbar-expand-sm d-flex justify-content-around">
      {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo02"> */}
        <ul className="navbar-nav navbar-group mt-2 mt-lg-0">
        <li className="nav-item active">
        <a href="https://www.thryveinside.com/" className="mr-3" target="_blank" rel="noopener noreferrer"></a>
          </li>
        </ul>
        <div className="navbar-group logo-container">
          <img className="logo" src="/images/thryve.png" alt="Thryve" />
        </div>
        <div className="navbar-group navbar-group-right">
        <div className="nav-item active">
        <a href="https://www.thryveinside.com/pages/why-gut-health" className="mr-3" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        <div className="nav-item active">
        <a href="https://www.thryveinside.com/pages/about-us" className="mr-3" target="_blank" rel="noopener noreferrer">Our Values</a>
          </div>
        </div>
      {/* </div> */}
    </nav>
  )
};

export default Nav;