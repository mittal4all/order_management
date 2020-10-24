import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import CreateOrder from "./components/CreateOrder";
import CheckOrder from "./components/CheckOrder";
import EditOrder from "./components/EditOrder";
import About from "./components/About";
import HomePage from "./components/HomePage";
function App() {
  return (
    <Router>
      <Header />
      <br />
      <Route path="/" exact component={HomePage} />
      <Route path="/edit/:id" component={EditOrder} />
      <Route path="/create" exact component={CreateOrder} />
      <Route path="/checkorder" exact component={CheckOrder} />
      <Route path="/about" exact component={About} />
    </Router>
  );
}

export default App;
