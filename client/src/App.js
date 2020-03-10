import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import "./App.css"
import Register from "./pages/Register";
import Profile from "./pages/Profile"; 


function App() {
  return (
    <Router>
      
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      
    </Router>
  );
}

export default App;
