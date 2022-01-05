import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import { DisplayHistory } from "../DisplayHistory/DisplayHistory";
import "./prev-search.css";

export const PreviousSearches = () => {
  const [current] = useContext(UserContext)["currUser"];

  const displayPrevSearch = current.search.map((search) => {
    return <DisplayHistory search={search} key={search.id} id={search.id} />;
  });

  return <div className="all-histories">{current && displayPrevSearch}</div>;
};
