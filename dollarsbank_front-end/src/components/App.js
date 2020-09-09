import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login/login";
import Register from "./login/register";
import Main from "./main/main";

// Global context currently follows a Reducer hierarhcy, as shown here:
// https://codeburst.io/global-state-with-react-hooks-and-context-api-87019cc4f2cf

// ? Defines an initial state structure.
// ? Useful for development purposes to bypass login.
const initialState = {
  user: {
    username: "joyfulpainter",
    password: "42!HappyTrees",
    name: "Bob Ross",
    contactNumber: "470-200-6700",
    address: "New York, NY",
  },
  accounts: [
    {
      id: 1,
      custID: 2,
      accountName: "mySavings",
      accType: 0,
      balance: 40000,
      transactions: [],
    },
  ],
};

// ! Defines the possible actions that can be taken to update the global state.
// ! Add new cases to introduce new functionality.
const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_ACCOUNTS":
      return {
        ...state,
        accounts: action.payload,
      };
    default:
      return state;
  }
};

// ? Exports the global context for components to import and use.
// For example:
// import { AppContext } from "../App";
// `const [state, dispatch] = useContext(AppContext);`
export const AppContext = createContext(initialState);
const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

// ? The App is now wrapped in the <Store> component, providing the global context to its children.
export default function App() {
  return (
    <Store>
      <Router>
        <Route exact path={["/", "/login"]} component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/main" component={Main} />
      </Router>
    </Store>
  );
}
