import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo-riq-white.png";
//import "bootstrap.min.js";

const RouteLink = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light navbar-dark bg-dark2 fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#">
          <img src={logo} className="logo" alt="logo" />
        </a>

        <div
          className="collapse navbar-collapse "
          id="bs-example-navbar-collapse-1"
        >
          <ul className="navbar-nav ml-md-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Contact"}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Login"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Signup"}>
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Myaccount"}>
                My Account
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Practice"}>
                Practice
              </Link>
            </li>
          </ul>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="text" />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default RouteLink;
