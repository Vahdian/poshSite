import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LogingPage() {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState("");
  const [pass, setPass] = useState("");

  const handleChange = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleInput = (e) => {
    setPass(e.target.value);
  };

  const logIn = () => {
    const API = "http://localhost:7000/login";
    fetch(API, {
      body: JSON.stringify({ username: selectedUser, password: pass }),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) =>
        data.login ? NavigateToData(data) : errorModal(data.message)
      );
  };

  const NavigateToData = (data) => {
    const currentUserId = data.id;
    navigate("/costs/" + currentUserId);
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  const errorModal = (message) => {
    console.log(message);
  };
  return (
    <div className="landingPage">
      <h1>Jazzmin22</h1>
      <div className="container">
        <input
          value={selectedUser}
          onChange={(e) => handleChange(e)}
          className="inputField"
          placeholder="username"
        />
        <input
          value={pass}
          onChange={(e) => handleInput(e)}
          className="inputField"
          type="password"
          placeholder="pass"
        />
        <input
          onClick={logIn}
          className="logInButton"
          type="button"
          value="Log In"
        />
      </div>
      <div className="smolText">
        <span className="warning hover" onClick={navigateToRegister}>
          Create
        </span>{" "}
        a tenant account
      </div>
    </div>
  );
}
