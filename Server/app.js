//modules
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

//app
const app = express();

//db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log("DB CONNECTION ERROR", err);
  });

//middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

//routes
const testRouteS = require("./routes/test");
app.use("/", testRouteS);

//port
const port = process.env.PORT || 5000;

//Listener
const server = app.listen(port, () =>
  console.log(`server is running on port ${port}`)
);
