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
  const chartInfoDefault = {
    quantity: 0,
    prices: {
      sunday: 0,
      monday: {
        am: 0,
        pm: 0,
      },
      tuesday: {
        am: 0,
        pm: 0,
      },
      wednesday: {
        am: 0,
        pm: 0,
      },
      thursday: {
        am: 0,
        pm: 0,
      },
      friday: {
        am: 0,
        pm: 0,
      },
      saturday: {
        am: 0,
        pm: 0,
      }
    }
  }

  const [cookies, setCookie] = useCookies(['acstalkmarket']);
  const [chartInfo, setChartInfo] = useState((cookies.acstalkmarket) || chartInfoDefault);
  console.log(cookies.acstalkmarket);

  useEffect(() => {
    setCookie('acstalkmarket', JSON.stringify(chartInfo), { path: '/' });

  }, [chartInfo, setCookie]);

  return (
    <Router>
      <header className="jumbotron jumbotron-fluid">
        <div className="container text-center">
          <h3>Animal Crossing: Turnip Tracker!</h3>
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
