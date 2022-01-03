import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { DisplayHistory } from "./DisplayHistory";

export const PreviousSearches = () => {
  const [current] = useContext(UserContext)["currUser"];

  // const createRand = () => {
  //   const random = Math.floor(Math.random() * 1000000000);
  //   return random;
  // };

  const displayPrevSearch = current.search.map((search) => {
    return <DisplayHistory search={search} key={search.id} id={search.id} />;
  });

  return (
    <div>
      <div>{current && displayPrevSearch}</div>
    </div>
  );
};
