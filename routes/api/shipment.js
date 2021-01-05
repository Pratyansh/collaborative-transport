const express = require("express");
const router = express.Router();

// Load input validation
const validateNewShipmentInput = require("../../validation/newshipment");

// Load Shipment model
const Shipment = require("../../models/Shipment");

// @route POST api/shipment/add
// @desc Add shipment
// @access Public
router.post("/add", (req, res) => {
  // Form validation

  const { errors, isValid } = validateNewShipmentInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    const newShipment = new Shipment({
      destination: req.body.destination,
      filledSpace: req.body.filledSpace,
      availableSpace: req.body.availableSpace,
      dispatchDate: req.body.dispatchDate,
    });
    newShipment
      .save()
      .then((shipment) => res.json(shipment))
      .catch((err) => console.log(err));
  }
});

// @route POST api/shipment/list
// @desc Login user and return JWT token
// @access Public
router.post("/list", (req, res) => {
  Shipment.find({})
    .then((shipment) => res.json(shipment))
    .catch((err) => console.log(err));
});

module.exports = router;
