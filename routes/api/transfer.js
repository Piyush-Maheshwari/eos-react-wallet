const express = require("express");
const router = express.Router();
const validateTransferInput = require("../../validation/transfer");
const eos = require("./actions/config");
const transferAction = require("./actions/transfer.action");
// @route   GET api/users/Transfer
// @desc    Transfer Tokens
// @access  Public
router.post("/transfer", (req, res) => {
  const to = req.body.to;
  const password = req.body.password;
  const tokens = req.body.tokens;
  const { errors, isValid } = validateTransferInput(req.body);
  //check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({
    email: to
  }).then(user => {
    if (!user) {
      errors.to = "User not Found";
      return res.status(404).json(errors);
    }
    //checl Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //user match
        //create JWT Payload
      } else {
        return res.status(400).json({
          password: "Password Incorrect"
        });
      }
    });
  });
});
