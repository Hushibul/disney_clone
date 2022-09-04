import React from "react";
import { Link } from "react-router-dom";

import "../css/login.css";

const Password = () => {
  return (
    <div className="loginPage">
      <div className="box">
        <input type="password" placeholder="Enter Your Password" />
        <Link className="link" to="/login/message">
          Submit
        </Link>
      </div>
    </div>
  );
};

export default Password;
