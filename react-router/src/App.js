import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink activeStyle={{ backgroundColor: 'white', color: 'red' }} exact to="/" className="my-link">Trang chu</NavLink>
              <NavLink activeStyle={{ backgroundColor: 'white', color: 'red' }} to="/about" className="my-link">Trang chu</NavLink>
            </div>
          </div>
        </nav>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    </Router>
  );
}
export default App;
