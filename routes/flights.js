const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flights');

// Get the new flight page
router.get('/new', flightsController.newFlight);

// Index all flights page
router.get('/', flightsController.index);

// Create a new flight
router.post('/', flightsController.create);

//Sort by date
router.get('/sort', flightsController.sort);

// show details of one flight
router.get('/:id', flightsController.show);




router.get('/:id/tickets/new', flightsController.newTicket);
router.post('/:id/tickets', flightsController.createTicket, flightsController.show)
// router.delete('/:id', flightsController.delete);


module.exports = router;



