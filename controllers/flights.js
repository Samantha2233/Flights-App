const Flight = require('../models/flight');

module.exports = {
    newFlight
}


function newFlight(req, res) {
    res.render('flights/new', { title: 'flights#new' });
}

