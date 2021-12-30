import React from "react";
import "./styles/App.css";
import { Main } from "./components/Main";
import { useState } from "react/cjs/react.development";

function App() {
  const [stateOne, setStateOne] = useState("");
  const [stateTwo, setStateTwo] = useState("");

  const onHandleChange = (e) => {
    if (e.target.name === "One") {
      setStateOne(e.target.value);
    } else {
      setStateTwo(e.target.value);
    }
  };
  // console.log(stateOne);
  // console.log(stateTwo);
  return (
    <div className="main-test">
      <div>
        <input
          onChange={onHandleChange}
          type="text"
          value={stateOne}
          name="One"
        />
        <Main state={stateOne} />
      </div>
      <div>
        <input
          onChange={onHandleChange}
          type="text"
          value={stateTwo}
          name="Two"
        />
        <Main state={stateTwo} />
      </div>
    </div>
  );
}

export default App;
