import React, { useContext } from "react";

import { UserContext } from "./UserContext";
// import axios from "axios";

export const PreviousSearches = () => {
  const [current] = useContext(UserContext)["currUser"];

  const createRand = () => {
    const random = Math.floor(Math.random() * 1000000000);
    return random;
  };
  // useEffect(() => {
  const displayPrevSearch = () => {
    return current.search.map((search) => {
      return (
        <div className="ui horizontal segments" key={createRand()}>
          <div className="ui  segment">
            <p>Crime category: {search.crime}</p>
          </div>
          <div className="ui segment">
            <p>State: {search.state}</p>
          </div>
          <div className="ui segment">
            <p>Year: {search.year}</p>
          </div>
        </div>
      );
    });
  };
  // }, []);
  return (
    <div>
      <div>
        {current && (
          <div className="ui segments">
            <div className="ui segment">
              <h5 className="ui header">Previous Searches:</h5>
              {displayPrevSearch()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
