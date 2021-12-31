import { Link } from "react-router-dom";

import React from "react";

export const NavBar = () => {
  return (
    <div className="ui secondary  menu">
      <Link className="item" to="/">
        Home
      </Link>

      <Link className="item" to="/search/">
        Search
      </Link>
      <Link className="item" to="/signup/">
        Sign up
      </Link>
      <div className="right menu">
        <div className="ui item active ">Logout</div>
      </div>
    </div>
  );
};
