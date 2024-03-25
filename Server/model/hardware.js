const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HardwareProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    url: { type: String, required: false },
  },
  { timestamps: true }
);
//we define model here
module.exports = mongoose.model("Hprodata", HardwareProjectSchema);
