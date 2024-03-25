const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.userId = decoded.id; // Assuming id is included in the JWT payload
    next();
  } catch (err) {
    console.error("Token verification error:", err);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = auth;
