import React, { useState, useEffect } from "react";
import axios from "axios";

const state = "va";
const year = 2018;

export const Main = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const getFbi = async () => {
      const gotData = await axios.get(
        `https://api.usa.gov/crime/fbi/sapi/api/estimates/states/${state}/${year}/${year}?API_KEY=LVDJRnZLVg8RcBA7YAtbkgqrPr1RckBTcZQdOOa2`
      );
      setData(gotData.data.results);
    };
    getFbi();
  }, []);

  const renderItems = () => {
    console.log(data);
    const newArr = [];

    for (let item in data[0]) {
      newArr.push(
        <div key={data[0][item]}>
          {item} {data[0][item]}
        </div>
      );
    }

    return newArr.map((item) => {
      return item;
    });
  };

  return (
    <div>
      <div>{renderItems()}</div>
    </div>
  );
};
