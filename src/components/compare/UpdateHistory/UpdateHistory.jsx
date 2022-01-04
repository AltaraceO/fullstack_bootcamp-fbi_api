import React, { useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { YearInput } from "../YearInput/YearInput";
import { DeleteHistory } from "../DeleteHistory/DeleteHistory";
import "./updateHistory.css";

export const UpdateHistory = ({
  id,
  changeVis,
  setMainYear,
  setMainCrime,
  setMainStateOne,
  setMainStateTwo,
  stateFunc,
  crimeFunc,
}) => {
  const [crime, setCrime] = useState("");
  const [stateOne, setStateOne] = useState("");
  const [stateTwo, setStateTwo] = useState("");
  const [year, setYear] = useState("");
  const [alert, setAlert] = useState(false);

  const onHandleChange = (e, option) => {
    setAlert(false);

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

  const updateClick = () => {
    if (crime && stateOne && stateTwo && year) {
      setMainYear(year);
      setMainCrime(crimeFunc(crime));
      setMainStateOne(stateFunc(stateOne));
      setMainStateTwo(stateFunc(stateTwo));
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
          First State
          <Dropdown func={onHandleChange} option="one" item={true} />
        </div>
        <div className="ui segment">
          Second State
          <Dropdown func={onHandleChange} option="two" item={true} />
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
      <div>
        <button className="main-button" onClick={cancelClick}>
          Cancel
        </button>
        <button className="main-button" onClick={updateClick}>
          Change
        </button>

        <DeleteHistory className="main-button" id={id} />
      </div>
    </div>
  );

  return <div>{displayUpdate}</div>;
};
