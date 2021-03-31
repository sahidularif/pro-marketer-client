
import './App.css';
import {
  BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import Deals from './components/Deals/Deals';
import Home from './components/Home/Home';
import AdminPanel from './components/AdminPanel/AdminPanel';


function App() {
  return (

   
   <Router>
   
     <Switch>
      
       <Route path="/adminPanel">
       <AdminPanel></AdminPanel>
       </Route>
       <Route path="/deals">
       <Deals></Deals>
       </Route>
       <Route path="/deals">
       <Deals></Deals>
       </Route>
       <Route path="/">
        <Home/>
       </Route>
     </Switch>
   </Router>

  );
}

export default App;
