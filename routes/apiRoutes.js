const router = require("express").Router();
const db = require("../models");

router.get('/workouts', (req, res) => {
   db.workouts.find({})
        .then(dbworkouts => {
            res.json(dbworkouts);
        })
        .catch(err => {
            res.json(err);
        });
});


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

router.get("/api/workouts/range", function(req, res) {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
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

