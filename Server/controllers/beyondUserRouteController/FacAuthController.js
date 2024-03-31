const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Faculty = require("../../model/Faculty");

async function register(req, res) {
  const { username, password, email, role } = req.body;

  try {
    // Check if username already exists
    const existingFaculty = await Faculty.findOne({ username });
    if (existingFaculty) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new faculty user
    const faculty = new Faculty({
      username,
      password: hashedPassword,
      email,
      role,
    });

    // Save the faculty user to the database
    await faculty.save();

    res.status(201).json({ message: "Faculty registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// async function login(req, res) {
//   const { username, password } = req.body;

//   try {
//     const faculty = await Faculty.findOne({ username });

//     if (!faculty) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const isPasswordValid = await bcrypt.compare(password, faculty.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     const token = jwt.sign(
//       { username: faculty.username, role: faculty.role },
//       "secretKey",
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({ token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }
async function login(req, res) {
  const { username, password } = req.body;

  try {
    const faculty = await Faculty.findOne({ username });

    if (!faculty) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, faculty.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: faculty._id, username: faculty.username, role: faculty.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

const logout = (req, res) => {
  // You can simply clear the token from the client-side, as JWT tokens will become invalid once they expire
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = {
  register,
  login,
  logout,
};
