# Global Context & Data Store

`./components/App.js` is now wrapped in a `Provider` object, which supplies a global data store to the React component hierarchy. For testing purposes when communication with a back-end server is not functional, sample data is preloaded.

```js
// App.js
// [...]
import * as Store from "./Store";

export default function App() {
  return (
    <Store.GlobalContext.Provider value={Store}>
      <Router>
        // [...]
      </Router>
    </Store.GlobalContext.Provider>
  );
}
```

Found in `./components/Store.jsx`, the Store utilizes the `React.createContext()` call, taking the initial global state structure.

```js
// Store.jsx
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
```

For programmatic purposes, this is exposed when using the `useContext()` call in child components.

```js
// ./components/login/login.jsx
import React, { useContext } from "react";
import { GlobalContext } from "../Store";

export default function Login() {
  const { user, accounts } = useContext(GlobalContext);
}
```
