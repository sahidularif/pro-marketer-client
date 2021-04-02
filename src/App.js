import './App.css';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

import Deals from './components/Deals/Deals';
import Home from './components/Home/Home';
import AdminPanel from './components/AdminPanel/AdminPanel';
import CheckOut from './components/CheckOut/CheckOut';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageProducts from './components/AdminPanel/ManageProducts';
export const UserContext = createContext();

//==================================================================
function App() {

  const [loggedInUser, SetLoggedInUser] = useState({});

  return (

    <UserContext.Provider value={[loggedInUser, SetLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/adminPanel">
            <AdminPanel></AdminPanel>
          </Route>
          <Route path="/deals">
            <Deals></Deals>
          </Route >
          <Route path="/manageProducts">
            <ManageProducts />
          </Route >
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute >
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/checkout/:_id">
            <CheckOut />
          </PrivateRoute >
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
