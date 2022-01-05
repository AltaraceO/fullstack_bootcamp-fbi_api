import axios from "axios";
import { UserContext } from "../../UserContext";
import React, { useEffect, useState, useContext } from "react";
import { DisplayWanted } from "../DisplayWanted/DisplayWanted";
import { Link } from "react-router-dom";
import { PageNumbers } from "../PageNumbers/PageNumbers";
import "../DisplayWanted/wanted-cards.css";

export const MostWanted = () => {
  const [current] = useContext(UserContext)["currUser"];
  const [wantedData, setWantedData] = useState(null);
  const [pg, setPg] = useState("4");
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const getWanted = async () => {
      try {
        const data = await axios.get("https://api.fbi.gov/wanted/v1/list", {
          params: {
            page: pg,
          },
        });
        setWantedData(data.data.items);
        setCheck(false);
      } catch (err) {
        console.log(err);
      }
    };
    if (check) {
      getWanted();
    }

    return () => {
      controller.abort();
    };
  }, [wantedData, pg, check]);

  const changePage = (num) => {
    setPg(num);
    setCheck(true);
  };

  return (
    <div>
      {current && <PageNumbers changePage={changePage} />}

      <div className="wanted-container">
        {wantedData && current ? (
          <div className="wanted-container">
            <DisplayWanted data={wantedData} />
          </div>
        ) : current ? (
          ""
        ) : (
          <Link className="main-button" to="/signup/">
            Sign up or Log in
          </Link>
        )}
      </div>
    </div>
  );
};
