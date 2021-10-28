import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <div className="container pt-1 pb-1">
      <Router>
        <Switch>
          <Route exact path="/factura-es" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
