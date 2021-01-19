import React, { useState } from "react";
import { DataContext } from "../Context/DataContext.js";
import "./css/CreateAccount.css";

const initialFormData = Object.freeze({
  username: "",
  password: "",
  confirmPassword: ""
});

const CreateAccount = ({toggleModal}) => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, updateFormData] = useState(initialFormData);
  const [error, setError] = useState({
    username: 0,
    password: 0,
    confirmPassword: 0
  });
  const [confirmPassword, setConfirmPassword] = useState(false);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });

    if (formData.confirmPassword !== formData.password) {
    }

    setError(false);
  };
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
            <label htmlFor="username">
              Choose username.
            <input
              className="signInUsernameField"
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="Username"
            />
            </label>
            <br />
            <label htmlFor="password">
              Choose password.
            <input
              className="signInPasswordField"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
            />
            </label>
            <br/>
            <label htmlFor="confirmPassword">
              Confirm password.
            <input
              className="signInPasswordField"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
            />
            </label>
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
