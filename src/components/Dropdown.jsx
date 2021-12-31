import React from "react";
import { allStates, crimeCat } from "../data";

export const Dropdown = ({ func, option, item }) => {
  const searchItem = item ? allStates : crimeCat;
  const allOptions = searchItem.map((state) => {
    return (
      <option key={state.category} value={state.category}>
        {state.name}
      </option>
    );
  });

  const onHandleChange = (e) => {
    func(e.target.value, option);
  };

  return (
    <div>
      <select className="ui dropdown myDropdown" onChange={onHandleChange}>
        <option value="">Select</option>
        {allOptions}
      </select>
    </div>
  );
};
