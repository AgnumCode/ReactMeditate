import React, { useState, useContext, useRef, useEffect } from "react";
import { DataContext } from "../Context/DataContext.js";
import { useHistory } from "react-router";
import CreateAccount from "./CreateAccount";
import Modal from "react-modal";
import "./css/SignIn.css";

const SignIn = () => {
  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });

  const signInContainerScrollIntoRef = useRef(null);
  const signInErrorRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, updateFormData] = useState(initialFormData);
  const [user, setUser] = useContext(DataContext);
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const history = useHistory();

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    if (signInContainerScrollIntoRef) {
      signInContainerScrollIntoRef.current.scrollIntoView();
    }
  }, [signInContainerScrollIntoRef]);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });

    setError(false);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    setModalOpen(!modalOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.username === user.username &&
      formData.password === user.password
    ) {
      setUser({
        ...user,
        isLoggedIn: true,
      });

      history.push("/Sessions");
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <div className="signInContainer" ref={signInContainerScrollIntoRef}>
        {modalOpen ? (
          <CreateAccount toggleModal={toggleModal}/>
        ) : (
          <form className="signInForm">
            <div className="formBorder">
              <div className="formHeader">Sign In</div>
              {error && (
                <div ref={signInErrorRef} className="error">
                  User credentials not recognized.
                </div>
              )}
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
                Log In
              </button>
              <button
                className="loginBtn btn btn-lg btn-success"
                onClick={handleCreateAccount}
              >
                Create Account
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
