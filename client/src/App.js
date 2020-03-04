import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import "./App.css"

function App() {
  return (
    <Router>
      
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
        </Switch>
      
    </Router>
  );
}

export default App;
