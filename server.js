var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Konfiguracja bazy danych
const dbConfig = require('./app/config/mongodb.config');
const mongoose = require('mongoose');

const Przepis = require('./app/models/przepis.model');

mongoose.Promise = global.Promise;

// Połączenie z bazą danych
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("Successfully connected to MongoDB.");
    }).catch(err => {
        console.log('Could not connect to MongoDB.');
        console.log(err);
        process.exit();
    });

require('./app/routes/przepis.router')(app);
// Tworzymy server
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("App listening at http://%s:%s", host, port);
})    