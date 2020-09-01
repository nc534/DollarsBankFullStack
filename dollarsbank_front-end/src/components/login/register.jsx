import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import * as CONSTANTS from "../constants";
import axios from "axios";

export default function Register() {
  const url = CONSTANTS.API;

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const [accountType, setAccountType] = useState(null);
  const [accountBalance, setAccountBalance] = useState(null);

  async function handleRegister(event) {
    event.preventDefault();
    // TODO use the state vars to send a REST API request.
    const res = await axios.post(url + "/signup", {
      username: username,
      password: password,
      name: name,
      address: address,
      phone: phone,
      accountType: accountType,
      accountBalance: accountBalance,
    });
    console.log(res);
  }

  return (
    <div class="main">
      <div class="container">
        <div class="header">Register</div>

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
              placeholder="name" /*value={this.state.name} onChange={this.handleChange}*/
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
              placeholder="address" /*value={this.state.address} onChange={this.handleChange}*/
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
              placeholder="phone" /*value={this.state.phone} onChange={this.handleChange}*/
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
              placeholder="username" /*value={this.state.username} onChange={this.handleChange}*/
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
              /*value={this.state.password} onChange={this.handleChange}*/
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
