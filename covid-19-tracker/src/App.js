import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select } from "@material-ui/core"
import './App.css';

function App() {
  const [countries, setCountries] = useState([
    'USA', 'UK', 'Ind'
  ]);
  // https://disease.sh/v3/covid-19/countries

  // UseEffect = runs peice of code based on a given condition
  useEffect(() => {
    //code inside will run once when the component loads

  }, [countries]);


  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            value="abc"
          >
            {/* Loop through all of the countries and show a drop down */}
            {countries.map((country) => (
              <MenuItem value={country}>{country}</MenuItem>
            ))}


          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
