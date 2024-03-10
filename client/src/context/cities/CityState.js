import React, { useState } from "react";
import CityContext from "./CityContext";

const CityState = (props) => {
  const host = "http://localhost:5000";
  const citiesInitial = [];
  const [cities, setCities] = useState(citiesInitial);
  
  const deleteCity = async (cityName) => {
    const response = await fetch(`${host}/api/cities/deleteCity`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ city: cityName }) // Rename variable to avoid conflict
    });
    const json = await response.json(); 
    const newCities = json.cities; 
    setCities(newCities);
  };

  const getCities = async () => {
    // API call
    const response = await fetch(`${host}/api/cities/getcities`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json();
    setCities(json);
  };

  // Add a city
  const addCity = async (cityName) => {
    // TODO: API call
    const response = await fetch(`${host}/api/cities/addCity`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ city: cityName }) // Rename variable to avoid conflict
    });
    const newCity = await response.json();
    setCities([...cities, newCity]);
  };

  return (
    <CityContext.Provider value={{ cities, addCity, deleteCity, getCities }}>
      {props.children}
    </CityContext.Provider>
  );
};

export default CityState;
