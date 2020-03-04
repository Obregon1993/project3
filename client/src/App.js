import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
<<<<<<< HEAD
import "./App.css"
=======
import Register from "./pages/Register";
>>>>>>> d17a1bea2ae9c1584f480625283eff1c8337e7b9

function App() {
  return (
    <Router>
      
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      
    </Router>
  );
}

export default App;
