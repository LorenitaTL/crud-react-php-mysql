import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/git.svg";

export const Header = () => {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <Link to="/">
          <div className="item option">
            <h3 className="option">Products</h3>
          </div>
        </Link>
        <Link to="/categories">
          <div className="item ">
            <h3 className="option">Categories</h3>
          </div>
        </Link>
        <div className="item"></div>
        <div className="item">
          <i className="fa fa-user-circle fa-2x" aria-hidden="true"></i>
        </div>
        <div className="item">
          <i className="fa fa-bell fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};
