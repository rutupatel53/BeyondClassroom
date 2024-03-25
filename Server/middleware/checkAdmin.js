const Faculty = require("../model/Faculty");

const checkFaculty = async (req, res, next) => {
  try {
    // Ensure req.userId exists and is valid
    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Get user by ID from decoded token
    const user = await Faculty.findById(req.userId);

    // Check if user exists and has faculty role
    if (!user || user.role !== "faculty") {
      return res.status(403).json({ message: "Forbidden" });
    }

    next(); // User is faculty, proceed to next middleware
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = checkFaculty;
