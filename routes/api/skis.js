
const express = require('express');
const router = express.Router();


const Ski = require('../../models/ski');


router.get('/test', (req, res) => res.send('ski route testing!'));

router.get('/', (req, res) => {
  Ski.find()
    .then(skis => res.json(skis))
    .catch(err => res.status(404).json({ nobooksfound: 'No skis found' }));
});


router.get('/:id', (req, res) => {
  Ski.findById(req.params.id)
    .then(ski => res.json(ski))
    .catch(err => res.status(404).json({ nobookfound: 'No skis found' }));
});

router.get('/availability/:status', (req, res) => {
  const isAvailable = req.params.status === 'true';

  Ski.find({ available: isAvailable })
    .then(skis => {
      if (skis.length > 0) {
        res.json(skis); 
      } else {
        res.status(404).json({ message: 'No skis found with the specified availability status' });
      }
    })
    .catch(err => res.status(500).json({ error: 'Server error', details: err.message }));
});



router.post('/', (req, res) => {
  Ski.create(req.body)
    .then(ski => res.json({ msg: 'ski added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this ski' }));
});

router.put('/:id', (req, res) => {
  Ski.findByIdAndUpdate(req.params.id, req.body)
    .then(ski => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  Ski.findByIdAndDelete(req.params.id)
    .then(ski => res.json({ mgs: 'ski entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such ski' }));
});

module.exports = router;