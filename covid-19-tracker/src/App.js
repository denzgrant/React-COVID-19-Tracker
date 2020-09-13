import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select } from "@material-ui/core"
import InfoBox from './InfoBox';
import Map from './Map'; 
import './App.css';


function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide')

  useEffect(() => {
    //code inside will run once when the component loads
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2,
            }));
          setCountries(countries);
        })
    }
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

  }

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select
            variant="outlined"
            onChange={onCountryChange}
            value={country}
          >
            <MenuItem value="worldwide">WorldWide</MenuItem>
            {/* Loop through all of the countries and show a drop down */}
            {countries.map((country, key) => (
              <MenuItem value={country.value} id={key}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        <InfoBox title="Coronavirus cases" cases={123} total={2000} />
        <InfoBox title="Recovered" cases={123} total={3000} />
        <InfoBox title="Deaths" cases={123} total={2000} />
      </div>


      <Map />
    </div>
  );
}

export default App;
