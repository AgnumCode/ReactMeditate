import React, { useState } from "react";
import SignUp from "./SignUp.js";
import "../App.css";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="signInContainer">
        <form className="signInForm">
          <input name="username" type="text" placeholder="Username" />
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <div>
            {" "}
            Show Password{" "}
            <input
              type="checkbox"
              defaultChecked={showPassword}
              onChange={(e) => {
                setShowPassword(e.target.checked);
              }}
            />{" "}
          </div>
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
