import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

//components
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>

    <div className="App">
      <h1>All You Need Are Friends!</h1>

      <div>
        <Link to = "/login">Login</Link>
      </div>

      <Switch>

        {/* <PrivateRoute path = '/protected' component = {Friends} /> */}
        <Route path = "/login" component = {Login} />

      </Switch>

    </div>

    </Router>
  );
}

export default App;
