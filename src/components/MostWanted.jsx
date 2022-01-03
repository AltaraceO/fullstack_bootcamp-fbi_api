import axios from "axios";
import { UserContext } from "./UserContext";
import React, { useEffect, useState, useContext } from "react";
import { DisplayWanted } from "./DisplayWanted";
import { Link } from "react-router-dom";

export const MostWanted = () => {
  const [current] = useContext(UserContext)["currUser"];
  const [wantedData, setWantedData] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const getWanted = async () => {
      try {
        const data = await axios.get("https://api.fbi.gov/wanted/v1/list");
        setWantedData(data.data.items);
      } catch (err) {
        console.log(err);
      }
    };
    if (!wantedData) {
      getWanted();
    }
    return () => {
      controller.abort();
    };
  }, [wantedData]);
  console.log(wantedData);
  return (
    <div>
      {wantedData && current ? (
        <DisplayWanted data={wantedData} />
      ) : (
        <Link className="ui basic button" to="/signup/">
          Sign up or Log in
        </Link>
      )}
    </div>
  );
};
