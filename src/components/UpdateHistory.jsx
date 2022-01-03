import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import { YearInput } from "./YearInput";

export const UpdateHistory = ({
  changeVis,
  setMainYear,
  setMainCrime,
  setMainState,
}) => {
  const [crime, setCrime] = useState("");
  const [state, setState] = useState("");
  const [year, setYear] = useState("");
  const [alert, setAlert] = useState(false);

  const onHandleChange = (e, option) => {
    setAlert(false);
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

  const updateClick = () => {
    if (crime && state && year) {
      setMainYear(year);
      setMainCrime(crime);
      setMainState(state);
      changeVis();
    } else {
      setAlert(true);
    }
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
          <YearInput yearMain={setYear} />
        </div>
      </div>
      {alert && (
        <div className="alert">
          All fields must have a value before changing
        </div>
      )}
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
