import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Main from "./pages/Main"



function App() {
  return (
    <Router>
   
          <Switch>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route path="/" component={Main}></Route>
          </Switch>
            
    </Router>
  );
}

export default App;
