import React from "react";

export const DisplayWanted = ({ data }) => {
  let count = 0;
  const display = data.map((e) => {
    return (
      <div className="red-box" key={e.uid}>
        <h2>{e.title}</h2>
        <h4>{e.subjects}</h4>
        {e.images.map((el) => {
          return <img key={count++} src={el.thumb} alt="" />;
        })}
        <div className="red-blue">{e.description}</div>
        between
        <div className="red-blue"> {e.reward_text}</div>
        next
        <a href={e.url}>link</a>
      </div>
    );
  });
  return <div>{data ? display : ""}</div>;
};
