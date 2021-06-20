import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Page1 from './components/Page1';
import Page2 from './components/Page2';

function App() {
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <NavLink exact to="/page1" onClick={() => setProgress(100)}>Page1</NavLink>
        <NavLink exact to="/page2" onClick={() => setProgress(100)}>Page2</NavLink>
        <br />
        <Route exact path="/page1">
          <Page1 />
        </Route>
        <Route exact path="/page2">
          <Page2/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
