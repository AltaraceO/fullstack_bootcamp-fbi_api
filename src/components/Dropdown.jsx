import React from "react";
import allStates from "../data";

export const Dropdown = () => {
  const allOptions = allStates.map((state) => {
    return (
      <option key={state.abbreviation} value={state.abbreviation}>
        {state.name}
      </option>
    );
  });

  const onHandleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <select className="ui dropdown myDropdown" onChange={onHandleChange}>
        <option value="">State</option>
        {allOptions}
      </select>
    </div>
  );
};
