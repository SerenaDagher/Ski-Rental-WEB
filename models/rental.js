const mongoose = require("mongoose");

const RentalSchema = new mongoose.Schema({
  userId: { 
    type: String,
    required: true 
  },
  itemId: { 
    type: String,
    required: true 
  },
  location: { 
    type: String, 
    required: true 
  },
  deliveryDate: { 
    type: Date, 
    required: true 
  },
  deliveryTime: { 
    type: String, // You can also use `Date` for precise timestamps if needed
    required: true 
  },
  paymentMethod: { 
    type: String, 
    // enum: ["cash on delivery", "card", "whish"], // Limit allowed values
    required: true 
  },
  totalPrice: { 
    type: Number, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ["active", "completed", "cancelled"], 
    default: "active" 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
});

module.exports = mongoose.model("Rental", RentalSchema);
