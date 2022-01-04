import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import { NewUser } from "../NewUser/NewUser";
import axios from "axios";
import { DeleteAccount } from "../DeleteAccount/DeleteAccount";
import "../../signUp/signstyle.css";

export const SignUp = () => {
  const [current, setCurrent] = useContext(UserContext)["currUser"];
  const [nameSearch, setNameSearch] = useState("");
  const [alert, setAlert] = useState(false);
  const [deleteAcc, setDeleteAcc] = useState(false);

  const onChangeHandle = (e) => {
    setAlert(false);
    setNameSearch(e.target.value);
  };

  const onDeleteHandle = () => {
    setDeleteAcc(!deleteAcc);
  };

  const checkUser = async () => {
    const { data } = await axios.get(
      "https://61d0790ccd2ee50017cc9887.mockapi.io/fbi/users"
    );
    const foundUser = data.find((e) => {
      return e.user.toLowerCase() === nameSearch.toLowerCase();
    });
    if (foundUser) {
      setCurrent(foundUser);
      setNameSearch("");
    } else {
      setAlert(true);
      setNameSearch("");
    }
  };

  return (
    <div className="signup-main">
      <div className="existing-user">
        {/* <div className={`ui  ${!current ? "" : "disabled"} input focus`}> */}
        <input
          disabled={!current ? false : true}
          type="text"
          value={nameSearch}
          onChange={onChangeHandle}
          placeholder="Existing user?"
        />
        {/* </div> */}

        <button
          className={`ui  ${
            nameSearch || !current ? "" : "disabled"
          } basic button`}
          onClick={checkUser}
        >
          <i className="icon user"></i>
          {current ? `Hi ${current.user}` : "Log in"}
        </button>
        {alert && <div className="alert">No user by this name</div>}
        {current && (
          <div className="three-buttons">
            <div>
              <Link className="main-button" to="/compare/">
                Compare
              </Link>
              <Link className="main-button" to="/wanted/">
                Wanted
              </Link>
            </div>
            <div>
              <button className="main-button" onClick={onDeleteHandle}>
                Delete account
              </button>
            </div>
          </div>
        )}
      </div>
      {deleteAcc && <DeleteAccount resetAlert={onDeleteHandle} />}
      {!current && <NewUser />}
    </div>
  );
};
