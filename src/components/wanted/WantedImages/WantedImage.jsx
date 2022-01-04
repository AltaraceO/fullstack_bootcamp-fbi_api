import React, { useState } from "react";
import "../wanted.css";

export const WantedImage = ({ smallImg, largeImg }) => {
  const [open, setOpen] = useState(false);

  const openClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      {/* <div className="large-img">text</div> */}
      <img src={smallImg} onClick={openClick} alt="thumbImage" />
      {open && (
        <dialog
          // style={{ position: "absolute" }}
          className="large-img"
          open
          onClick={openClick}
        >
          <img src={largeImg} onClick={openClick} alt="fullImage" />
        </dialog>
      )}
    </div>
  );
};
