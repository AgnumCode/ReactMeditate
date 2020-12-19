import React, { useContext, useState } from "react";
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import { UserContext } from "../Context/UserContext.js";


const LogInController = () => {

  const [user, setUserInfo] = useContext(UserContext);

  return (
    <div className="loginControllerContainer">
      { user.isLoggedIn ? "Logged In" : <SignIn/>}
    </div>
  );
};

export default LogInController;
