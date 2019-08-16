const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flights');

// Get the new flight page
router.get('/new', flightsController.newFlight);

// Index all flights page
router.get('/', flightsController.index);

// Create a new flight
router.post('/', flightsController.create);

module.exports = router;
