import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Select from 'react-select';
import "./style.css";
import * as Utils from "../Utils";
import { AppContext } from "../App";

export default function Register() {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
  const [accType, setAccountType] = useState(null);
  const [accountName, setAccountName] = useState(null);
  const [balance, setAccountBalance] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const accTypes = [
    {
        "value": "CHECKING",
        "label": "Checking"
    },
    {
        "value": "SAVINGS",
        "label": "Savings"
    }
  ];
  
  async function handleRegister(event) {
    event.preventDefault();

    // step 1, register customer.
    const resSignup = await Utils.register({
      username: username,
      password: password,
      name: name,
      address: address,
      contactNumber: phone,
    });
    if (!resSignup) {
      setErrorMsg("Username taken. Please try again.");
      return;
    } else {
      dispatch({
        type: "SET_USER",
        payload: resSignup,
      });
    }

    // step 2, create accounts.
    const resAccount = await Utils.createAccount({
      custId: resSignup.id,
      accountName: accountName,
      accType: accType,
      balance: 0,
      transactions: [],
    });
    if (!resAccount) {
      setErrorMsg("Account creation failed. Please try again.");
      return;
    } else {
      dispatch({
        type: "SET_ACCOUNTS",
        payload: resAccount,
      });
    }

    // step 3, make deposit.
    const resDeposit = await Utils.makeDeposit(
      resAccount.id,
      balance * 100,
      "Initial deposit."
    );
    history.push(Utils.endpoints.login);
  }

  return (
    <div className="main">
      <div className="container">
        <div className="header">Register</div>
        <div className="error">{errorMsg}</div>
        <form onSubmit={handleRegister} className="form-main">
          <div className="regaccount">
            <div className="form-group">
              <label htmlFor="accType">Account </label>
              <Select name="accType"
                options={accTypes} 
                required 
                onChange={(v) => setAccountType(v.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="accountName">Account Name </label>
                <input type="text" name="accountName" className="accountName" required placeholder="Enter a name for your account" onChange={(v) => setAccountName(v.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor="balance">Amount </label>
                {/* Need to change the value to pennies */}
                <input type="number" name="balance" required placeholder="0.00" min="0.00" step="0.01" onChange={(v) => setAccountBalance(v.target.value)}/>
            </div>
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
          <div className="form-group">
            <button type="submit" className="btn">
              Register
            </button>
          </div>
          <div className="form-group">
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
