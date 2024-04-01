const Event = require("../../model/event");

// Controller for handling POST request to create a new event
const createEvent = async (req, res) => {
  try {
    const { title, time, description } = req.body;
    const newEvent = new Event({
      title,
      time,
      description,
    });
    await newEvent.save();
    res
      .status(201)
      .json({ message: "Event created successfully", event: newEvent });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller for handling GET request to fetch all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
};
