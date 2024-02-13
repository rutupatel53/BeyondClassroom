// //modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
// // const multer = require('multer');
const workoutRoutes = require("./routes/test");
require("dotenv").config();

// //app
const app = express();
// //db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
    console.log("connected db");
  })
  .catch((error) => {
    console.log(error);
  });

//middleware
//for json data
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//routes
app.use("/api/test", workoutRoutes);

//port
const port = process.env.PORT || 5000;
