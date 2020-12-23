const Validator = require("validator");
const isEmpty = require("is-empty");
const moment = require('moment');

module.exports = function validateNewShipmentInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.destination = !isEmpty(data.destination) ? data.destination : "";
  data.availableSpace = !isEmpty(data.availableSpace) ? data.availableSpace : "";
  data.filledSpace = !isEmpty(data.filledSpace) ? data.filledSpace : "";
  data.dispatchDate = !isEmpty(data.dispatchDate) ? data.dispatchDate : "";

  // Destination checks
  if (Validator.isEmpty(data.destination)) {
    errors.destination = "Destination field is required";
  }

  // availableSpace checks
  if (Validator.isEmpty(data.availableSpace)) {
    errors.availableSpace = "Free Space field is required";
  }

  // FilledSpace checks
  if (Validator.isEmpty(data.filledSpace)) {
    errors.filledSpace = "Free Space field is required";
  }

  // DispatchDate Checks
  if (!moment(data.dispatchDate,"YYYY/MM/DD",true).isValid()) {
    errors.dispatchDate = "Enter a valid date";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
