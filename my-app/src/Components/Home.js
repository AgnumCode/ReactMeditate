import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext.js";
import "./css/Home.css";

const Home = () => {
  const [user, setUserInfo] = useContext(UserContext);

  return (
    <div className="welcomePage">
      {user.isLoggedIn
        ? `Hello, ${user.username}`
        : "Welcome to React Meditate!"}
    </div>
  );
};

export default Home;
