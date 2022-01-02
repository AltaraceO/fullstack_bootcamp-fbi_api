import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import { NewUser } from "./NewUser";

export const SignUp = () => {
  const [user] = useContext(UserContext)["user"];
  const [current, setCurrent] = useContext(UserContext)["currUser"];
  const [nameSearch, setNameSearch] = useState("");

  const onChangeHandle = (e) => {
    setNameSearch(e.target.value);
  };

  const checkUser = () => {
    const foundUser = user.find((e) => {
      return e.user === nameSearch;
    });
    if (foundUser) {
      setCurrent(foundUser);
      setNameSearch("");
    } else {
      setNameSearch("No user by that name");
    }
  };

  return (
    <div className="signup-main">
      <div className="existing-user">
        <div className="ui input focus">
          <input
            type="text"
            value={nameSearch}
            onChange={onChangeHandle}
            placeholder="Existing user?"
          />
        </div>

        <button
          className={`ui  ${
            nameSearch || !current ? "" : "disabled"
          } basic button`}
          onClick={checkUser}
        >
          <i className="icon user"></i>
          {current ? `Hi ${current.user}` : "Log in"}
        </button>
        {current && (
          <Link className="ui basic button" to="/search/">
            Search
          </Link>
        )}
      </div>
      <NewUser />
    </div>
  );
};
