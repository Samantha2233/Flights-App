const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        // default: One year from date created
    }
})

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight; 