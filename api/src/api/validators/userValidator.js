const { check } = require("express-validator");

const registerValidation = [
  // notEmpty() to ensure they are not empty,
  // trim() to remove extra whitespace
  // escape() to prevent potential security risks such as cross-site scripting (XSS) attacks
  // normalizeEmail() to standardize the email address format,
  check("firstName", "First name is required").notEmpty().trim().escape(),
  check("lastName", "Last name is required").notEmpty().trim().escape(),
  check("email", "Please include a valid email").isEmail().normalizeEmail(),
  check(
    "password",
    "Please enter a password with 8 or more characters"
  ).isLength({ min: 8 }),
  check("location", "Location is required").notEmpty().trim().escape(),
];

const loginValidation = [
  check("email", "Please include a valid email").isEmail(),
  check("password", "Password is required").exists(),
];

module.exports = {
  registerValidation,
  loginValidation,
};
