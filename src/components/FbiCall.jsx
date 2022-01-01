import React, { useState, useEffect } from "react";
import axios from "axios";
import { RenderStatistics } from "./RenderStatistics";

export const FbiCall = ({ state, crime, year }) => {
  const [data, setData] = useState("");
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    const getFbi = async () => {
      setSpinner(true);
      const gotData = await axios.get(
        `https://api.usa.gov/crime/fbi/sapi/api/estimates/states/${state}/${year}/${year}?API_KEY=LVDJRnZLVg8RcBA7YAtbkgqrPr1RckBTcZQdOOa2`
      );
      // console.log(gotData.data.results[0]);
      setData(gotData.data.results[0]);
      setSpinner(false);
    };

    if (state.length > 1) {
      getFbi();
    }
  }, [state, year]);

  return (
    <div>
      <div>
        {spinner ? (
          <div className="ui active centered inline loader"></div>
        ) : (
          <RenderStatistics data={data} crime={crime} year={year} />
        )}
      </div>
    </div>
  );
};
