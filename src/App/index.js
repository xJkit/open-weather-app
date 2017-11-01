import React, { Component } from 'react';
import logo from 'assets/logo.png';
import moment from 'moment';
import WeatherBoard from 'WeatherBoard';
import './style.css';

/**
 * fetch actions
 */
import { fetchCurrentWeatherByCityName } from 'actions';

const timeFormat = 'YYYY 年 MM 月 DD 日';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      temp: '',
      temp_min: '',
      temp_max: '',
      humidity: '',
      clouds: 0, // cloudness
      description: '',
      forecastTime: moment(Date.now()).format(timeFormat),
    }
  }

  componentDidMount = async () => {
    this.loadDataByCityName('taiwan');
  }

  mapDataToState = data => {
    const { main, clouds, weather, dt, name } = data;
    this.setState({
      name,
      temp: this.formatDegreeToCelsius(main.temp),
      temp_min: this.formatDegreeToCelsius(main.temp_min),
      temp_max: this.formatDegreeToCelsius(main.temp_max),
      humidity: main.humidity,
      clouds: clouds.all,
      description: weather[0].description,
      forecastTime: moment(dt * 1000).format(timeFormat),
    });
  }

  formatDegreeToCelsius = kelvin => {
    return Math.floor(kelvin - 273.15);
  }

  loadDataByCityName = async cityName => {
    try {
      const jsonData = await fetchCurrentWeatherByCityName(cityName);
      this.mapDataToState(jsonData);
    } catch (error) {
      window.alert('Load city data failed, please try again. If you have no api key, check readme.md firstly.');
    }
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    const cityName = e.target.elements[0].value;
    if (!cityName) {
      return window.alert('城市名稱不可為空!');
    }
    console.log('====================================');
    console.log(`search weather info of city ${cityName}`);
    console.log('====================================');
    this.loadDataByCityName(cityName);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Open Weather App</h1>
          <p className="author">created by  <a href="https://github.com/xJkit" target="_blank" rel="noopener noreferrer" >@xJkit</a></p>
        </header>
        <div className="App-intro">
          <form onSubmit={this.handleFormSubmit}>
            <label className="form-input">
              <p>城市: </p>
              <input
                type="text"
                placeholder="請輸入城市名稱（英文）"
              />
            </label>
            <button className="submit-button" type="submit">查詢 OpenWeather</button>
          </form>
        </div>
        <WeatherBoard {...this.state} />
      </div>
    );
  }
}

export default App;
