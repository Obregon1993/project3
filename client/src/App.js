import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Main from "./pages/Main";
import Login from "./pages/Login";
import "./App.css"
import Register from "./pages/Register";
import Profile from "./pages/Profile"; 
=======
import Login from "./pages/Login"
import Register from "./pages/Register"
import Main from "./pages/Main"
import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table"
>>>>>>> camilo


function App() {
  return (
    <Router>
<<<<<<< HEAD
      
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      
=======
        
          <Switch>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/table" component={Table}></Route>
            <Route path="/" component={Main}></Route>
          </Switch>
        
>>>>>>> camilo
    </Router>
  );
}

export default App;
