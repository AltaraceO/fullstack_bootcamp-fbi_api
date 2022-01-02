import React, { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

export const AddSearch = ({ state, year, crime }) => {
  const [current, setCurrent] = useContext(UserContext)["currUser"];

  useEffect(() => {
    const updateUserSearch = async () => {
      const newSearch = {
        state: state,
        crime: crime,
        year: year,
      };
      const updatedUser = {
        user: current.user,
        id: current.id,
        search: [...current.search, newSearch],
      };
      await axios.put(
        `https://61d0790ccd2ee50017cc9887.mockapi.io/fbi/users/${current.id}`,
        updatedUser
      );
      setCurrent(updatedUser);
    };

    if (state && year && crime && current) {
      updateUserSearch();
    }
  }, [state, year, crime, setCurrent]);

  return (
    <div>
      <div></div>
    </div>
  );
};
