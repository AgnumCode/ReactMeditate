import React, { useContext, useEffect, useRef } from "react";
import { DataContext } from "../Context/DataContext.js";
import { NavLink } from "react-router-dom";
import "./css/Navigation.css";

const Navigation = () => {
  const [user, setUser] = useContext(DataContext);

  const handleLogOut = () => {
    setUser({
      ...user,
      isLoggedIn: false,
    });
  };

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav").style.top = "0";
      } else {
        document.getElementById("nav").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    };
  }, [window.pageYOffset]);

  return (
    <div id="nav" className="navigationMenu">
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
          <button
            onClick={() => {
              handleLogOut();
            }}
            className="logOutButton btn btn-info"
          >
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
