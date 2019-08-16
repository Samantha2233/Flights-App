var exporess = require('express');
var router = express.Router();

var destinationsController = require('../controllers/destinations');


// create a new destination
router.post('/flights/:id/destinations', destinationsController.create);

module.exports = router;