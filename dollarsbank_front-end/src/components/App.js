import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login/login";
import Register from "./login/register";
import Main from "./main/main";

export const AppContext = createContext({
  user: null,
  accounts: [],
});

export const AppContextProvider = (props) => {
  const setUser = (user) => {
    setState({ ...state, user: user });
  };

  const initState = {
    user: {
      username: "joyfulpainter",
      password: "42!HappyTrees",
      name: "Bob Ross",
      phone: "470-200-6700",
      address: "New York, NY",
    },
    accounts: [
      {
        accountType: "savings",
        accountBalance: 400,
      },
      {
        accountType: "checking",
        accountBalance: 1300,
      },
    ],
    setUser: setUser,
  };

  const [state, setState] = useState(initState);

  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
};

export default function App() {
  return (
    <AppContextProvider>
      <Router>
        <Route exact path={["/", "/login"]} component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/main" component={Main} />
      </Router>
    </AppContextProvider>
  );
}
