import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

export const NavUserLog = () => {
  const [current, setCurrent] = useContext(UserContext)["currUser"];

  const logUserOut = () => {
    setCurrent("");
  };

  return (
    <div>
      {current ? (
        <div className="ui item active" onClick={logUserOut}>
          Log out
        </div>
      ) : (
        <Link className="ui basic button inverted" to="/signup/">
          Log in
        </Link>
      )}
    </div>
  );
};
