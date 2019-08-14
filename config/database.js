var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights',
    {
        useNewUrlParser: true,
        useCreateIndex: true
    }
);


mongoose.connection.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});