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
  const [cookies, setCookie] = useCookies(['acstalkmarket']);
  const [chartInfo, setChartInfo] = useState((cookies.acstalkmarket) || "");

  useEffect(() => {
    setCookie('acstalkmarket', JSON.stringify(chartInfo), { path: '/' });

  }, [chartInfo, setCookie]);

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
