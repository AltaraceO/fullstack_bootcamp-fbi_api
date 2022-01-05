import { Link } from "react-router-dom";
import React from "react";
import { NavUserLog } from "../NavUserLog/NavUserLog";
import "./nav.css";

export const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <div className="nav-sep">
          <Link className="nav-button" to="/">
            Home
          </Link>
          <Link className="nav-button" to="/compare/">
            Compare States
          </Link>
        </div>
        <div className="nav-sep">
          <Link className="nav-button" to="/wanted/">
            Wanted List
          </Link>
          <Link className="nav-button" to="/signup/">
            Sign up
          </Link>
        </div>
      </div>
      <div className="nav-right">
        <NavUserLog />
      </div>
    </div>
  );
};
