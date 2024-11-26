
const express = require('express');
const router = express.Router();


const SnowboardBoot = require('../../models/snowboardBoot');


router.get('/test', (req, res) => res.send('snowboardBoots route testing!'));

router.get('/', (req, res) => {
  SnowboardBoot.find()
    .then(snowboardBoots => res.json(snowboardBoots))
    .catch(err => res.status(404).json({ nosnowboardbootsfound: 'No snowboardBoots found' }));
});


router.get('/:id', (req, res) => {
  SnowboardBoot.findById(req.params.id)
    .then(snowboardBoot => res.json(snowboardBoot))
    .catch(err => res.status(404).json({ nosnowboardbootsfound: 'No snowboardBoots found' }));
});

router.get('/availability/:status', (req, res) => {
  const isAvailable = req.params.status === 'true';

  SnowboardBoot.find({ available: isAvailable })
    .then(snowboardBoots => {
      if (snowboardBoots.length > 0) {
        res.json(snowboardBoots); 
      } else {
        res.status(404).json({ message: 'No snowboardBoots found with the specified availability status' });
      }
    })
    .catch(err => res.status(500).json({ error: 'Server error', details: err.message }));
});



router.post('/', (req, res) => {
  SnowboardBoot.create(req.body)
    .then(snowboardBoot => res.json({ msg: 'snowboardBoot added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this snowboardBoot' }));
});

router.put('/:id', (req, res) => {
  SnowboardBoot.findByIdAndUpdate(req.params.id, req.body)
    .then(snowboardBoot => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  SnowboardBoot.findByIdAndDelete(req.params.id)
    .then(snowboardBoot => res.json({ mgs: 'snowboard boot entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such snowboard boot' }));
});

module.exports = router;