const express = require('express');
const Workout=require('../models/workoutModel');
const {
     createWorkout,
     getWorkout,
     getWorkouts,
     deleteWorkout,
     updateWorkout
     } = require('../controllers/workoutController');

const requireAuth=require('../middleware/requireAuth')
const router = express.Router();
router.use(requireAuth) //because we wanna protect everything below

//get all workouts

router.get('/',getWorkouts)

// Get a single workout
router.get('/:id', getWorkout);

// Post a new workout
router.post('/',createWorkout)

// Delete a particular workout with a given id
router.delete('/:id', deleteWorkout);

// Update a workout
router.patch('/:id',updateWorkout);

module.exports = router;
