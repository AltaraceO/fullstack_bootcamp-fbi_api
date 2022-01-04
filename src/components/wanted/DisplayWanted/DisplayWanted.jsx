import React from "react";
import { WantedImage } from "../WantedImages/WantedImage";
import "./wanted-cards.css";

export const DisplayWanted = ({ data }) => {
  const display = data.map((e) => {
    return (
      <div className="main-card" key={e.uid}>
        <div>
          {" "}
          <strong> {e.title}</strong>
        </div>
        <div>{e.subjects}</div>
        <WantedImage
          smallImg={e.images[0].thumb}
          largeImg={e.images[0].original}
        />

        <a href={e.url} target="_blank" rel="noreferrer">
          Find out more
        </a>
      </div>
    );
  });
  return <div className="wanted-container">{data ? display : ""}</div>;
};
