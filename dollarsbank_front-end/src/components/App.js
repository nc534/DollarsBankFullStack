import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from '../components/login/login';
import Register from '../components/login/register';
import Main from '../components/main/main';

function App() {
  return (
    <Router>
          <Route exact path={["/", "/login"]} component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/main" component={Main}/>
    </Router>
  );
}

export default App;
