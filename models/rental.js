const mongoose = require("mongoose");

const RentalSchema = new mongoose.Schema({
  userId: { 
    type: String,
    required: true 
  },
  itemName: { 
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
    type: String,
    required: true 
  },
  paymentMethod: { 
    type: String, 
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
