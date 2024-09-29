const express = require('express');
const User = require('../models/userAndAddressModel');

const router = express.Router();

// Route to handle form submission
router.post('/register', async (req, res) => {
  try {
    const { name, address } = req.body;

    // Check if a user with the given name already exists
    let user = await User.findOne({ name });

    if (user) {
      // If user exists, add the new address to the addresses array
      user.addresses.push({ address });
      await user.save();
      res.status(200).send("Address added to existing user");
    } else {
      // If user doesn't exist, create a new user with the address
      user = new User({
        name,
        addresses: [{ address }],
      });
      await user.save();
      res.status(200).send("User and Address added successfully");
    }
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

module.exports = router;
