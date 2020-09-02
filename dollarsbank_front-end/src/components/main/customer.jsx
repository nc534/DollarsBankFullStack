import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Customer() {
  const state = useContext(AppContext);
  
  return (
    <div class="customerMain">
      <div class="accountInfo">
        <h3>Your Account Information</h3>

        <table>
          <tr>
            <td>Name: {state.user.name}</td>
          </tr>
          <tr>
            <td>Phone: {state.user.phone}</td>
          </tr>
          <tr>
            <td>Address: {state.user.address}</td>
          </tr>
          <tr>
            <td>User Id: {state.user.username}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
