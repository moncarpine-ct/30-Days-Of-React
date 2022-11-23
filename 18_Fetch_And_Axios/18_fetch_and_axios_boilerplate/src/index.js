import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

// const Country = ({ country: { name, flag, population } }) => {
//   return (
//     <div className='country'>
//       <div className='country_flag'>
//         <img src={flag} alt={name} />
//       </div>
//       <h3 className='country_name'>{name.toUpperCase()}</h3>
//       <div class='country_text'>
//         <p>
//           <span>Population: </span>
//           {population}
//         </p>
//       </div>
//     </div>
//   )
// }

class App extends Component {
  state = {
    data: [],
    count: 0,
  }

  componentDidMount() {
    // this.fetchCountryData()
    this.fetchCatsData();
  }

  // fetchCountryData = async () => {
  //   const url = 'https://restcountries.eu/rest/v2/all'
  //   try {
  //     const response = await axios.get(url)
  //     const data = await response.data
  //     this.setState({
  //       data,
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  fetchCatsData = async () => {
    const url = 'https://api.thecatapi.com/v1/breeds';
    try {
      const response = await axios.get(url);
      const data = await response.data;
      this.setState({
        data,
        count: data.length,
      });
    } catch (error) {
      console.log(error);
    }
  }

  getAverageFromRange = (range) => {
    const minmax = range.split(' - ');
    return ((Number(minmax[0]) + Number(minmax[1])) / 2);
  };

  getAverageFromSum = (sum) => {
    const average = sum / this.state.count;
    return average.toFixed(2);
  };

  averageWeight = () => {
    if (this.state.count === 0) {
      return 0;
    }

    const averageSum = this.state.data.reduce((average, cat) => {
      return average + this.getAverageFromRange(cat.weight.metric);
    }, 0);
    return this.getAverageFromSum(averageSum);
  };

  averageAge = () => {
    if (this.state.count === 0) {
      return 0;
    }

    const averageSum = this.state.data.reduce((average, cat) => {
      return average + this.getAverageFromRange(cat.life_span);
    }, 0);
    return this.getAverageFromSum(averageSum);
  };

  catCountries = () => {
    const countries = this.state.data.flatMap(cat => {
      return cat.origin;
    });
    return countries;
  };

  countriesWithCatBreeds = () => {
    const count = [...new Set(this.catCountries())].length
    return <p><b>{count}</b> countries have cat breeds.</p>;
  };

  countriesAndBreedsCount = () => {
    const breedsCount = {};
    const countries = this.catCountries();

    // count number of breeds of each countries.
    countries.forEach(function (x) { breedsCount[x] = (breedsCount[x] || 0) + 1; });

    return breedsCount;
  }

  countryWithMostCatBreeds = () => {
    const breedsCount = this.countriesAndBreedsCount();

    // get country with most breeds.
    const country = Object.keys(breedsCount).reduce((a, b) => breedsCount[a] > breedsCount[b] ? a : b, '');
    return <p><b>{country}</b> have the most cat breeds with <b>{breedsCount[country]}</b>.</p>
  };

  countriesAndBreedsCountList = () => {
    const breedsCount = this.countriesAndBreedsCount();

    // Create items array
    var items = Object.keys(breedsCount).map(function(key) {
      return [key, breedsCount[key]];
    });

    // Sort the array based on the second element
    items.sort(function(first, second) {
      return first[1] - second[1];
    });

    return items.map((value, index) => <li key={index}>{`${value[0]}: ${value[1]}`}</li>)
  };

  render() {
    return (
      <div className='App'>
        {/* <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1> */}
        <h1>30 Days of React</h1>
        <h1>Cats Paradise</h1>
        <div>
          {/* <p>There are {this.state.data.length} countries in the api</p>
          <div className='countries-wrapper'>
            {this.state.data.map((country) => (
              <Country country={country} />
            ))}
          </div> */}

          <p>There are <b>{this.state.count}</b> cat breeds</p>
          <p>On average a cat can weight about <b>{this.averageWeight()} KG</b> and live <b>{this.averageAge()} years</b>.</p>
          <br />
          {this.countriesWithCatBreeds()}
          <br />
          {this.countryWithMostCatBreeds()}
          <br />
          {this.countriesAndBreedsCountList()}
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
