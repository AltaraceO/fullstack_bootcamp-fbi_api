import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

export const AddSearch = ({ state, year, crime }) => {
  const [current, setCurrent] = useContext(UserContext)["currUser"];

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
    console.log(updatedUser);
  };

  if (state && year && crime && current) {
    updateUserSearch();
  }

  return (
    <div>
      <div></div>
    </div>
  );
};
