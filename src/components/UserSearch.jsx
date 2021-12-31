import React, { useState } from "react";
import { FbiCall } from "./FbiCall";

export const UserSearch = () => {
  const [stateOne, setStateOne] = useState("");
  const [stateTwo, setStateTwo] = useState("");

  const onHandleChange = (e) => {
    if (e.target.name === "One") {
      setStateOne(e.target.value);
    } else {
      setStateTwo(e.target.value);
    }
  };

  return (
    <div className="main-test">
      <div>
        <div className="ui input">
          <input
            onChange={onHandleChange}
            value={stateOne}
            name="One"
            type="text"
            placeholder="Search..."
          />
        </div>
        <FbiCall state={stateOne} />
      </div>
      <div>
        <div className="ui input">
          <input
            onChange={onHandleChange}
            value={stateTwo}
            name="Two"
            type="text"
            placeholder="Search..."
          />
        </div>
        <FbiCall state={stateTwo} />
      </div>
    </div>
  );
};
