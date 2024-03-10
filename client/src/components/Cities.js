import React, { useContext, useEffect } from 'react';
import CityContext from '../context/cities/CityContext';
import Cityitem from './Cityitem'; 
import AddCity from './AddCity';
import { useNavigate } from 'react-router-dom';

const Cities = () => {
    const context = useContext(CityContext);
    const { cities, getCities } = context;
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token')){
            getCities();
        } else {
            navigate('/login');
        }
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <AddCity />
            <div className="row my-3">
                <h2>Your Cities</h2>
                <div className="container mx-2"> 
                    {cities.length === 0 && 'No cities to display'}
                </div>
                {cities.map(city => (
                    <Cityitem key={city._id} city={city} /> // Changed from 'CityItem' to 'Cityitem'
                ))}
            </div>
        </>
    );
};

export default Cities;
