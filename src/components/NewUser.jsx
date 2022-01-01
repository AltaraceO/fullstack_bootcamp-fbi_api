import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

export const NewUser = () => {
  const [current, setCurrent] = useContext(UserContext)["currUser"];
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
      <div className="ui tiny form">
        <div className="two fields">
          <div className="field">
            <label>Name</label>
            <input
              placeholder="Must only contain letters"
              type="text"
              value={newName}
              onChange={newNameHandle}
            />
          </div>
        </div>
        <div className="ui submit basic button" onClick={onClickHandle}>
          Sign Up
        </div>
      </div>
    </div>
  );
};
