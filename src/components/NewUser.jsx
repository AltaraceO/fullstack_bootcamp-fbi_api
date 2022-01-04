import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

export const NewUser = () => {
  const [user] = useContext(UserContext)["user"];
  const [current] = useContext(UserContext)["currUser"];
  const [newName, setNewName] = useState("");
  const [alert, setAlert] = useState("");

  const newNameHandle = (e) => {
    setAlert("");
    setNewName(e.target.value);
  };

  const updateUsers = async () => {
    const newUser = {
      user: newName,
      search: [],
    };
    try {
      await axios.post(
        "https://61d0790ccd2ee50017cc9887.mockapi.io/fbi/users",
        newUser
      );
    } catch (err) {
      console.log(err);
    }
    setNewName("");
  };

  const onClickHandle = () => {
    setAlert("");
    const lower = newName.toLowerCase();
    const userCheck = user.find((el) => {
      return el.user.toLowerCase() === lower;
    });
    if (userCheck) {
      setAlert("This user-name already exists");
    } else if (/[^a-zA-Z]/.test(lower) || !newName) {
      setAlert("Name must only inclued letters");
    } else {
      updateUsers();
    }
  };

  return (
    <div>
      <div className="ui divider"></div>

      <div className="ui form">
        <div className="existing-user">
          <p>To sign up, simply enter your name</p>
        </div>
        <div className="inline field existing-user">
          <input
            type="text"
            placeholder="Must only contain letters"
            value={newName}
            onChange={newNameHandle}
          />

          <div
            className={`ui submit  ${current && "disabled"} basic button`}
            onClick={onClickHandle}
          >
            Sign Up
          </div>
        </div>
        {alert && <div className="alert">{alert}</div>}
      </div>
    </div>
  );
};
