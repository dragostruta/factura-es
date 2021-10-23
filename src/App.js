import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PreviewPage from "./components/pages/Preview/PreviewComponent";
import Home from "./components/pages/Home/Home";

function App() {
  return (
    <div className="container pt-1 pb-1">
      <Router>
        <Switch>
          <Redirect from="/factura-es" to="/" />
          <Route exact path="/" component={Home} />
          <Route path="/preview" component={PreviewPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
