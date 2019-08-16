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
        default: (function() {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var defaultDate = new Date(year + 1, month, day);
            return defaultDate.toLocaleString();
        })()
    }
}, {
    timestamps: true
});

// const departure

const destinationSchema = new Schema ({
    airport: String, 
    arrival: Date,
})

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight; 