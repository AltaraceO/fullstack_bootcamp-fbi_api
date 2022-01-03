import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

export const AddSearch = ({ stateOne, stateTwo, year, crime }) => {
  const [current, setCurrent] = useContext(UserContext)["currUser"];
  const [tempUserObj, setTempUserObj] = useState("");
  const [tempId, setTempId] = useState("");

  const createRand = () => {
    const random = Math.floor(Math.random() * 1000000000);
    return random;
  };

  useEffect(() => {
    if (!tempUserObj) {
      const updateLocalStates = () => {
        const newSearch = {
          id: createRand(),
          stateOne: stateOne,
          stateTwo: stateTwo,
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

      if (stateOne && stateTwo && year && crime) {
        updateLocalStates();
      }
    }
  }, [stateOne, stateTwo, year, crime, current, tempUserObj]);

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
