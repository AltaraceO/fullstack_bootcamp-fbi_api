import React from "react";
import { WantedImage } from "./WantedImage";

export const DisplayWanted = ({ data }) => {
  const display = data.map((e) => {
    return (
      <div className="red-box" key={e.uid}>
        <h2>{e.title}</h2>
        <h4>{e.subjects}</h4>
        {/* {e.images.map((el) => {
          if(!open){
            return 
          }
          return <img key={count++} src={el.thumb} alt="img" onClick={openClick}/>;
        })} */}
        <WantedImage
          smallImg={e.images[0].thumb}
          largeImg={e.images[0].original}
        />
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
