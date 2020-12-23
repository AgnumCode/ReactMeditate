import React, { useState, useContext, useRef, useEffect } from "react";
import { DataContext } from "../Context/DataContext.js";
import { UserContext } from "../Context/UserContext.js";
import "./css/SignIn.css";

const SignIn = () => {
  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });

  const signInContainerScrollIntoRef = useRef(undefined);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, updateFormData] = useState(initialFormData);
  const [userList, setUserList] = useContext(DataContext);
  const [user, setUserInfo] = useContext(UserContext);
  const [error, setError] = useState(false);

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

    let retrievedUser = userList.find(
      (element) =>
        element.username === formData.username &&
        element.password === formData.password
    );

    if (retrievedUser) {
      setUserInfo({
        isLoggedIn: true,
        username: retrievedUser.username,
        session: retrievedUser.sessions,
      });

    } else {
      setError(true);
    }
  };

  return (
    <div>
      <div ref={signInContainerScrollIntoRef} className="signInContainer">
        {error ? (
          <div className="text-danger mb-2">
            User credentials not recognized.
          </div>
        ) : (
          ""
        )}
        <form className="signInForm">
          <div className="form-group">
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
          <button className="btn btn-lg btn-primary" onClick={handleSubmit}>Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
