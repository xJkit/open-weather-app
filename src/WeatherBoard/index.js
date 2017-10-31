import React from 'react';
import './style.css';

export default ({ temp, temp_max, temp_min, humidity, clouds, description, forecastTime, name }) => {
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
            <td>城市： {name || '沒有資料'}</td>
          </tr>
          <tr>
            <td>溫度： {temp ? `${temp} 度` : '沒有資料'}</td>
          </tr>
          <tr>
            <td>最高溫度： {temp_max ? `${temp_max} 度` : '沒有資料'}</td>
          </tr>
          <tr>
            <td>最低溫度： {temp_min ? `${temp_min} 度` : '沒有資料'}</td>
          </tr>
          <tr>
            <td>濕度： {humidity ? `${humidity}%` : '沒有資料'}</td>
          </tr>
          <tr>
            <td>Clouds: {clouds ? `${clouds}% (${description})` : '沒有資料'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}