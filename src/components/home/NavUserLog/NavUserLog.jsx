import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import "../NavBar/nav.css";

export const NavUserLog = () => {
  const [current, setCurrent] = useContext(UserContext)["currUser"];

  const logUserOut = () => {
    setCurrent("");
  };

  return (
    <>
      {current ? (
        <>
          <span className="welcome-msg">Hi {current.user}</span>
          <span className="is-current" onClick={logUserOut}>
            Log out
          </span>
        </>
      ) : (
        <Link className="nav-button" to="/signup/">
          Log in
        </Link>
      )}
    </>
  );
};
