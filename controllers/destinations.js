var Flight = require('../models/flight');

module.exports = {
    create,
    sort
};

function create(req, res) {
    // accessing Flight document to access the 
    // destinations property, which is an array 
    // and push in req.body --> destination doc from form
    // id is pulled from router
    // save parent document
    // update --> redirect to show route
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}


function sort(req, res) {
    // console.log('/////////// sort function ///////');
    Flight.destinations.find({}).sort({ arrival: 'asc' }).exec(function(err, flights) {
        res.render('destinations/sort');
    });
}