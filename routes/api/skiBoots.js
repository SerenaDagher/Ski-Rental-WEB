
const express = require('express');
const router = express.Router();


const SkiBoot = require('../../models/skiBoot');


router.get('/test', (req, res) => res.send('skiBoots route testing!'));

router.get('/', (req, res) => {
  SkiBoot.find()
    .then(skiBoots => res.json(skiBoots))
    .catch(err => res.status(404).json({ noskibootsfound: 'No skiBoots found' }));
});


router.get('/:id', (req, res) => {
  SkiBoot.findById(req.params.id)
    .then(skiBoot => res.json(skiBoot))
    .catch(err => res.status(404).json({ noskibootsfound: 'No skiBoots found' }));
});

router.get('/availability/:status', (req, res) => {
  const isAvailable = req.params.status === 'true';

  SkiBoot.find({ available: isAvailable })
    .then(skiBoots => {
      if (skiBoots.length > 0) {
        res.json(skiBoots); 
      } else {
        res.status(404).json({ message: 'No skiBoots found with the specified availability status' });
      }
    })
    .catch(err => res.status(500).json({ error: 'Server error', details: err.message }));
});



router.post('/', (req, res) => {
  SkiBoot.create(req.body)
    .then(skiBoot => res.json({ msg: 'skiBoot added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this skiBoot' }));
});

router.put('/:id', (req, res) => {
  SkiBoot.findByIdAndUpdate(req.params.id, req.body)
    .then(skiBoot => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  SkiBoot.findByIdAndDelete(req.params.id)
    .then(skiBoot => res.json({ mgs: 'ski boot entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such ski boot' }));
});

module.exports = router;