import React from "react";

// ? Sample user data.
export const user = {
  username: "joyfulpainter",
  password: "42!HappyTrees",
  name: "Bob Ross",
  phone: "470-200-6700",
  address: "New York, NY",
};

// ? Sample account data.
export const accounts = [
  {
    accountType: "savings",
    accountBalance: 400,
  },
  {
    accountType: "checking",
    accountBalance: 1300,
  },
];

// ! Global context for easier component usability.
export const GlobalContext = React.createContext({
  user: user,
  accounts: accounts,
});
