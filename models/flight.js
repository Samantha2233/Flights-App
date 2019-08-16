const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
       type: String,
       enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: {
        type: Date,
    }
})

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
        default: function() {
            var date = new Date();
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var defaultDate = new Date(year + 1, month, day);
            return defaultDate.toLocaleString();
        }
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

// const departure



const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight; 