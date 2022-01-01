import React, { useContext } from "react";

import { UserContext } from "./UserContext";

export const SignUp = () => {
  const [user, setUser] = useContext(UserContext);

  const onChangeHandle = (e) => {
    console.log(e.target.value);
    setUser(e.target.value);
  };

  return (
    <div>
      <input type="text" value={user} onChange={onChangeHandle} />
      <h2>{user}</h2>
      <div>sign up or login</div>
    </div>
  );
};
