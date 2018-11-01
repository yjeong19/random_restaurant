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

router.post('/restaurant', (req, res) => {
  let { params } = req.body;
  console.log(params, 'object literal test')
  // console.log('line 14 route.js', req.body.params.name)
  db.restaurants.create({
      restaurant: JSON.stringify({
        name: params.name,
        location: {
          address1: params.location.address1,
          address2: params.location.address2,
          city: params.location.city,
          state: params.location.state,
          zipcode: params.location.zip_code,
          country: params.location.country,
        },
        type: 'restaurant',
        rating: params.rating,
        price: params.price,
        url: params.url,
        phone: params.phone,
        likes: {

        }
      })
  })
  .then(data => {
    res.send(data);
  })
});


module.exports = router;
