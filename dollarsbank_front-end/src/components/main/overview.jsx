import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

export default function Overview() {
  const [state, dispatch] = useContext(AppContext);
  // TODO get list of accounts via state.accounts and display in loop divs or something.

  return (
    <div className="customerMain">
      <h3>Hello, {state.user.username}!</h3>
      <Accounts />

      <div className="accountcontainer">
        <Link to="/new-account" className="link">
          OPEN NEW ACCOUNT
        </Link>
      </div>
    </div>
  );
}

function Accounts() {
  const [state, dispatch] = useContext(AppContext);

  return (
    <div className="accountcontainer">
      {state.accounts.map((account) => {
        return (
          <div className="balance">
            <p>ID: {account.id}</p>
            <hr />
            <p>Account: {account.accountName}</p>
            <hr />
            <p>Balance: ${account.balance}</p>
          </div>
        );
      })}
    </div>
  );
}
