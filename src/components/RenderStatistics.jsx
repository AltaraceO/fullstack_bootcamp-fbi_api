import React from "react";

export const RenderStatistics = ({ data, crime }) => {
  const renderItems = () => {
    console.log(data);
    const newArr = [];
    for (let item in data[0]) {
      if (item === crime) {
        newArr.push(
          <div className="ui statistics" key={data[0][item]}>
            <div className="statistic">
              <div className="value">{data[0].state_abbr}</div>
            </div>
            <div className="statistic">
              <div className="value">{data[0][item]}</div>
              <div className="label">{item}s</div>
            </div>
          </div>
        );
      }
    }

    return newArr.map((item) => {
      return item;
    });
  };
  return <div>{renderItems()}</div>;
};
