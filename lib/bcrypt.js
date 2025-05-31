const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  console.log("Hashed Password:", hash);
};

const verifyPassword = async (password, hash) => {
  const isMatch = await bcrypt.compare(password, hash);
  console.log("Password Match:", isMatch);
};

// Example usage
hashPassword("mySecretPassword").then((hash) =>
  verifyPassword("mySecretPassword", hash)
);
