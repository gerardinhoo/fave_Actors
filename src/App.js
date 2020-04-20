import React from 'react';
import Navbar from "./components/Navbar";
import About from "./components/About";
import AddActor from "./components/AddActor";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar title="Fave Actors" />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/add" component={AddActor} />
         </Switch>
      </div>
    </Router>
  );
}

export default App;
