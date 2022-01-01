import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getInfo = async () => {
      const { data } = await axios.get(
        "https://61d0790ccd2ee50017cc9887.mockapi.io/fbi/users"
      );
      console.log(data);
      //   setUser(userData);
    };

    if (true) {
      getInfo();
    }
  }, [user]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
