import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Select from "react-select";
import { AppContext } from "../App";
import * as Utils from "../Utils";

export default function NewAccount() {
  const [state, dispatch] = useContext(AppContext);
  const history = useHistory();

  const [type, setAccountType] = useState(null);
  const [name, setAccountName] = useState(null);
  const [balance, setAccountBalance] = useState(null);

  const accType = [
    {
      value: "CHECKING",
      label: "Checking",
    },
    {
      value: "SAVINGS",
      label: "Savings",
    },
  ];

  async function handleSubmit(event) {
    event.preventDefault();

    // step 1, create account.
    const resAccount = await Utils.createAccount({
      custId: state.user.id,
      accountName: name,
      accType: type,
      balance: 0,
      transactions: [],
    });
    if (!resAccount) {
      // setErrorMsg("Account creation failed. Please try again.");
      return;
    }

    // step 2, make deposit.
    const resDeposit = await Utils.makeDeposit(
      resAccount.id,
      balance * 100,
      "Initial deposit."
    );

    // step 3, refresh accounts.
    const resAccts = await Utils.getAccounts(state.user.id);
    // TODO error handling.
    dispatch({
      type: "SET_ACCOUNTS",
      payload: resAccts,
    });
    history.push(Utils.endpoints.main);
  }

  return (
    <div>
      <div>
        <h3>New Account</h3>

        {/* <div class="error">{ this.state.errorMsg }</div>*/}

        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="accType">Account </label>
            <Select
              name="accType"
              className="select"
              options={accType}
              required
              onChange={(v) => setAccountType(v.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="accountName">Account Name </label>
            <input
              type="text"
              name="accountName"
              className="accountName"
              required
              placeholder="Enter a name for your account"
              onChange={(v) => setAccountName(v.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="balance">Amount </label>
            {/* Need to change the value to pennies */}
            <input
              type="number"
              name="balance"
              required
              placeholder="0.00"
              min="0.00"
              step="0.01"
              onChange={(v) => setAccountBalance(v.target.value)}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn">
              Open
            </button>

            <Link to="/overview" className="cancel">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
