const mongoose = require('mongoose');

const SkiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  type: { // Specify the type of ski (e.g., All-mountain, Freeride, Freestyle)
    type: String,
    required: true
  },
  length: { // Length in centimeters
    type: Number,
    required: true
  },
  widthWaist: { // Width of the ski at its narrowest point
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  available: { // Flag to indicate if the ski is available for rent
    type: Boolean,
    default: true
  },
  image: { // URL or path to an image of the ski
    type: String
  },
  rating: { // Rating out of 5
    type: Number,
    min: 0, // Minimum rating
    max: 5, // Maximum rating
    default: 0 // Default value
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Ski = mongoose.model('Ski', SkiSchema);