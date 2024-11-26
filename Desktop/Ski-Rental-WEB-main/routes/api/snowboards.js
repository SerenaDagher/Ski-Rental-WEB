const express = require('express');
const router = express.Router();

const Snowboard = require('../../models/snowboard'); // Assuming you have a Snowboard model

// Test route
router.get('/test', (req, res) => res.send('snowboard route testing!'));

// Get all snowboards
router.get('/', (req, res) => {
  Snowboard.find()
    .then(snowboards => res.json(snowboards))
    .catch(err => res.status(404).json({ nosnowboardsfound: 'No snowboards found' }));
});

// Get a single snowboard by ID
router.get('/:id', (req, res) => {
  Snowboard.findById(req.params.id)
    .then(snowboard => res.json(snowboard))
    .catch(err => res.status(404).json({ nosnowboardfound: 'No snowboard found' }));
});

router.get('/availability/:status', (req, res) => {
  const isAvailable = req.params.status === 'true';

  Snowboard.find({ available: isAvailable })
    .then(snowboards => {
      if (snowboards.length > 0) {
        res.json(snowboards); 
      } else {
        res.status(404).json({ message: 'No snowboards found with the specified availability status' });
      }
    })
    .catch(err => res.status(500).json({ error: 'Server error', details: err.message }));
});

// Get snowboards by availability status
router.get('/availability/:status', (req, res) => {
  const isAvailable = req.params.status === 'true';

  Snowboard.find({ available: isAvailable })
    .then(snowboards => {
      if (snowboards.length > 0) {
        res.json(snowboards); 
      } else {
        res.status(404).json({ message: 'No snowboards found with the specified availability status' });
      }
    })
    .catch(err => res.status(500).json({ error: 'Server error', details: err.message }));
});

// Add a new snowboard
router.post('/', (req, res) => {
  Snowboard.create(req.body)
    .then(snowboard => res.json({ msg: 'Snowboard added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this snowboard' }));
});

// Update a snowboard
router.put('/:id', (req, res) => {
  Snowboard.findByIdAndUpdate(req.params.id, req.body)
    .then(snowboard => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// Delete a snowboard by ID
router.delete('/:id', (req, res) => {
  Snowboard.findByIdAndDelete(req.params.id)
    .then(snowboard => res.json({ msg: 'Snowboard entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such snowboard' }));
});

module.exports = router;
