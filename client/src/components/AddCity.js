import React, { useContext, useState } from 'react';
import CityContext from '../context/cities/CityContext';

const AddCity = () => {
    const context = useContext(CityContext);
    const { addCity } = context;
    const [cityName, setCityName] = useState('');
    const handleClick = (e) => {
        e.preventDefault();
        addCity(cityName);
        setCityName('');
    }
    const onChange = (e) => {
        setCityName(e.target.value);
    }
    return (
        <>
            <div className="container my-3">
                <h2>Add a City</h2>
                <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">City Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={cityName} onChange={onChange} minLength={2} required />
                    </div>
                    <button disabled={cityName.length < 2} type="submit" className="btn btn-primary" onClick={handleClick}>Add City</button>
                </form>
            </div>
        </>
    );
};

export default AddCity;
