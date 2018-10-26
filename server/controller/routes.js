const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/test', (req, res) => {
  db.restaurants.find()
  .then(data => {
    console.log(data);
    res.json(data.restaurant)
  });
});

router.post('/test', (req, res) => {
  db.restaurants.create({
      restaurant: JSON.stringify({
        name: 'testing',
        address: 'hello',
        location: 'california',
        type: 'tester'
      })
  })
  .then(data => {
    res.send(data);
  })
});


module.exports = router;
