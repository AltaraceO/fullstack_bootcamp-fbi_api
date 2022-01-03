import React, { useState } from "react";

export const WantedImage = ({ smallImg, largeImg }) => {
  const [open, setOpen] = useState(false);

  const openClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <img
        className="small"
        src={smallImg}
        onClick={openClick}
        alt="smallFace"
      />
      {open && (
        <dialog
          className="dialog"
          style={{ position: "absolute" }}
          open
          onClick={openClick}
        >
          <img
            className="image"
            src={largeImg}
            onClick={openClick}
            alt="largeFace"
          />
        </dialog>
      )}
    </div>
  );
};
