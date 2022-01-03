import React, { useState } from "react";
import { UpdateHistory } from "./UpdateHistory";
// import { UserContext } from "./UserContext";

export const DisplayHistory = ({ search, id }) => {
  const [crime, setCrime] = useState(search.crime);
  const [state, setState] = useState(search.state);
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
          <p>State: {state}</p>
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
        setMainState={setState}
      />
    );
  return (
    <div>
      <div>{displayPrevSearch}</div>
    </div>
  );
};
