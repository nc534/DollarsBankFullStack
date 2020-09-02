import React, { useContext } from "react";
import { GlobalContext } from "../Store";

export default function Customer() {
  const { user } = useContext(GlobalContext);

  return (
    <div class="customerMain">
      <div class="accountInfo">
        <h3>Your Account Information</h3>

        <table>
          <tr>
            <td>Name: {user.name}</td>
          </tr>
          <tr>
            <td>Phone: {user.phone}</td>
          </tr>
          <tr>
            <td>Address: {user.address}</td>
          </tr>
          <tr>
            <td>User Id: {user.username}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
