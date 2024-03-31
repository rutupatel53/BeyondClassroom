const User = require("../../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = (req, res, next) => {
  // Hash the password asynchronously
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      // If an error occurs during hashing, send an error response
      return res.status(500).json({
        error: err.message, // Pass the error message
      });
    }
    // Create a new user object with hashed password
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPass,
    });
    // Save the user to the database
    user
      .save()
      .then((savedUser) => {
        // If user is successfully saved, send success response
        return res.status(201).json({
          message: "User added successfully!",
          user: savedUser, // Optionally, you can send the saved user data
        });
      })
      .catch((error) => {
        // If an error occurs during saving, send an error response
        return res.status(500).json({
          message: "An error occurred while saving user.", // Provide a clear message
          error: error.message, // Pass the error message
        });
      });
  });
};

// const login = (req, res, next) => {
//   var username = req.body.username;
//   var password = req.body.password;

//   User.findOne({ $or: [{ email: username }, { phone: username }] }).then(
//     (user) => {
//       if (user) {
//         bcrypt.compare(password, user.password, function (err, result) {
//           if (err) {
//             res.json({
//               error: err,
//             });
//           }
//           if (result) {
//             let token = jwt.sign({ name: user.name }, "thesecrettoken", {
//               expiresIn: "23h",
//             });
//             let refreshtoken = jwt.sign(
//               { name: user.name },
//               "fefreshtoensecret",
//               { expiresIn: "48h" }
//             );
//             res.json({
//               message: "Login Successful!",
//               token,
//               refreshtoken,
//             });
//           } else {
//             res.json({
//               message: "Password does not matched!",
//             });
//           }
//         });
//       } else {
//         res.json({
//           message: "No user found!",
//         });
//       }
//     }
//   );
// };
const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // Find user by username (assuming username can be either email or phone)
    const user = await User.findOne({
      $or: [{ email: username }, { phone: username }],
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if password matches
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Sign JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Optionally, you can also generate a refresh token here if needed

    // Send token in response
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const logout = (req, res) => {
  // You can simply clear the token from the client-side, as JWT tokens will become invalid once they expire
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = {
  register,
  login,
  logout,
};
