const express = require("express")
const router = express.Router();
const Workout = require("../models/exercise.js")
const path = require("path")


router.get("/exercise", (req, res) => {

  res.sendFile(path.join(__dirname, "..", "public", "exercise.html"));

})

router.get("/stats", (req, res) => {

  res.sendFile(path.join(__dirname, "..", "public", "stats.html"));

})

router.get("/api/workouts/range", async (req, res) => {

  try {
    const data = await Workout.find({});

    res.json(data)

  } catch (error) {
    console.log(error);

    res.send(error);
  }

}) 


router.get("/api/workouts", async (req, res) => {

  try {
    const data = await Workout.find({});

    res.json(data)

  } catch (error) {
    console.log(error);

    res.send(error);
  }

})  

// create workout
router.post("/api/workouts", async (req, res) => {
    
  try {
    const data = await Workout.create(req.body);


    res.json(data);

  } catch (error) {
    console.log(error);

    res.send(error);
  }

})  

// add exercise
router.put("/api/workouts/:id", async (req, res) => {

  try {

    const data = await Workout.findByIdAndUpdate({_id: req.params.id}, { $push: {exercises: req.body }}, { new: true });

    res.json(data);

  } catch (error) {
    console.log(error);

    res.send(error);
  }

})