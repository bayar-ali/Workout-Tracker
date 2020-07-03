
const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;

const excersiceSchema = new Schema([
    {
        workout: {
            type: Date,
            default: Date.now
        }
    },
    {
        excercises:
        [
            {
                exerciseType: String,
                name: String,
                duration: Number,
                weight: Number,
                reps: Number,
                sets: Number,
                distance: Number
            }
        ]
    }
]); 

const Workout = mongoose.model("Workout", excersiceSchema);

module.exports = Workout