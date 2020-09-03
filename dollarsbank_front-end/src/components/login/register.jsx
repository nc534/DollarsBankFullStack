import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import * as Utils from "../Utils";
import { AppContext } from "../App";

export default function Register() {
  const history = useHistory();
  const state = useContext(AppContext);

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const [accountType, setAccountType] = useState(null);
  const [accountBalance, setAccountBalance] = useState(null);

  async function handleRegister(event) {
    event.preventDefault();
    const res = await Utils.register({
      username: username,
      password: password,
      name: name,
      address: address,
      contactNumber: phone,
      // accountType: accountType,
      // accountBalance: accountBalance,
    });
    if (!res) {
      alert("Username taken. Please try again.");
    } else {
      state.setUser(res);
      history.push("/main");
    }
  }

  return (
    <div className="main">
      <div className="container">
        <div className="header">Register</div>

        {/* TODO error div? */}
        {/* <div class="error">{ this.state.errorMsg }</div>*/}

        <form onSubmit={handleRegister} className="form-main">
          <div className="form-group">
            <label htmlFor="account">Account </label>
            <select
              className="account"
              onChange={(v) => setAccountType(v.target.value)}
            >
              <option value="">--Please choose an option--</option>
              <option value="savings">Savings</option>
              <option value="checking">Checking</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="initial_deposit">Amount</label>
            <input
              className="input"
              type="number"
              name="initial_deposit"
              required
              placeholder="0.00"
              min="0.00"
              step="0.01"
              onChange={(v) => setAccountBalance(v.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="input"
              type="text"
              name="name"
              required
              placeholder="name"
              onChange={(v) => setName(v.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              className="input"
              type="text"
              name="address"
              required
              placeholder="address"
              onChange={(v) => setAddress(v.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              className="input"
              type="text"
              name="phone"
              required
              placeholder="phone"
              onChange={(v) => setPhone(v.target.value)}
            />
          </div>
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
              pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number, one uppercase, one lowercase letter, and at least 8 or more characters"
              onChange={(v) => setPassword(v.target.value)}
            />
          </div>
          <button type="submit" className="btn">
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
