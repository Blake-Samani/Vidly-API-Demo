const Joi = require('joi'); //adding joiobjectid here allows us to use it globally
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const express = require('express');

const app = express();
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');

mongoose.connect('mongodb://localhost/vidly') //vidly is name of our database
    .then(() => console.log('Connected to MongoDB..'))
    .catch(err => console.error('Could not connecto to MongoDb..', err));


app.use(express.json());
app.use('/api/genres', genres); //delegate router
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);


const port = process.env.PORT || 3000; //the the PORT environment variable has been set, we will use that, otherwise use 3000
app.listen(port, () => console.log(`Listening on port ${port}..`)); // when listening on port 3000, the lambda function will be called