
const express = require('express');
const router = express.Router();

// Load Book model
const Book = require('../../models/ski');

// @route   GET api/books/test
// @desc    Tests books route
// @access  Public
router.get('/test', (req, res) => res.send('ski route testing!'));

router.get('/', (req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No skis found' }));
});

// @route   GET api/books/:id
// @desc    Get single book by id
// @access  Public
router.get('/:id', (req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(404).json({ nobookfound: 'No skis found' }));
});

// @route   POST api/books
// @desc    Add/save book
// @access  Public
router.post('/', (req, res) => {
  Book.create(req.body)
    .then(book => res.json({ msg: 'ski added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this ski' }));
});

// @route   PUT api/books/:id
// @desc    Update book by id
// @access  Public
router.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route   DELETE api/books/:id
// @desc    Delete book by id
// @access  Public
router.delete('/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(book => res.json({ mgs: 'ski entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such ski' }));
});

module.exports = router;