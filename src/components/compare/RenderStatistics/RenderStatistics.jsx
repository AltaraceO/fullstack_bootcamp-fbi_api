import React, { useState, useEffect } from "react";
import { allStates } from "../../../data";
import "./render-stat.css";

export const RenderStatistics = ({ data, crime, year }) => {
  const [stateName, setStateName] = useState("");
  const [crimeString, setCrimeString] = useState("");
  const [crimeNumber, setCrimeNumber] = useState("");
  const [crimeNumberStr, setCrimeNumberStr] = useState("");
  const [population, setPopulation] = useState("");
  const [percentage, setPercentage] = useState("");

  useEffect(() => {
    const populateStates = () => {
      for (let item in data) {
        if (item === crime) {
          getCrimeStr(item);
          writeCrimeNumberStr(data[item]);
          setCrimeNumber(data[item]);
        } else if (item === "population") {
          setPopulation(data[item]);
        } else if (item === "state_abbr") {
          getStateName(data[item]);
        }
      }
    };
    if (data) {
      populateStates();
    }
  }, [crime, data]);

  useEffect(() => {
    const calcPercentage = () => {
      if (crimeNumber && population) {
        const perc = (crimeNumber / population) * 100000;
        setPercentage(perc.toFixed(2));
      } else {
        setPercentage("not yet");
      }
    };
    if (population && crimeNumber) {
      calcPercentage();
    }
  }, [population, crimeNumber]);

  const getCrimeStr = (item) => {
    const newItem = item.split("_").join(" ");
    setCrimeString(newItem);
  };

  const writeCrimeNumberStr = (num) => {
    const newNum = num.toLocaleString();
    setCrimeNumberStr(newNum);
  };

  const getStateName = (state) => {
    allStates.forEach((el) => {
      if (el.category === state) {
        setStateName(el.name);
      }
    });
  };

  return (
    <div>
      {data && (
        <div>
          <div className="state-name">{stateName}</div>
          <div className="info">
            <div className="outline">
              <span className="dry-num"> {crimeNumberStr}</span> {crimeString}s
              in {year}.
            </div>

            <div className="calc">{percentage} </div>
            <span> per 100,000 population</span>
          </div>
        </div>
      )}
    </div>
  );
};
