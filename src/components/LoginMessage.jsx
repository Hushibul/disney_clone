import React from "react";
import { Link } from "react-router-dom";

const LoginMessage = () => {
  return (
    <div className="loginPage">
      <div className="box">
        <h3 style={{ color: "#fff" }}>Login Successfull !!</h3>
        <p style={{ color: "#fff" }}>
          Don't get your hopes up this is just a demo page..
        </p>
        <Link className="link" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default LoginMessage;
