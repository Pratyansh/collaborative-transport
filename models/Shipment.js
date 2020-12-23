const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ShipmentSchema = new Schema({
  destination: {
    type: String,
    required: true
  },
  dispatchDate: {
    type: Date,
    required: true
  },
  availableSpace: {
    type: String,
    required: true
  },
  filledSpace: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Shipment = mongoose.model("shipments", ShipmentSchema);
