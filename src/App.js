import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useCookies } from 'react-cookie';
import Home from "./pages/Home";
import chartInfoDefault from "./utils/chartInfoDefault";
import './App.css';

function App() {
  const [cookies, setCookie] = useCookies(['acstalkmarket']);
  const [chartInfo, setChartInfo] = useState((cookies.acstalkmarket) || chartInfoDefault);

  const nextSunday = () => {
    const today = new Date();
    const result = new Date(today);

    result.setHours(6, 0, 0);
    result.setDate(today.getDate() + (7 - today.getDay()));

    return result;
  }

  useEffect(() => {
    setCookie('acstalkmarket', JSON.stringify(chartInfo), { path: '/', expires: nextSunday() });

  }, [chartInfo, setCookie]);

  return (
    <Router>
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
