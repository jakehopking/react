const express = require("express");
const router = express.Router();
const {check, validationResult} = require("express-validator/check");

const User = require("../models/User");

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  "/",
  [
    check("name", "please add a name").not().isEmpty(),
    check("email", "please provide a valid email address").isEmail(),
    check("password", "please enter a password with at least 8 chars").isLength({min: 8}),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }
    res.send("passed validation");
  }
);

module.exports = router;
