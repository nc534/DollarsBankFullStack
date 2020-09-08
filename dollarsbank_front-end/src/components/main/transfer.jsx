import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Transfer() {
  const [destination, setDestination] = useState(undefined);

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

        <form action="" method="post" className="form">
          <div>
            <label htmlFor="account_from">Transfer From </label>
            <select name="account_from">
              <option value="">--Please choose an option--</option>
              <option value="savings">Savings</option>
              <option value="checking">Checking</option>
            </select>
          </div>
          <div>
            <label htmlFor="account_to">Transfer To </label>
            <select
              id="selection"
              name="account_to"
              value={destination}
              onChange={(v) => setDestination(v.target.value)}
            >
              <option value="">--Please choose an option--</option>
              <option value="savings">Savings</option>
              <option value="checking">Checking</option>
              <option value="other">Another Customer</option>
            </select>
          </div>
          {/* State would be needed to hide or show option below */}
          {destination === "other" && (
            <div id="another">
              <label htmlFor="other_account">To Account Id </label>
              <input
                type="number"
                name="other_account"
                min="0"
                step="1"
                placeholder="account id"
              />
              <p></p>
              <label htmlFor="phone">Phone of Other Customer </label>
              <input type="text" name="phone" placeholder="phone" />
            </div>
          )}
          <div>
            <label htmlFor="transaction_amount">Amount </label>
            <input
              type="number"
              name="transaction_amount"
              required
              placeholder="0.00"
              min="0.00"
              step="0.01"
            />
          </div>
          <div className="date">
              Date:
              <input type="text" id="date" readOnly placeholder={date}></input>
          </div>

          <div>
            <button type="submit" className="btn">
              Submit
            </button>
            <Link to="/overview" className="cancel">
              Cancel
            </Link>
            {/* <button type="button" name="cancel" class="cancel" onclick="history.back()">Cancel</button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
