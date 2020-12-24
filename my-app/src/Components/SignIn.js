import React, { useState, useContext, useRef, useEffect } from "react";
import { DataContext } from "../Context/DataContext.js";
import { useHistory } from "react-router";
import "./css/SignIn.css";

const SignIn = () => {
  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });

  const signInContainerScrollIntoRef = useRef(undefined);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, updateFormData] = useState(initialFormData);
  const [user, setUser] = useContext(DataContext  );
  const [error, setError] = useState(false);

  let history = useHistory();

  useEffect(() => {

    if (signInContainerScrollIntoRef !== null) {
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
      <div ref={signInContainerScrollIntoRef} className="signInContainer">
        <form className="signInForm pb-3">
          <div>
            <input
              className="signInUsernameField"
              name="username"
              onChange={handleChange}
              type="text"
              placeholder="Username"
            />
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
            <button className="btn btn-lg btn-primary" onClick={handleSubmit}>
              Log In
            </button>
          </div>
          {error && (
            <div className="text-danger mt-3">
              User credentials not recognized.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
