import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

export default function Overview() {
  const state = useContext(AppContext);
  // TODO get list of accounts via state.accounts and display in loop divs or something.

  return (
    <div className="customerMain">
      <h3>Hello, </h3>
      <div className="accountcontainer">
        <div className="balance">
          <p>Account: </p>
          <hr />
          <p>Balance: </p>
        </div>
      </div>

      <div className="accountcontainer">
        <Link to="/new-account" className="link">
          OPEN NEW ACCOUNT
        </Link>
      </div>
    </div>
  );
}
