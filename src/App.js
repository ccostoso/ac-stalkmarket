import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useCookies } from 'react-cookie';
import Home from "./pages/Home";
import './App.css';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['acstalkmarket']);
  const [chartInfo, setChartInfo] = useState();

  // useEffect(() => {
  //   function handleClick(name, value) {
  //     setChartInfo({...chartInfo, [timeSelected]: value});
  //   }


  // }, [timeSelected]);

  return (
    <Router>
      <header className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h3>Stalk Market Calculator</h3>
        </div>
      </header>
      <Switch>
        <Route exact path="/">
          <Home 
            setChartInfo={setChartInfo}
            chartInfo={chartInfo}
          />
        </Route>
      </Switch>      
    </Router>
  );
}

export default App;
