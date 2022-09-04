import React from "react";
import { Link } from "react-router-dom";

import "../css/navbar.css";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logos">
        <img className="logo" src={logo} alt="upper shade" />
      </div>
      <Link className="login" to="/login">
        login
      </Link>
    </div>
  );
};

export default Navbar;
