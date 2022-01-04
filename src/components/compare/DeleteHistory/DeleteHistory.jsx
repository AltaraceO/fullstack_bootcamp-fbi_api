import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../UserContext";

export const DeleteHistory = ({ id }) => {
  const [current, setCurrent] = useContext(UserContext)["currUser"];
  const [tempUserObj, setTempUserObj] = useState("");
  const [tempId, setTempId] = useState("");

  const newSearchesArr = () => {
    const newArr = current.search.filter((el) => el.id !== id);
    const updatedUser = {
      user: current.user,
      id: current.id,
      search: newArr,
    };
    setTempUserObj(updatedUser);
    setTempId(current.id);
  };

  useEffect(() => {
    const controller = new AbortController();
    const updateUserSearch = async () => {
      try {
        await axios.put(
          `https://61d0790ccd2ee50017cc9887.mockapi.io/fbi/users/${tempId}`,
          tempUserObj
        );
        setCurrent(tempUserObj);
      } catch (err) {
        console.log(err);
      }
    };

    if (tempId && tempUserObj) {
      updateUserSearch();
    }
    return () => {
      controller.abort();
    };
  }, [setCurrent, tempUserObj, tempId]);

  return (
    <div className="inline">
      <button className="main-button" onClick={newSearchesArr}>
        Delete Search
      </button>
    </div>
  );
};
