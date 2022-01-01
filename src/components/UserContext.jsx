import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState("");
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const getInfo = async () => {
      const { data } = await axios.get(
        "https://61d0790ccd2ee50017cc9887.mockapi.io/fbi/users"
      );
      setUser(data);
    };

    if (!user) {
      getInfo();
    }
  }, [user]);
  console.log(current);
  return (
    <UserContext.Provider
      value={{ user: [user, setUser], currUser: [current, setCurrent] }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
