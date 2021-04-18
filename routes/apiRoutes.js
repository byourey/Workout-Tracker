const db = require("../models");
const router = require("express").Router();

// getting workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch((err) =>{
        res.json(err);
    });
    
});

// Creating new workouts
router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;

