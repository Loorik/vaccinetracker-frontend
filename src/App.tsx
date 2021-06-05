import React from 'react';
import logo from './logo.svg';
import './App.css';
import { VaccinePageBody } from './VaccinePageBody';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Current Vaccine States</h2>
        <div style={{position: "absolute", top: "50px", right: "50px",}}>
          <img src={logo} className="App-logo" alt="logo" style={{ height: "150px", width: "150px"}} />
        </div>
        <div style={{borderStyle: "groove", padding: "2em"}}>
            <VaccinePageBody />
        </div>
      </header>
    </div>
  );
}

export default App;