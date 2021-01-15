import React, { useState } from "react";
import "./css/CreateAccount.css";

const CreateAccount = ({toggleModal}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const handleChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  const handleBack = (e) => {
    e.preventDefault();
    toggleModal();
  }

  return (
    <div>
      <div className="createContainer">
        <form className="createForm">
          <div className="formBorder">
            <div className="formHeader">Create an account!</div>
            {error && <div className="error">Input error.</div>}
            <input
              className="signInUsernameField"
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="Username"
            />
            <br />
            <input
              className="signInPasswordField"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
            />
            <input
              className="signInPasswordField"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
            />
            <br />
            <div className="showPasswordCheckbox">
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
              className="loginBtn btn btn-lg btn-primary"
              onClick={handleSubmit}
            >
              Make Account!
            </button>
            <button
              className="loginBtn btn btn-lg btn-warning"
              onClick={handleBack}
            >
              Go back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
