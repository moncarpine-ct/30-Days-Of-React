import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends Component {
  state = {
    data: [],
    count: 0,
  }

  componentDidMount() {
    this.fetchCatsData();
  }

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

  render() {
    return (
      <div className='App'>
        <h1>30 Days of React</h1>
        <h1>Cats Paradise</h1>
        <div>
          <p>There are <b>{this.state.count}</b> cat breeds</p>
          <p>On average a cat can weight about <b>{this.averageWeight()} KG</b> and live <b>{this.averageAge()} years</b>.</p>
        </div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
