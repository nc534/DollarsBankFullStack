import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import * as Utils from "../Utils";
import { AppContext } from "../App";

export default function Login() {
  const history = useHistory();
  const state = useContext(AppContext);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  async function handleLogin(event) {
    event.preventDefault();
    const res = await Utils.login({
      username: username,
      password: password,
    });

    if (res === "") {
      changeMsg();
    } else {
      state.setUser(res);
      history.push("/main");
    }
  }

  function changeMsg() {
    setErrorMsg("Invalid username and password. Please try again.");
  }

  return (
    <div className="main">
      <h1>DOLLARSBANK Welcomes You!!</h1>
      <div className="container">
        <div className="header">Login</div>
        <div className="error">{errorMsg}</div>
        <form onSubmit={handleLogin} className="form-main">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="input"
              type="text"
              name="username"
              required
              placeholder="username"
              onChange={(v) => setUsername(v.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              required
              placeholder="password"
              onChange={(v) => setPassword(v.target.value)}
            />
          </div>
          <div>
            <button type="submit" className="btn">
              Login
            </button>
          </div>
          <div>
            <p>Don't have an account? </p>
            <Link to="/register">
              <p>Register</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
