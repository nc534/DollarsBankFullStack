import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import * as Model from "../Model";
import { GlobalContext } from "../Store";

export default function Register() {
  const context = useContext(GlobalContext);

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const [accountType, setAccountType] = useState(null);
  const [accountBalance, setAccountBalance] = useState(null);

  async function handleRegister(event) {
    event.preventDefault();
    const res = await Model.register({
      username: username,
      password: password,
      name: name,
      address: address,
      phone: phone,
      accountType: accountType,
      accountBalance: accountBalance,
    });
    // TODO set [context.user] to the registered user and forward to Model.login.
  }

  return (
    <div class="main">
      <div class="container">
        <div class="header">Register</div>

        {/* TODO error div? */}
        {/* <div class="error">{ this.state.errorMsg }</div>*/}

        <form onSubmit={handleRegister} class="form-main">
          <div class="form-group">
            <label for="account">Account </label>
            <select
              name="account"
              onChange={(v) => setAccountType(v.target.value)}
            >
              <option value="">--Please choose an option--</option>
              <option value="savings">Savings</option>
              <option value="checking">Checking</option>
            </select>
          </div>
          <div class="form-group">
            <label for="initial_deposit">Amount</label>
            <input
              class="input"
              type="number"
              name="initial_deposit"
              required
              placeholder="0.00"
              min="0.00"
              step="0.01"
              onChange={(v) => setAccountBalance(v.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              class="input"
              type="text"
              name="name"
              required
              placeholder="name"
              onChange={(v) => setName(v.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input
              class="input"
              type="text"
              name="address"
              required
              placeholder="address"
              onChange={(v) => setAddress(v.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input
              class="input"
              type="text"
              name="phone"
              required
              placeholder="phone"
              onChange={(v) => setPhone(v.target.value)}
            />
          </div>
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
              pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number, one uppercase, one lowercase letter, and at least 8 or more characters"
              onChange={(v) => setPassword(v.target.value)}
            />
          </div>
          <button type="submit" class="btn">
            Register
          </button>
          <div>
            <p>Already have an account?</p>
            <Link to="/login">
              <p>Login</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
