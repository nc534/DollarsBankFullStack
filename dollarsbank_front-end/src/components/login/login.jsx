import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  function handleLogin(event) {
    // TODO use the state vars to send a REST API request.
    event.preventDefault();
    alert("Username " + username + "\nPassword: " + password);
  }

  return (
    <div class="main">
      <h1>DOLLARSBANK Welcomes You!!</h1>
      <div class="container">
        <div class="header">Login</div>

        {/* TODO add conditional rendering */}
        {/* <div class="error">{ this.state.errorMsg }</div>
                    <div class="message">{this.state.message}</div> */}

        <form onSubmit={handleLogin} class="form-main">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              class="input"
              type="text"
              name="username"
              required
              placeholder="username"
              onChange={(v) => setUsername(v.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              class="input"
              type="password"
              name="password"
              required
              placeholder="password"
              onChange={(v) => setPassword(v.target.value)}
            />
          </div>
          <div>
            <button type="submit" class="btn">
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
