// server.js

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Import routes
//workout routes
const workoutRoutes = require('./routes/workouts');
//user routes
const userRoutes=require('./routes/user')

const app = express();

// Middleware to pass JSON data
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next(); // Move onto the next middleware
});

// Routes - attaches all the routes in the app
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// Connect to the database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });
