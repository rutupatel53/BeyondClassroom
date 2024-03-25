const Recommendation = require("../../model/recommendation");
const mongoose = require("mongoose");
// Controller function to handle form submission
const submitForm = (req, res, next) => {
  // try {
  //     // Extract data from request body
  //     const {
  //         username,
  //         academicInterest,
  //         preferredLearningStyle,
  //         grade,
  //         subjectsOfInterest,
  //         extraActivity,
  //         learningMaterials,
  //         previousCourse,
  //         goal,
  //         feedback
  //     } = req.body;

  //     // Create new recommendation object
  //     const recommendation = new Recommendation({
  //         username,
  //         academicInterest,
  //         preferredLearningStyle,
  //         grade,
  //         subjectsOfInterest,
  //         extraActivity,
  //         learningMaterials,
  //         previousCourse,
  //         goal,
  //         feedback
  //     });

  //     // Save recommendation to database
  //     await recommendation.save();

  //     res.status(201).json({ message: 'Recommendation form submitted successfully.' });
  // } catch (error) {
  //     console.error('Error submitting recommendation form:', error);
  //     res.status(500).json({ error: 'Internal server error' });
  // }
  const recommendation = new Recommendation({
    username: req.body.username,
    academicInterest: req.body.academicInterest,
    preferredLearningStyle: req.body.preferredLearningStyle,
    grade: req.body.grade,
    subjectsOfInterest: req.body.subjectsOfInterest,
    extraActivity: req.body.extraActivity,
    learningMaterials: req.body.learningMaterials,
    previousCourse: req.body.previousCourse,
    goal: req.body.goal,
    feedback: req.body.feedback,
  });
  recommendation
    .save()
    .then((response) => {
      res.json({
        message: "Recommendation added Successfull!",
        recommendation: response,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error occured!",
      });
    });
};

module.exports = { submitForm };
