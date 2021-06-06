import React from 'react';
import logo from './logo.svg';
import './App.css';
import { VaccinePageBody } from './VaccinePageBody';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{minHeight: "fit-content"}}>
        <h2>Current Vaccine States</h2>
      </header>
      <body style={{backgroundColor: "#282c34",
       minWidth: "min-content",
       display: 'flex',
       flexDirection: "column",
       alignItems: "center",
       justifyContent: "center",
       fontSize: "calc(10px + 2vmin)",
       color: "white",
       height: "fit-content"}}>
        <div style={{top: "50px", right: "50px", marginBottom: "2em"}}>
          <img src={logo} className="App-logo" alt="logo" style={{ height: "150px", width: "150px"}} />
        </div>
        <div style={{borderStyle: "groove", padding: "2em"}}>
            <VaccinePageBody />
        </div>
      </body>
      <footer style={{backgroundColor: "#282c34", color: "white", fontStyle: "oblique", marginTop: "1rem"}}>
         © Lorik Gashi
      </footer>
    </div>
  );
}

export default App;




