const mongoose = require('mongoose');

const SnowboardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  type: { // Specify the type of snowboard (e.g., Freeride, Freestyle, All-Mountain)
    type: String,
    required: true
  },
  length: { // Length of the snowboard in centimeters
    type: Number,
    required: true
  },
  width: { // Width of the snowboard (e.g., Regular, Mid-wide, Wide)
    type: String,
    required: true
  },
  description: {
    type: String
  },
  available: { // Flag to indicate if the snowboard is available for rent
    type: Boolean,
    default: true
  },
  image: { // URL or path to an image of the snowboard
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Snowboard = mongoose.model('Snowboard', SnowboardSchema);
