// models/Faculty.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const facultySchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: {
      type: String,
      enum: ["faculty", "hod", "principal"],
      required: true,
    },
  },
  { timestamps: true }
);

const Faculty = mongoose.model("Faculty", facultySchema);

module.exports = Faculty;
