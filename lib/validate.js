const allowedRoles = ["donor", "recipient", "admin"];

const validateRole = (req, res, next) => {
  const { role } = req.body;
  if (!allowedRoles.includes(role)) {
    return res.status(400).send({
      message: "Invalid role. Allowed values: " + allowedRoles.join(", "),
    });
  }
  next();
};

module.exports = {
  validateRole,
};
