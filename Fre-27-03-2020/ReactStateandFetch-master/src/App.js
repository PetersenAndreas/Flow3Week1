import React, { useState, useEffect } from 'react';
import CountryTable from "./CountryTable";
import './App.css';
import countryFacade from './countryFacade';

const App = (props) => {
  const[labData, setLabData] = useState([]);
  const[countData, setCountData] = useState([]);

  const labelTab = async () => {
    const newLabel = await countryFacade.getLabels().then(data => {return data});
    await setLabData(newLabel);
  }

  const countryTab = async () => {
    const newCountry = await countryFacade.getCountries().then(data => {return data});
    await setCountData(newCountry);
    
  }

  useEffect(() => {
    setInterval(countryTab(), 3000);
    labelTab();
  },[]);

    return (
      <div>
        <div className="App-header">
          <h2>React, State, Fetch</h2>
        </div>
        <div className="App-intro">
          <p>Your initial task is to fetch data from the server (see exercise for how to start it),
           and create a table below, with these data</p>          
           <CountryTable lData={labData} cData={countData}/>
        </div>
      </div>
    );
};


export default App;
