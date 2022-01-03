import React, { useState } from "react";
import { Dropdown } from "./Dropdown";

export const UpdateHistory = ({
  changeVis,
  setMainYear,
  setMainCrime,
  setMainState,
}) => {
  const [crime, setCrime] = useState("");
  const [state, setState] = useState("");
  const [year, setYear] = useState("");

  const onHandleChange = (e, option) => {
    console.log(e);
    switch (option) {
      case "one":
        setState(e);
        break;
      case "three":
        setCrime(e);
        break;
      default:
        console.log("no matches");
    }
  };

  const onInputChange = (e) => {
    setYear(e.target.value);
  };

  const updateClick = () => {
    setMainYear(year);
    setMainCrime(crime);
    setMainState(state);
    changeVis();
  };

  const cancelClick = () => {
    changeVis();
  };

  const displayUpdate = (
    <div>
      <div className="ui horizontal segments">
        <div className="ui  segment">
          Crime
          <Dropdown func={onHandleChange} option="three" item={false} />
        </div>
        <div className="ui segment">
          State
          <Dropdown func={onHandleChange} option="one" item={true} />
        </div>
        <div className="ui segment">
          Year
          <input type="text" onChange={onInputChange} value={year} />
        </div>
      </div>
      <button className="main-button" onClick={cancelClick}>
        Cancel
      </button>
      <button className="main-button" onClick={updateClick}>
        Change
      </button>
    </div>
  );

  return <div>{displayUpdate}</div>;
};
