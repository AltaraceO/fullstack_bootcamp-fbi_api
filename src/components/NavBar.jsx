import { Link } from "react-router-dom";

import React from "react";

export const NavBar = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/search/">Search</Link>
      </div>
    </div>
  );
};
