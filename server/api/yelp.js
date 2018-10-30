const yelp = require('yelp-fusion');
require('dotenv').config();
const client = yelp.client(process.env.MYAPIKEY);
const express = require('express');
const router = express.Router();

//creating search through yelp api
router.get('/search', (req, res) => {
  //postman request is req.query
  //when adding front end, check what the request comes as
  console.log(req.query)
  client.search({
    term: req.query.term,
    location: req.query.location,
    categories: req.query.categories,
    price: req.query.price,

  }).then(response => {
    // console.log(response);
    //what do i want to return -- currently 1 business
    res.send(response.jsonBody.businesses[0].name);
  }).catch(e => {
    console.log(e);
    res.send(e)
  });
});

//create a random restaurant fetch method
router.get('/random', (req, res) => {
  console.log(req.query);
  client.search({
    term: req.query.term,
    location: req.query.location,
    categories: req.query.categories,
    price: req.query.price,
    limit: req.query.limit,
  }).then(response => {
    //put algo here to return random restaurant
    console.log(response.jsonBody.businesses);
    let randomInt = (length) => {
      return Math.floor(Math.random() * Math.floor(length));
    }
    console.log(randomInt(response.jsonBody.businesses.length))
    //below returns random restaurant
    res.json(response.jsonBody.businesses[randomInt(response.jsonBody.businesses.length)]);
  }).catch(err => {
    console.log(err);
    res.send(err);
  })
})


module.exports = router;
