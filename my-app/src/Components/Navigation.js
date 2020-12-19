import React, { useContext, useEffect } from "react";
import { UserContext } from "../Context/UserContext.js";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [user, setUserInfo] = useContext(UserContext);

  return (
    <div className="navigationMenu">
      <NavLink activeStyle={{ color: "white" }} to="/Home">
        Home
      </NavLink>
      <NavLink activeStyle={{ color: "white" }} to="/Sessions">
        Sessions
      </NavLink>
      <NavLink activeStyle={{ color: "white" }} to="/Login">
        {user.isLoggedIn ? (
          <button
            onClick={() =>
              setUserInfo({ ...user, isLoggedIn: !user.isLoggedIn })
            }
            className="logOutButton btn btn-info"
          >
            (Logged In) Log Out
          </button>
        ) : (
          <div className="signInUpButton btn btn-success">
            Sign In / Sign Up
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default Navigation;
