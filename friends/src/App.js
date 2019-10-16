import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

//components
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';


function App() {
  return (


    <div className="App">
      <h1>All You Need Are Friends!</h1>

      <div>
        <Link to = "/login">Login</Link>
      </div>

      <Switch>
        <Route path = "/login" component = {Login} />
        <PrivateRoute  exact path = '/friends' component = {FriendsList} />
        <PrivateRoute path = '/add' component = {AddFriend} />

      </Switch>

    </div>


  );
}

export default App;
