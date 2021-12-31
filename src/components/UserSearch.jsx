import React, { useState } from "react";
import { FbiCall } from "./FbiCall";
import { Dropdown } from "./Dropdown";

export const UserSearch = () => {
  const [stateOne, setStateOne] = useState("");
  const [stateTwo, setStateTwo] = useState("");
  const [crime, setCrime] = useState("");
  const [year, setYear] = useState("");

  const onHandleChange = (e, option) => {
    switch (option) {
      case "one":
        setStateOne(e);

        break;
      case "two":
        setStateTwo(e);

        break;
      case "three":
        setCrime(e);
        break;
      default:
        console.log("no matches");
    }
  };

  const onInputChange = (e) => {
    console.log(e.target.value);
    setYear(e.target.value);
  };

  const checkFields = () => {
    if (stateOne && stateTwo && crime) {
      return true;
    }
  };

  // console.log(typeof checkFields());
  return (
    <div>
      <div className="ui large form">
        <div className="two fields">
          <div className="field">
            <label>First State</label>
            <Dropdown func={onHandleChange} option="one" item={true} />
          </div>
          <div className="field">
            <label>Second State</label>
            <Dropdown func={onHandleChange} option="two" item={true} />
          </div>
        </div>
        <div className="two fields">
          <div className="field">
            <label>Crime Category</label>
            <Dropdown func={onHandleChange} option="three" item={false} />
          </div>
          <div className="field">
            <label>Year</label>
            <input type="text" onChange={onInputChange} value={year} />
          </div>
        </div>
        <div className={`ui  ${!checkFields() && "disabled"} basic button`}>
          Submit
        </div>
        <FbiCall state={stateTwo} />
        <FbiCall state={stateOne} />
      </div>
    </div>
  );
};
