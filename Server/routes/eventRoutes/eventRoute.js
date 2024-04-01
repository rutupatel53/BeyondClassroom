const express = require("express");
const router = express.Router();
const {
  createEvent,
  getAllEvents,
} = require("../../controllers/eventRouteController/eventController");
const auth = require("../../middleware/auth");
const checkAdmin = require("../../middleware/checkAdmin");
// Route for creating a new event // and only acess by admin
router.post("/events", auth, checkAdmin, createEvent);

// Route for fetching all events
router.get("/events", auth, getAllEvents);

module.exports = router;
