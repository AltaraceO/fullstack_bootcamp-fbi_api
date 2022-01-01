import React, { useState } from "react";
import { FbiCall } from "./FbiCall";
import { Dropdown } from "./Dropdown";

export const UserSearch = () => {
  const [stateOne, setStateOne] = useState("");
  const [stateTwo, setStateTwo] = useState("");
  const [crime, setCrime] = useState("");
  const [year, setYear] = useState("");
  const [search, setSearch] = useState(false);

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
    setYear(e.target.value);
  };

  const checkFields = () => {
    if (stateOne && stateTwo && crime && year) {
      return true;
    }
  };

  const onSearchClick = () => {
    setSearch(!search);
  };

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
        <div
          className={`ui  ${!checkFields() && "disabled"} basic button`}
          onClick={onSearchClick}
        >
          Submit
        </div>
        {search && (
          <div className="ui horizontal segments">
            <div className="ui segment">
              <FbiCall state={stateOne} crime={crime} year={year} />
            </div>
            <div className="ui segment">
              <FbiCall state={stateTwo} crime={crime} year={year} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
