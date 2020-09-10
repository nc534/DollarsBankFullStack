import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

export default function Overview() {
  const [state] = useContext(AppContext);
  // TODO get list of accounts via state.accounts and display in loop divs or something.

  return (
    <div className="customerMain">
      <h3>Hello, {state.user.username}!</h3>
      <div className="accountcontainer">
        <h4>Accounts</h4>
      </div>
      <Accounts />

      <div className="accountcontainer open-account">
        <Link to="/new-account" className="link">
          OPEN NEW ACCOUNT
        </Link>
      </div>
    </div>
  );
}

function Accounts() {
  const [state] = useContext(AppContext);

  return (
    <div className="accountcontainer">
      {state.accounts.map((account) => {
        return (
          <div className="AccountItem">
            <div className="AccountName">
              <p>
                {account.accountName} - #{account.id}
              </p>
              <p className="AccountType">
                {(() => {
                  switch (account.accType) {
                    case 0:
                      return "Checking";
                    case 1:
                      return "Savings";
                    case "CHECKING":
                      return "Checking";
                    case "SAVINGS":
                      return "Savings";
                    default:
                      return "Unknown";
                  }
                })()}
              </p>
            </div>
            <div className="AccountBalance">
              <p>${account.balance.toFixed(2)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
