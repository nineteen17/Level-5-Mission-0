import React from "react";
import "./AuthenticationPage.scss";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Header from "./Header";
const AuthenticationPage = () => {
  return (
    <div className="AuthenticationPage" >
      <Header />
      <div className="AuthenticationPage_LR">
        <Login />
        <Register />
      </div>
    </div>
  );
};

export default AuthenticationPage;
