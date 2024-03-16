const jwt = require("jsonwebtoken");

function facauthenticate(role) {
  return (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    jwt.verify(token.split(" ")[1], "secretKey", (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      if (role && decoded.role !== role) {
        return res.status(403).json({ message: "Forbidden" });
      }

      req.user = decoded;
      next();
    });
  };
}

module.exports = facauthenticate;
