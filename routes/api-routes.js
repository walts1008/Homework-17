const db = require("../models");

module.exports = function(app) {

    // * Get all exercise data
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workoutDB => {
            res.json(workoutDB);
        })
        .catch(err => {
            res.json(err);
        });
    });
    
    // * Get last exercise
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workoutDB => {
            res.json(workoutDB);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // * Add exercises to a previous workout plan.
    // app.put("api/workouts/:id", (req, res) => {
    //     db.Workout.update(
    //      { _id: mongojs.ObjectId(req.params.id) },
    //      {$push : { Workout: req.params.body}}        
    //     );
    //   });

    // * Add new exercises to a new workout plan.
    app.post("/api/workouts", (req, res)=> {
        console.log(req.body);
        db.Workout.create(req.body)
        .then(workoutDB => {
          res.json(workoutDB);
          console.log(workoutDB);
        })
        .catch(err => {
          res.json(err);
        });
    })

    // * View multiple the combined weight of multiple exercises on the `stats` page.
    // app.get()

    // * Submit Workout Data
    app.post("/submit", ({ body }, res) => {
        const workout = new Workout(body);
        db.create(workout)
          .then(workoutDB => {
            res.json(workoutDB);
            console.log(workoutDB);
          })
          .catch(err => {
            res.json(err);
          });
      });

};