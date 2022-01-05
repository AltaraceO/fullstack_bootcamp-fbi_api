import { allStates } from "../../../data";
import React, { useState } from "react";
import { UpdateHistory } from "../UpdateHistory/UpdateHistory";
import "./display-history.css";
import { Table } from "../Table/Table";

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
    <>
      <div className="history-card">
        <Table
          crime={crime}
          stateOne={stateOne}
          stateTwo={stateTwo}
          year={year}
        />

        <button className="main-button" onClick={changeVis}>
          Update
        </button>
      </div>
    </>
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
    <>
      <div>{displayPrevSearch}</div>
    </>
  );
};
