import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../App";
import Select from "react-select";
import * as Utils from "../Utils";

export default function Transfer() {
  const history = useHistory();
  const [state, dispatch] = useContext(AppContext);
  const [sourceAccId, setSource] = useState(undefined);
  const [targetAcc, setDestination] = useState(undefined);
  const [targetAccId, setDestinationID] = useState(undefined);
  const [amount, setAmount] = useState(undefined);
  const [memo, setMemo] = useState(undefined);
  const [nameVerify, setName] = useState(undefined);

  const accounts = state.accounts.map((a) => ({
    value: a.id,
    label: a.accountName,
  }));

  let today = new Date();
  let date =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

  async function handleTransfer(event) {
    event.preventDefault();
    await Utils.makeTransfer(
      sourceAccId,
      parseInt(targetAccId),
      parseInt(amount) * 100,
      memo,
      nameVerify
    );
    // TODO notification of success/failure.
    // refresh accounts.
    const resAccts = await Utils.getAccounts(state.user.id);
    dispatch({
      type: "SET_ACCOUNTS",
      payload: resAccts,
    });
    history.push(Utils.endpoints.main);
  }

  return (
    <div className="customerMain">
      <div>
        <h3>Transfer</h3>

        {/* <div class="error">{ this.state.errorMsg }</div> */}

        {/* Change to list Account Name */}
        {/* Need to convert account name to id */}
        <form onSubmit={handleTransfer} className="form">
          <div className="form-group">
            <label htmlFor="account_from">Transfer From </label>
            <Select
              name="account_from"
              className="select"
              options={accounts}
              onChange={(v) => setSource(v.value)}
            />
          </div>
          {/* Change to list Account Name */}
          {/* Need to convert account name to id */}
          <div className="form-group">
            <label htmlFor="account_to">Transfer To </label>
            <Select
              name="account_to"
              className="select"
              options={accounts.concat({
                value: "other",
                label: "Another Customer",
              })}
              onChange={(v) => setDestination(v.value)}
            />
          </div>
          {targetAcc === "other" && (
            <div id="another" className="form-group">
              <label htmlFor="targetAccId">To Account Id </label>
              <input
                type="number"
                name="targetAccId"
                min="0"
                step="1"
                placeholder="Account id"
                onChange={(v) => setDestinationID(v.target.value)}
              />
              <p></p>
              <label htmlFor="name">To Customer Name </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={(v) => setName(v.target.value)}
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="amount">Amount </label>
            <input
              type="number"
              name="amount"
              required
              placeholder="0.00"
              min="0.00"
              step="0.01"
              onChange={(v) => setAmount(v.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="memo">Note </label>
            <input
              type="text"
              name="memo"
              className="memo"
              value={memo}
              required
              placeholder="e.g. borrowed money"
              onChange={(v) => setMemo(v.target.value)}
            />
          </div>
          <div className="date form-group">
            <label htmlFor="date">Date </label>
            <input
              type="text"
              name="date"
              id="date"
              readOnly
              placeholder={date}
            ></input>
          </div>

          <div className="form-group">
            <button type="submit" className="btn">
              Submit
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
