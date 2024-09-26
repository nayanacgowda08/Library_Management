// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../assets/styles/landingPage.css";
import Admin from "./Admin/Admin";
import User from "./Users/User";

const LandingPage = () => {
  let [bool, setBool] = useState(true);
  const handleBtn = () => {
    setBool(!bool);
  };
  return (
    <>
      <div className="landingpage">
        <div className="login-container">
          <div
            className={`btn-container ${bool ? "btext-user" : "btext-admin"}`}
          >
            <button
              onClick={handleBtn}
              className={bool ? "Admin-btn" : "user-btn"}
            >
              {bool ? "Admin-Login" : "User-Login"}
            </button>
            <div className={`bg-text  ${bool?"user-bg":"ad-bg"}`}>
              <div>Admin Login</div>
              <div>User Login</div>
            </div>
          </div>
          <div className="heading">{bool?"Admin-Login Page": "User-Login Page"}</div>
          <div className="form-container">{bool ? <Admin /> : <User />}</div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
