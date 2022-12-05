import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'

const Country = ({ country: { name, flags, flag, population } }) => {
  return (
    <div className='country'>
      <div className='country_flag'>
        {/* <img src={flags.svg} alt={name} /> */}
      </div>
      <h3 className='country_name'>{name.common.toUpperCase()} {flag}</h3>
      <div className='country_text'>
        <p>
          <span>Population: {population}</span>
        </p>
      </div>
    </div>
  )
}

const App = (props) => {
  // setting initial state and method to update state
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const url = 'https://restcountries.com/v3.1/all'

    axios.get(url)
      .then(({ data }) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) =>{
        console.log(error)
      });
  }

  const handleSearch = (e) => {
    const filtered = data.filter((country) => {
      // return country.name.common.toUpperCase().startsWith(e.target.value.toUpperCase());
      return filterCountry(country.name.common, e.target.value);
    });

    setFilteredData(filtered);
  }

  const filterCountry = (name, filter) => {
    return name.toUpperCase().startsWith(filter.toUpperCase());
  }

  return (
    <div className='App'>
      <h1>Fetching Data Using Hook</h1>
      <h1>Calling API</h1>
      <div>
        <p>There are {data.length} countries in the api</p>
        <input type='text' onChange={handleSearch} />
        <div className='countries-wrapper'>
          {filteredData.map((country, index) => (
            <Country country={country} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
