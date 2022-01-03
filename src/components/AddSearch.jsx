import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

export const AddSearch = ({ state, year, crime }) => {
  const [current, setCurrent] = useContext(UserContext)["currUser"];
  const [tempUserObj, setTempUserObj] = useState("");
  const [tempId, setTempId] = useState("");

  const createRand = () => {
    const random = Math.floor(Math.random() * 1000000000);
    return random;
  };

  useEffect(() => {
    const updateLocalStates = () => {
      const newSearch = {
        id: createRand(),
        state: state,
        crime: crime,
        year: year,
      };
      const updatedUser = {
        user: current.user,
        id: current.id,
        search: [...current.search, newSearch],
      };

      setTempUserObj(updatedUser);
      setTempId(current.id);
    };

    if (state && year && crime) {
      updateLocalStates();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, year, crime]);

  useEffect(() => {
    const updateUserSearch = async () => {
      await axios.put(
        `https://61d0790ccd2ee50017cc9887.mockapi.io/fbi/users/${tempId}`,
        tempUserObj
      );
      setCurrent(tempUserObj);
    };

    if (tempId && tempUserObj) {
      updateUserSearch();
    }
  }, [setCurrent, tempUserObj, tempId]);

  return (
    <div>
      <div></div>
    </div>
  );
};
