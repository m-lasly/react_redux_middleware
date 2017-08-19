import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

import Chart from '../components/chart';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    return (
      <tr key={name}>
        <td>
          {name}
        </td>
        <td>
          <Chart  data={temps} color="orange" units="K" />
            </td>
            <td>
          <Chart  data={pressure} color="red" units="pHa" />
          </td>
          <td>
          <Chart  data={humidity} color="green" units="%" />
        </td>

      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Himidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToprops({weather}) {
  return {weather}; // return {weather: state.weather}
}

export default connect(mapStateToprops)(WeatherList);
