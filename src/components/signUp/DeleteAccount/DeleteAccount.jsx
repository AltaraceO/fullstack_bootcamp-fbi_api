import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";

export const DeleteAccount = ({ resetAlert }) => {
  const [current, setCurrent] = useContext(UserContext)["currUser"];

  const deleteUser = async () => {
    try {
      await axios.delete(
        `https://61d0790ccd2ee50017cc9887.mockapi.io/fbi/users/${current.id}`
      );
      setCurrent("");
      resetAlert();
    } catch (err) {
      console.log(err);
    }
  };

  const cancelDelete = () => {
    resetAlert();
  };

  return (
    <div>
      <div className="alert">
        <div>All search history will be deleted. Are you sure? </div>
        <button onClick={deleteUser} className="main-button red">
          Delete
        </button>
        <button onClick={cancelDelete} className="main-button">
          Cancel
        </button>
      </div>
    </div>
  );
};
