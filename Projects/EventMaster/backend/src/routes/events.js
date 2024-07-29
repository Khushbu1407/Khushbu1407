const express = require('express');
const router = express.Router();

const events = [
  { id: 1, name: 'Event 1', description: 'Description of Event 1' },
  { id: 2, name: 'Event 2', description: 'Description of Event 2' }
];

router.get('/', (req, res) => {
  res.json(events);
});

router.get('/:id', (req, res) => {
  const event = events.find(e => e.id === parseInt(req.params.id));
  if (!event) return res.status(404).send('Event not found');
  res.json(event);
});

module.exports = router;

