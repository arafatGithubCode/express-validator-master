const { check } = require("express-validator");

exports.registerValidator = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("Name is missing")
    .isLength({ min: 4 })
    .withMessage("Minimum length of name should be 4 characters")
    .isLength({ max: 20 })
    .withMessage("Maximum length of name should be less than 20 characters"),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is missing")
    .isEmail()
    .withMessage("Not a valid email"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password is missing")
    .isLength({ min: 8 })
    .withMessage(
      "Minimum length of password should be greater then 8 characters"
    ),
  check("dob")
    .trim()
    .notEmpty()
    .withMessage("Date of birth is missing")
    .isISO8601()
    .toDate()
    .withMessage("Not a valid date of birth"),
];

exports.loggedInValidator = [
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is missing")
    .isEmail()
    .withMessage("Not a valid email"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password is missing")
    .isLength({ min: 8 })
    .withMessage(
      "Minimum length of password should be greater then 8 characters"
    ),
];
