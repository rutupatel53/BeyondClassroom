const User = require("../../model/User");

const getUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json({
        message: "An error occurred while fetching users.",
        error: error.message,
      });
    });
};

module.exports = getUsers;
