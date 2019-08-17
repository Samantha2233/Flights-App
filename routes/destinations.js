var express = require('express');
// factory function returns an object --> Router() --> without New
var router = express.Router();

var destinationsController = require('../controllers/destinations');

// create a new destination
router.post('/flights/:id/destinations', destinationsController.create);

//Sort by date
// router.get('/', destinationsController.sort);

module.exports = router;