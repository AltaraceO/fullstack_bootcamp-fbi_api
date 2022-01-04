import { allStates } from "../../../data";
import React, { useState } from "react";
import { UpdateHistory } from "../UpdateHistory/UpdateHistory";

const getCrimeStr = (item) => {
  const newItem = item.split("_").join(" ");
  return newItem;
};

const getStateName = (state) => {
  let fullName = "";

  allStates.forEach((el) => {
    if (el.category === state) {
      fullName = el.name;
    }
  });
  return fullName;
};

export const DisplayHistory = ({ search, id }) => {
  const [crime, setCrime] = useState(getCrimeStr(search.crime));
  const [stateOne, setStateOne] = useState(getStateName(search.stateOne));
  const [stateTwo, setStateTwo] = useState(getStateName(search.stateTwo));
  const [year, setYear] = useState(search.year);
  const [visibility, setVisibility] = useState(false);

  const changeVis = () => {
    setVisibility((pervVisibility) => !visibility);
  };

  const displayPrevSearch = (
    <div>
      <div className="ui horizontal segments">
        <div className="ui  segment">
          <p>Crime category: {crime}</p>
        </div>
        <div className="ui segment">
          <p>First State: {stateOne}</p>
        </div>
        <div className="ui segment">
          <p>Second State: {stateTwo}</p>
        </div>
        <div className="ui segment">
          <p>Year: {year}</p>
        </div>
      </div>
      <button className="main-button" onClick={changeVis}>
        Update
      </button>
    </div>
  );

  if (visibility)
    return (
      <UpdateHistory
        id={id}
        changeVis={changeVis}
        setMainCrime={setCrime}
        setMainYear={setYear}
        setMainStateOne={setStateOne}
        setMainStateTwo={setStateTwo}
        stateFunc={getStateName}
        crimeFunc={getCrimeStr}
      />
    );
  return (
    <div>
      <div>{displayPrevSearch}</div>
    </div>
  );
};
