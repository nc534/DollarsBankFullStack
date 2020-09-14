import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Customer() {
  const [state] = useContext(AppContext);

  return (
    <div className="customerMain">
      <div className="accountcontainer accountInfo">
        <h3>Your Account Information</h3>

        <div className="customerInfo">
          <table>
            <tbody>
              <tr>
                <td className="field">User Id</td>
                <td className="details">{state.user.username}</td>
              </tr>
              <tr>
                <td className="field">Name</td>
                <td className="details">{state.user.name}</td>
              </tr>
              <tr>
                <td className="field">Phone</td>
                <td className="details">{state.user.contactNumber}</td>
              </tr>
              <tr>
                <td className="field">Address</td>
                <td className="details">{state.user.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
