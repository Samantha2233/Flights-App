const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    newFlight,
    index,
    create, 
    sort,
    show,
    newTicket,
    createTicket
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
        // flight.destinations.sort({arrival: 'asc'});
        Ticket.find({flight: flight._id}, function(err, tickets){
            // if (err) console.log(err);
            res.render(`flights/show`, {
                title: `Flight ${flight.flightNo}`,
                flight,
                tickets
            });
        });
    });
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render(`tickets/new`, {
            flight,
            title: 'New Ticket'
        });
    });
}

function createTicket(req, res, next) {
    req.body.flight = req.params.id;
    var ticket =  new Ticket(req.body);
    ticket.save(function(err){
        if(err) return res.render('flights');
        console.log(ticket);
        return next();
    });
}