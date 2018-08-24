const express = require("express");
const router = express.Router();
const validateTransferInput = require("../../validation/transfer");
const config = require("./actions/config");
const transferAction = require("./actions/transfer.action");
// @route   GET api/users/Transfer
// @desc    Transfer Tokens
// @access  Public
router.post("/transfer", (req, res) => {
  const from = req.body.from;
  const to = req.body.to;
  const password = req.body.password;
  const amount = req.body.amount;
  const msg = req.body.message;
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
    //check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        config.then(eos => {
          transferAction(eos, from, to, amount, msg);
        });
      } else {
        return res.status(400).json({
          password: "Password Incorrect"
        });
      }
    });
  });
});
