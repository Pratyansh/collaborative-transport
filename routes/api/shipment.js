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
      dispatchDate: req.body.dispatchDate
    });
    return res.status(200).json(newShipment);
  }
});

// @route POST api/shipment/list
// @desc Login user and return JWT token
// @access Public
// router.post("/get-shipment-list", (req, res) => {
//   // Form validation

//   const { errors, isValid } = validateLoginInput(req.body);

//   // Check validation
//   if (!isValid) {
//     return res.status(400).json(errors);
//   }

//   const email = req.body.email;
//   const password = req.body.password;

//   // Find user by email
//   User.findOne({ email }).then(user => {
//     // Check if user exists
//     if (!user) {
//       return res.status(404).json({ emailnotfound: "Email not found" });
//     }

//     // Check password
//     bcrypt.compare(password, user.password).then(isMatch => {
//       if (isMatch) {
//         // User matched
//         // Create JWT Payload
//         const payload = {
//           id: user.id,
//           name: user.name
//         };

//         // Sign token
//         jwt.sign(
//           payload,
//           keys.secretOrKey,
//           {
//             expiresIn: 31556926 // 1 year in seconds
//           },
//           (err, token) => {
//             res.json({
//               success: true,
//               token: "Bearer " + token
//             });
//           }
//         );
//       } else {
//         return res
//           .status(400)
//           .json({ passwordincorrect: "Password incorrect" });
//       }
//     });
//   });
// });

module.exports = router;