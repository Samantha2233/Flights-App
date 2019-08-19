const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/tickets');


// router.get('/tickets/new', ticketsController.new);
router.post('/tickets', ticketsController.create);


module.exports = router;