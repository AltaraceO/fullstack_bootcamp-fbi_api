import "./styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { NavBar } from "./components/home/NavBar/NavBar";
import { UserSearch } from "./components/compare/UserSearch/UserSearch";
import { Main } from "./components/home/Main/Main";
import { SignUp } from "./components/signUp/SignUp/SignUp";
import { UserProvider } from "./components/UserContext";
import { MostWanted } from "./components/wanted/MostWanted/MostWanted";
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
              <div className="under-nav">
                <Route exact path="/">
                  <Main />
                </Route>
                <Route exact path="/compare/">
                  <UserSearch />
                </Route>
                <Route exact path="/wanted/">
                  <MostWanted />
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
