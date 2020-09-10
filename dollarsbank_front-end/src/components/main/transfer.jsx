import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import Select from 'react-select';

export default function Transfer() {
  const [sourceAccId, setSource] = useState(undefined);
  const [targetAccId, setDestination] = useState(undefined);
  const [memo, setMemo] = useState(undefined);
  const [state] = useContext(AppContext);
  const accounts = state.accounts.map(a => ({
    "value": a.id,
    "label": a.accountName
  }));

  let today = new Date();
  let date =
    (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
  // let time =
  //   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  // let dateTime = date + " " + time;

  return (
    <div className="customerMain">
      <div>
        <h3>Transfer</h3>

        {/* <div class="error">{ this.state.errorMsg }</div> */}

        {/* Change to list Account Name */}
        {/* Need to convert account name to id */}
        <form action="" method="post" className="form">
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
              options={accounts.concat({"value": "other", "label":"Another Customer"})}
              onChange={(v) => setDestination(v.value)}
            />
          </div>
          {/* State would be needed to hide or show option below */}
          {targetAccId === "other" && (
            <div id="another" className="form-group">
              <label htmlFor="targetAccId">To Account Id </label>
              <input
                type="number"
                name="targetAccId"
                min="0"
                step="1"
                placeholder="Account id"
              />
              <p></p>
              <label htmlFor="name">To Customer Name </label>
              <input type="text" name="name" placeholder="Name" />
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="memo">Note </label>
            <input type="text" name="memo" className="memo" value={memo} required placeholder="e.g. borrowed money" onChange={(v) => setMemo(v.target.value)}/>
          </div>
          <div className="date form-group">
              <label htmlFor="date">Date </label>
              <input type="text" name="date" id="date" readOnly placeholder={date}></input>
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
