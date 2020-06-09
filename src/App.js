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
    dataCount: 1,
    quantity: 0,
    prices: {
      sunday:{
        key: 0,
        price: 0,
      },
      monday: {
        am: {
          key: 1,
          price: 0,
        },
        pm: {
          key: 2,
          price: 0,
        },
      },
      tuesday: {
        am: {
          key: 3,
          price: 0,
        },
        pm: {
          key: 4,
          price: 0,
        },
      },
      wednesday: {
        am: {
          key: 5,
          price: 0,
        },
        pm: {
          key: 6,
          price: 0,
        },
      },
      thursday: {
        am: {
          key: 7,
          price: 0,
        },
        pm: {
          key: 8,
          price: 0,
        },
      },
      friday: {
        am: {
          key: 9,
          price: 0,
        },
        pm: {
          key: 10,
          price: 0,
        },
      },
      saturday: {
        am: {
          key: 11,
          price: 0,
        },
        pm: {
          key: 12,
          price: 0,
        },
      }
    }
  }

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
