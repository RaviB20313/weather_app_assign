import React, { useContext, useState, useEffect } from 'react';
import CityContext from "../context/cities/CityContext";

const CityItem = (props) => {
  const context = useContext(CityContext);
  const { deleteCity } = context;
  const { city } = props;
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=192e3aaf21ff4c0eaab95337240503&q=${city.name}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [city.name]);

  return (
    <div className='col-md-3'>
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{city.name}</h5>
            <i className="fa-solid fa-trash-can mx-2" onClick={() => { deleteCity(city.name) }}></i>
          </div>
          <p>Temperature: {loading ? 'Loading...' : error ? 'Error' : `${weatherData?.current.temp_c}°C`}</p>
          <p>Humidity: {loading ? 'Loading...' : error ? 'Error' : `${weatherData?.current.humidity}%`}</p>
          {/* Display additional city information if necessary */}
        </div>
      </div>
    </div>
  );
};

export default CityItem;
