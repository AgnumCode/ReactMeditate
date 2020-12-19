import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { DataContext } from "../Context/DataContext.js";
import { UserContext } from "../Context/UserContext.js";
import "../App.css";

const SignIn = () => {
  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [formData, updateFormData] = useState(initialFormData);
  const [userList, setUserList] = useContext(DataContext);
  const [user, setUserInfo] = useContext(UserContext);
  const [error, setError] = useState(false);

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

    if (retrievedUser !== undefined) {
      setUserInfo({
        isLoggedIn: true,
        username: retrievedUser.username,
      });

      console.log(user);
    } else {
      setError(true);
    }

    // username: null,
    // isLoggedIn: false,
    // theme: "default"
  };

  return (
    <div>
      <div className="signInContainer">
        {error ? <div>User credentials not recognized.</div> : ""}
        <Form>
          <input
            name="username"
            onChange={handleChange}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={handleChange}
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
          <button onClick={handleSubmit}>Log In</button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
