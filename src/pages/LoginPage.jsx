import React from "react";
import { Link } from "react-router-dom";

import "../css/login.css";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <div className="box">
        <input type="email" placeholder="Enter Your Email" />
        <Link className="link" to="/login/password">
          Continue
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
