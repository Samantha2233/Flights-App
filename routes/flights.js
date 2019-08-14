const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flights');

// Get the new flight page
router.get('/new', flightsController.newFlight);

module.exports = router;
