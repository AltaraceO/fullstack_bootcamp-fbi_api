import "./styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { UserSearch } from "./components/UserSearch";
import { Main } from "./components/Main";
import { SignUp } from "./components/SignUp";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div>
      <div className="entire-site">
        <BrowserRouter>
          <UserProvider>
            <div>
              <div className="nav-bar">
                <NavBar />
              </div>
              <div className="ui divider"></div>
              <div className="under-nav">
                <Route exact path="/">
                  <Main />
                </Route>
                <Route exact path="/search/">
                  <UserSearch />
                </Route>

                <Route exact path="/signup/">
                  <SignUp />
                </Route>
              </div>
            </div>
          </UserProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
