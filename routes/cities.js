const express = require('express');
const router = express.Router();
const fetchuser = require('../middlewares/fetchuser');
const City = require('../models/City.js');
// const { body, validationResult } = require('express-validator');
// Routes
router.post('/addCity',fetchuser, async (req, res) => {
    userId = req.user.id;
    const city  = req.body.city;
    try {
        let existingCity = await City.findOne({ user: userId });
        if (!existingCity) {
            existingCity = new City({ user: userId });
        }
        existingCity.cities.push(city);
        const savedCity = await existingCity.save();
        res.json(savedCity);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.post('/deleteCity',fetchuser, async (req, res) => {
    userId = req.user.id;
    const city = req.body.city;
    try {
        const existingCity = await City.findOne({ user: userId });
        if (!existingCity) {
            return res.status(404).json({ message: "City not found" });
        }
        existingCity.cities = existingCity.cities.filter(c => c !== city);
        const savedCity = await existingCity.save();
        res.json(savedCity);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get('/getcities',fetchuser, async (req, res) => {
    userId = req.user.id;
    try {
        const city_ = await City.findOne({ user: userId });
        if (!city_) {
            return res.status(404).json({ message: "Cities not found for this user" });
        }
        res.json(city_.cities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;