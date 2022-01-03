import axios from "axios";
import React, { useEffect, useState } from "react";
import { DisplayWanted } from "./DisplayWanted";

export const MostWanted = () => {
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
  return <div>{wantedData && <DisplayWanted data={wantedData} />}</div>;
};
