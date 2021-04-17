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

module.exports = router;

