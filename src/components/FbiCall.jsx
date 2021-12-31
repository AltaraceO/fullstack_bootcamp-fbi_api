import React, { useState, useEffect } from "react";
import axios from "axios";

const crime = "burglary";
const year = 2020;

export const FbiCall = ({ state }) => {
  const [data, setData] = useState("");
  useEffect(() => {
    const getFbi = async () => {
      const gotData = await axios.get(
        `https://api.usa.gov/crime/fbi/sapi/api/estimates/states/${state}/${year}/${year}?API_KEY=LVDJRnZLVg8RcBA7YAtbkgqrPr1RckBTcZQdOOa2`
      );
      setData(gotData.data.results);
    };

    if (state.length > 1) {
      getFbi();
    }
  }, [state]);

  const renderItems = () => {
    const newArr = [];
    for (let item in data[0]) {
      if (item === crime) {
        newArr.push(
          <div key={data[0][item]}>
            {item} {data[0][item]}
          </div>
        );
      }
    }

    return newArr.map((item) => {
      return item;
    });
  };
  // console.log(data);
  return (
    <div>
      <div>{renderItems()}</div>
    </div>
  );
};
