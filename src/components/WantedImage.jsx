import React, { useState } from "react";

export const WantedImage = ({ smallImg, largeImg }) => {
  const [open, setOpen] = useState(false);

  const openClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <img src={smallImg} onClick={openClick} alt="smallFace" />
      {open && (
        <dialog style={{ position: "absolute" }} open onClick={openClick}>
          <img src={largeImg} onClick={openClick} alt="largeFace" />
        </dialog>
      )}
    </div>
  );
};
