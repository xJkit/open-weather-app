import React from 'react';
import './style.css';

export default ({ temp, temp_max, temp_min, humidity, clouds, description, forecastTime }) => {
  return (
    <div className="weather-board">
      <table className="weather-table">
        <thead>
          <tr>
            <th className="title">forecastTime: {forecastTime}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>temperature: {temp ? `${temp} 度` : '沒有資料'}</td>
          </tr>
          <tr>
            <td>max temperature: {temp_max ? `${temp_max} 度` : '沒有資料'}</td>
          </tr>
          <tr>
            <td>min temperature: {temp_min ? `${temp_min} 度` : '沒有資料'}</td>
          </tr>
          <tr>
            <td>humidity: {humidity ? `${humidity}%` : '沒有資料'}</td>
          </tr>
          <tr>
            <td>clouds: {clouds ? `${clouds}% (${description})` : '沒有資料'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}