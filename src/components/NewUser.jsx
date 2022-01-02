import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

export const NewUser = () => {
  const [current] = useContext(UserContext)["currUser"];
  const [newName, setNewName] = useState("");

  const newNameHandle = (e) => {
    setNewName(e.target.value);
  };

  const updateUsers = async () => {
    const newUser = {
      user: newName,
      search: [],
    };
    await axios.post(
      "https://61d0790ccd2ee50017cc9887.mockapi.io/fbi/users",
      newUser
    );
  };

  const onClickHandle = () => {
    if (newName) {
      updateUsers();
    }
  };

  return (
    <div>
      <h4 className="ui horizontal divider header">
        <i className="sign-in icon"></i>
        Sign up
      </h4>
      <div className="ui form">
        <div className="inline field">
          <label>Name</label>
          <input
            type="text"
            placeholder="Must only contain letters"
            value={newName}
            onChange={newNameHandle}
          />
        </div>

        <div
          className={`ui submit  ${current && "disabled"} basic button`}
          onClick={onClickHandle}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};
