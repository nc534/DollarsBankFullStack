import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login/login";
import Register from "./login/register";
import Main from "./main/main";
import * as Store from "./Store";

export default function App() {
  return (
    <Store.GlobalContext.Provider value={Store}>
      <Router>
        <Route exact path={["/", "/login"]} component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/main" component={Main} />
      </Router>
    </Store.GlobalContext.Provider>
  );
}
