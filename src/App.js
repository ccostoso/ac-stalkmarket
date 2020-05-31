import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import './App.css';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['acstalkmarket']);
  const [chartInfo, setChartInfo] = useState([]);

  return (
    <div className="App">
      {/* <div className="container-fluid"> */}
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Animal Crossing</h1>
            <h3>Stalk Market Calculator</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md">

          </div>
          <div className="col-md">
            
          </div>
        </div>
      </div>
    // </div>
  );
}

export default App;
