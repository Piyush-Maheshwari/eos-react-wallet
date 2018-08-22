const Validator = require("validator");
const isEmpty = require("./isEmpty");
module.exports = function validateTransferInput(data) {
  let errors = {};

  data.to = !isEmpty(data.to) ? data.to : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.tokens = !isEmpty(data.tokens) ? data.tokens : "";

  if (!Validator.isEmail(data.to)) {
    errors.to = "email is invalid";
  }
  if (Validator.isEmpty(data.to)) {
    errors.to = "email is required";
  }
  if (
    !Validator.isLength(data.password, {
      min: 6,
      max: 30
    })
  ) {
    errors.password = "password must be 6 character long";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "password is required";
  }
  if (Validator.isEmpty(data.tokens)) {
    errors.tokens = "Token Value is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
