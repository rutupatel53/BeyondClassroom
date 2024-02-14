const mongoose = require('mongoose');
const Schema= mongoose.Schema
// Define schema
const recommendationSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    academicInterest: {
        type: [String],
        required: true
    },
    preferredLearningStyle: {
        type: String,
        enum: ['Visual', 'Auditory', 'Kinesthetic', 'Reading/Writing'],
        required: true
    },
    grade: {
        type: Number,
        min: 1,
        max: 12,
        required: true
    },
    subjectsOfInterest: {
        type: [String],
        required: true
    },
    extraActivity: {
        type: String
    },
    learningMaterials: {
        type: String
    },
    previousCourse: {
        type: String
    },
    goal: {
        type: String
    },
    feedback: {
        type: String
    }
});

// Create model
const Recommendation = mongoose.model('Recommendation', recommendationSchema);

module.exports = Recommendation;
