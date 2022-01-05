import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import "../NavBar/nav.css";

export const NavUserLog = () => {
  const [current, setCurrent] = useContext(UserContext)["currUser"];

  const logUserOut = () => {
    setCurrent("");
  };
  console.log(current.user);
  return (
    <>
      {current ? (
        <div>
          <span>Hi {current.user}</span>
          <span className="nav-button" onClick={logUserOut}>
            Log out
          </span>
        </div>
      ) : (
        <Link className="nav-button" to="/signup/">
          Log in
        </Link>
      )}
    </>
  );
};
