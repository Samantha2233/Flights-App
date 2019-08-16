const Flight = require('../models/flight');

module.exports = {
    newFlight,
    index,
    create
}


function newFlight(req, res) {
    res.render('flights/new', { title: 'flights#new' });
}


function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { title: 'All Flights', flights });
    });
}

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err){
        res.redirect('/flights');
    })
}