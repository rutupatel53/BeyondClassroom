// //modules
// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
// // const multer = require('multer');
const getAllProblemsRoute = require("./routes/userRoutes/getAllProblemsRoute");
const getUserRoute = require("./routes/userRoutes/getUserRoute");
// const signupRoute = require("./routes/userRoutes/signupRoute");
// const loginRoute = require("./routes/userRoutes/loginRoute");
const getProblemRoute = require("./routes/userRoutes/getProblemRoute");
const runCodeRoute = require("./routes/userRoutes/runCodeRoute");
const checkProblemRoute = require("./routes/userRoutes/checkProblemRoute");
const leaderBoardRoute = require("./routes/userRoutes/leaderBoardRoute");

// Import admin routes
const addProblemRoute = require("./routes/adminRoutes/addProblemRoute");
const editProblemRoute = require("./routes/adminRoutes/editProblemRoute");
const projectAddRoutes = require("./routes/adminRoutes/projectaddRoute"); //////////
const softwareRoutes = require("./routes/projectRoutes/softwareRoute");
const hardwareRoutes = require("./routes/projectRoutes/hardwareRoute");
const userRoute = require("./routes/beyondUserRoutes/userRout");
const alluserRoute = require("./routes/beyondUserRoutes/getUserRoute");
const facultyRoute = require("./routes/beyondUserRoutes/facultyRoute");
const eventRoute = require("./routes/eventRoutes/eventRoute");
// //app
const app = express();
// //db
// Connect to MongoDB database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // Start listening on specified port
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server is running on port", process.env.PORT || 5000);
    });
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(morgan("dev")); // Logging HTTP requests to console
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads")); // Serving uploaded files

// Log requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/software", softwareRoutes);
app.use("/api/hardware", hardwareRoutes); //
app.use("/user", userRoute); //
app.use("/all", alluserRoute);
app.use("/faculty", facultyRoute); //
app.use("/project", projectAddRoutes); ///////////
app.use("/add", eventRoute); //
app.use("/api", getUserRoute); //
// app.use("/api", signupRoute);
// app.use("/api", loginRoute);
app.use("/api", getAllProblemsRoute); //
app.use("/api", getProblemRoute); //
app.use("/api", runCodeRoute); //
app.use("/api", checkProblemRoute); //
app.use("/api", leaderBoardRoute); //
app.use("/admin", addProblemRoute); //
app.use("/admin", editProblemRoute); //

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});
