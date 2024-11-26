const mongoose = require('mongoose');

const SkiBootSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  size: { 
    type: Number,
    required: true
  },
  length: { 
    type: Number,
    required: true
  },
  width: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  available: { 
    type: Boolean,
    default: true
  },
  image: {
    type: String
  },
  rating: { 
    type: Number,
    min: 0,
    max: 5, 
    default: 0 
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = SkiBoots = mongoose.model('SkiBoot', SkiBootSchema);