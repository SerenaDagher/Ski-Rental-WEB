const express = require("express");
const router = express.Router();
const Rental = require("../../models/rental"); 

// POST route to create a rental
router.post("/", async (req, res) => {
  try {
    const { userId, itemId, location, deliveryDate, deliveryTime, paymentMethod, totalPrice } = req.body;

    const newRental = new Rental({
      userId,
      itemId,
      location,
      deliveryDate,
      deliveryTime,
      paymentMethod,
      totalPrice,
    });

    const savedRental = await newRental.save();
    res.status(201).json(savedRental);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create rental", error });
  }
});

// GET route to fetch rentals by user
router.get("/:userId", async (req, res) => {
  try {
    const rentals = await Rental.find({ userId: req.params.userId });
    res.status(200).json(rentals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch rentals", error });
  }
});

module.exports = router;
