import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import { DisplayHistory } from "../DisplayHistory/DisplayHistory";

export const PreviousSearches = () => {
  const [current] = useContext(UserContext)["currUser"];

  const displayPrevSearch = current.search.map((search) => {
    return <DisplayHistory search={search} key={search.id} id={search.id} />;
  });

  return (
    <div>
      <div>{current && displayPrevSearch}</div>
    </div>
  );
};
