import React, { useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { UserSearch } from "./components/UserSearch";
import { Main } from "./components/Main";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <div>
            <NavBar />
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/search/">
              <UserSearch />
            </Route>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
