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
  type: { 
    type: String,
    required: true
  },
  length: { 
    type: Number,
    required: true
  },
  width: { 
    type: String,
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
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Snowboard = mongoose.model('Snowboard', SnowboardSchema);
