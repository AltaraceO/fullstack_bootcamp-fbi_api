import React, { useContext, useState } from "react";

import { UserContext } from "./UserContext";

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
    } else {
      setNameSearch("No user by that name");
    }
  };

  return (
    <div>
      <div className="ui input">
        <input type="text" value={nameSearch} onChange={onChangeHandle} />
      </div>
      <h2>{nameSearch}</h2>
      <div>sign up or login</div>
      <button
        className={`ui  ${!nameSearch && "disabled"} basic button`}
        onClick={checkUser}
      >
        <i className="icon user"></i>
        {current ? "Logout" : "Login"}
      </button>
    </div>
  );
};
