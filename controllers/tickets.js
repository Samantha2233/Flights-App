var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

module.exports = {
    // new: newTicket,
    create

};



function create(req, res) {
    // Ticket.create(req.body, function(err, ticket) {
        res.redirect('/flights/show');
    // })
}


// lesson example

// function newTicket(req, res){
//     res.render('tickets/new', { title:'Add Ticket' });
// }

// function create(req, res) {
//     res.redirect('/flights/new');
// }