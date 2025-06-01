const jwt = require("jsonwebtoken");
const secretKey = require("../lib/jsonWebToken").secretKey; // Import the secret key from your JWT library

const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send({ message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Extract the token

  try {
    const decoded = jwt.verify(token, secretKey); // Validate the token
    req.user = decoded; // Attach decoded user data to request
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(403).send({ message: "Invalid or expired token" });
  }
};

module.exports = authenticateUser;
