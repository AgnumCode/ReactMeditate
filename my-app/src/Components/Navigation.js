import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext.js";
import { NavLink } from "react-router-dom";
import "./css/Navigation.css";

const Navigation = () => {
  const [user, setUser] = useContext(DataContext);


  const handleLogOut = () => {
    setUser({
      ...user,
      isLoggedIn: false
    })
  } 

  return (
    <div className="navigationMenu">
      <NavLink className="navItem" activeStyle={{ color: "white" }} to="/Home">
        Home
      </NavLink>
      <NavLink
        className="navItem"
        activeStyle={{ color: "white" }}
        to="/Sessions"
      >
        Sessions
      </NavLink>
      <NavLink activeStyle={{ color: "white" }} to="/Login">
        {user.isLoggedIn ? (
          <button onClick={() => {handleLogOut()}} className="logOutButton btn btn-info">
            (Log out) {user.username}
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
