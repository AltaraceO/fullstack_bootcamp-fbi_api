import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../../UserContext";
import "../../signUp/signstyle.css";

export const NewUser = () => {
  const [user] = useContext(UserContext)["user"];
  const [current] = useContext(UserContext)["currUser"];
  const [newName, setNewName] = useState("");
  const [alert, setAlert] = useState("");
  const [success, setSuccess] = useState(false);

  const newNameHandle = (e) => {
    setAlert("");
    setNewName(e.target.value);
  };

  const successAlert = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 4000);
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
    successAlert();
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
      <hr />
      <br />
      <div>
        <h4>To sign up, simply enter your name</h4>
      </div>
      <div className="existing-user">
        <input
          className="main-input"
          type="text"
          placeholder="Must only contain letters"
          value={newName}
          onChange={newNameHandle}
        />

        <button
          className="main-button"
          onClick={onClickHandle}
          style={{ height: 33 }}
          disabled={current ? true : false}
        >
          Sign Up
        </button>

        {alert && <div className="alert">{alert}</div>}
        {success && (
          <div className="success">Success! Log in with your user name</div>
        )}
      </div>
    </div>
  );
};
