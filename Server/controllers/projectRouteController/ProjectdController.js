const { response } = require("express");
const Pdata = require("../../model/software");
const mongoose = require("mongoose");

//show project details
const index = (req, res, next) => {
  Pdata.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

//single project
const show = (req, res, next) => {
  let projectID = req.body.projectID;
  Pdata.findById(projectID)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

//store project info

const store = (req, res, next) => {
  let projectd = new Pdata({
    title: req.body.title,
    description: req.body.description,
    url: req.body.link,
  });
  if (req.file) {
    projectd.image = req.file.path;
  }
  projectd
    .save()

    .then((response) => {
      res.json({
        message: "project details add successfully",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error Occured!",
      });
    });
};

//to update project
const update = (req, res, next) => {
  let projectID = req.body.projectID;
  let updatedData = {
    title: req.body.title,
    description: req.body.description,
    url: req.body.link,
  };
  Pdata.findByIdAndUpdate(projectID, { $set: updatedData })
    .then(() => {
      res.json({
        message: "Project updated successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

//delete project details
const destroy = (req, res, next) => {
  let projectID = req.body.projectID;
  Pdata.findByIdAndDelete(projectID)
    .then(() => {
      res.json({
        message: "Project deleted successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error Occured!",
      });
    });
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
