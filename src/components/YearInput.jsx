import React, { useState } from "react";

export const YearInput = ({ yearMain }) => {
  const [year, setYear] = useState("");
  const [alert, setAlert] = useState(false);

  const onInputChange = (e) => {
    setYear(e.target.value);
    setTimeout(() => {
      if (e.target.value < 1980 || e.target.value > 2020) {
        setAlert(true);
        yearMain("");
      } else {
        setAlert(false);
        yearMain(e.target.value);
      }
    }, 500);
  };

  return (
    <div>
      <label>Year</label>

      <input type="number" onChange={onInputChange} value={year} />
      {alert && <div className="alert">Not in range (1980-2020)</div>}
    </div>
  );
};
