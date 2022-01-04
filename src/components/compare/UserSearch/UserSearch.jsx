import React, { useState, useContext } from "react";
import { FbiCall } from "../FbiCall/FbiCall";
import { Dropdown } from "../Dropdown/Dropdown";
import { PreviousSearches } from "../PreviousSearches/PreviousSearches";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import { YearInput } from "../YearInput/YearInput";
import { AddSearch } from "../AddSearch/AddSearch";

export const UserSearch = () => {
  const [current] = useContext(UserContext)["currUser"];
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
            <YearInput yearMain={setYear} />
          </div>
        </div>

        {current ? (
          <div
            className={`ui  ${!checkFields() && "disabled"} basic button`}
            onClick={onSearchClick}
          >
            View Results
          </div>
        ) : (
          <Link className="ui basic button" to="/signup/">
            Sign up or Log in
          </Link>
        )}

        {search && current ? (
          <div className="ui horizontal segments">
            <div className="ui segment">
              <FbiCall state={stateOne} crime={crime} year={year} />
            </div>
            <div className="ui segment">
              <FbiCall state={stateTwo} crime={crime} year={year} />
            </div>
            <AddSearch
              crime={crime}
              year={year}
              stateOne={stateOne}
              stateTwo={stateTwo}
            />
          </div>
        ) : (
          ""
        )}
        <div className="ui divider"></div>
        {current && <PreviousSearches />}
      </div>
    </div>
  );
};
