const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET;
//node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

const generateToken = (payload) => {
  //return jwt.sign(payload, secretKey, { expiresIn: "1h" });
  return jwt.sign(payload, secretKey); // No expiresIn set
};
console.log(secretKey)
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    console.log("Verified Token:", decoded);
  } catch (error) {
    console.error("Invalid Token:", error.message);
  }
};

// Example usage
// const token = generateToken({ userId: 123 });
// console.log("Generated Token:", token);
// verifyToken(token);

module.exports = {
  generateToken,
  verifyToken,
  secretKey, // Export the secret key if needed elsewhere
};
