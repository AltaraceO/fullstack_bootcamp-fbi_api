import React, { useState, useContext } from "react";
import { FbiCall } from "../FbiCall/FbiCall";
import { Dropdown } from "../Dropdown/Dropdown";
import { PreviousSearches } from "../PreviousSearches/PreviousSearches";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import { YearInput } from "../YearInput/YearInput";
import { AddSearch } from "../AddSearch/AddSearch";
import "./user-search.css";

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
      {/* <div className="ui large form"> */}
      <div className="state-selections">
        <div className="each-state">
          <label className="state-lable">First State</label>
          <Dropdown func={onHandleChange} option="one" item={true} />
        </div>
        <div className="each-state">
          <label className="state-lable">Second State</label>
          <Dropdown func={onHandleChange} option="two" item={true} />
        </div>
      </div>

      <div className="category-selections">
        <div>
          <label className="state-lable">Crime Category</label>
          <Dropdown func={onHandleChange} option="three" item={false} />
        </div>

        <div>
          <label className="state-lable">Year</label>
          <YearInput yearMain={setYear} />
        </div>
      </div>
      <br />

      {current ? (
        <button
          disabled={checkFields() ? false : true}
          className="main-button"
          style={{ marginLeft: 20 }}
          onClick={onSearchClick}
        >
          View Results
        </button>
      ) : (
        <div>
          <Link className="main-button" to="/signup/">
            Sign up or Log in
          </Link>
        </div>
      )}

      {search && current ? (
        <div className="display-stats">
          <div className="one-call">
            <FbiCall state={stateOne} crime={crime} year={year} />
          </div>
          <div className="one-call">
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
      <br />
      <hr />
      {current && <PreviousSearches />}
      {/* </div> */}
    </div>
  );
};
