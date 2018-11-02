const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/restaurant/find', (req, res) => {
  req.params.id
  db.restaurants.find(JSON.stringify({
    restaurant: {
      id
    }
  }))
  .then(data => {
    console.log(data);
    res.json(data.restaurant)
  });
});

//findOneandUpdate createone if data dne: set {upsert: true};
router.put('/restaurant/test', (req, res) => {
  let { params } = req.body;
  let { id } = req.body.params;
  console.log(params.id, 'find one and update testing method');
  let condition = {restaurant_id: `${id}`}
  let update = {
    restaurant_id: params.id,
    restaurant: {
      // id: params.id,
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
    }
  };

  db.restaurants.findOneAndUpdate(condition, update, {upsert: true, new: true}
    // , ((err, result) => {
    // if (err){
    //   console.log(err);
    // }else{
    //   console.log(result, 'line 48 results ------------------------ \n');
    //   }
    // })
    )
    .then(data => {
      console.log('line 53 routes.js ====================================')
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    })

})


// this function posts restaurants if there isn't a new one present.
router.post('/restaurant', (req, res) => {
  let { params } = req.body;
  console.log(params, 'object literal test')
  // console.log('line 14 route.js', req.body.params.name)
  db.restaurants.create(
    {
      restaurant: {
        id: params.id,
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
      }
  })
  .then(data => {
    res.json(data);
  })
});


module.exports = router;
