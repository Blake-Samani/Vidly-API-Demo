const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function () { //for initializing our databse
    mongoose.connect('mongodb://localhost/vidly') //vidly is name of our database
        .then(() => winston.info('Connected to MongoDB..')); //no need for .catch statement because winston will log the error for us
}