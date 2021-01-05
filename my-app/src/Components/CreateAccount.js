import React, { useState, useEffect, useContext } from "react";
import "../App.css";

const CreateAccount = () => {
  
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="createAccountContainer">
      <form className="createAccountForm">
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
         Make Account!
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
