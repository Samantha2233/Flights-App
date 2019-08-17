var express = require('express');
// factory function returns an object --> Router() --> without New
var router = express.Router();

var destinationsController = require('../controllers/destinations');

// create a new destination
router.post('/flights/:id/destinations', destinationsController.create);

//Sort by arrivals date
router.get('flights/:id/destinations', destinationsController.sort);

module.exports = router;