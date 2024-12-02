const express = require("express");
const router = express.Router();
const Rental = require("../../models/rental"); 

// POST route to create a rental
router.post("/", async (req, res) => {
  try {
    const { userId, itemName, location, deliveryDate, deliveryTime, paymentMethod, totalPrice } = req.body;

    const newRental = new Rental({
      userId,
      itemName,
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

router.delete('/', (req, res) => {
    Ski.findByIdAndDelete(req.params.id)
      .then(ski => res.json({ mgs: 'ski entry deleted successfully' }))
      .catch(err => res.status(404).json({ error: 'No such ski' }));
  });

router.delete("/:rentalId", async (req, res) => {
try {
    const { rentalId } = req.params;

    const rental = await Rental.findById(rentalId);
    if (!rental) {
    return res.status(404).json({ message: "Rental not found" });
    }

    // Delete the rental
    await Rental.findByIdAndDelete(rentalId);

    res.status(200).json({ message: "Rental deleted successfully" });
} catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete rental", error });
}
});


module.exports = router;
