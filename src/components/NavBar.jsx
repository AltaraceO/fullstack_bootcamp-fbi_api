import { Link } from "react-router-dom";
import React from "react";
import { NavUserLog } from "./NavUserLog";

export const NavBar = () => {
  return (
    <div className="ui large secondary inverted menu nav-bar">
      <Link className="item" to="/">
        Home
      </Link>
      <Link className="item" to="/compare/">
        Compare States
      </Link>
      <Link className="item" to="/wanted/">
        Most Wanted
      </Link>
      <Link className="item" to="/signup/">
        Sign up
      </Link>
      <div className="right menu">
        <NavUserLog />
      </div>
    </div>
  );
};
