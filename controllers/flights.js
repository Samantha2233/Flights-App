const Flight = require('../models/flight');

module.exports = {
    newFlight,
    index,
    create, 
    sort,
    show
}


function newFlight(req, res) {
    res.render('flights/new', { title: 'Schedule a Flight' });
}


function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', { 
            title: 'All Flights', 
            flights 
        });
    });
}


function create(req, res) {
    for(let key in req.body) {
        if(req.body[key] === "") delete req.body[key];
    }
    var flight = new Flight(req.body);
    flight.save(function(err){
        if (err) console.log(err);
        res.redirect('/flights');
    })
}


function sort(req, res) {
    Flight.find({}).sort({ departs: 'asc' }).exec(function(err, flights) {
        res.render('flights/sort', { title: 'All Flights', flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show', { title: 'Flight Detail', flight });
    });
}