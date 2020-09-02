# Global Context & Data Store

`./components/App.js` is now wrapped in a `Provider` object, which supplies a global data store to the React component hierarchy.

```js
// App.js
export default function App() {
  return (
    <GlobalContext.Provider>
      <Router>
        // [...]
      </Router>
    </GlobalContext.Provider>
  );
}
```

Found in `./components/Store.jsx`, the Store utilizes the `React.createContext()` call, taking the initial global state structure.

```js
// Store.jsx
export const GlobalContext = React.createContext({
  user: null,
});
```

For programmatic purposes, this is exposed when using the `useContext()` call in child components.

```js
// ./components/login/login.jsx
import React, { useContext } from "react";
import { GlobalContext } from "../Store";

export default function Login() {
  const context = useContext(GlobalContext);
  // Variables in the global context state can now be utilized, 
  // e.g. context.state
  // [...]
}
```
