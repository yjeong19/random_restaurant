const yelp = require('yelp-fusion');
require('dotenv').config();
const client = yelp.client(process.env.MYAPIKEY);
const express = require('express');
const router = express.Router();


router.get('/search', (req, res) => {
  client.search({
    term: 'Four Barrel Coffee',
    location: 'san francisco, ca'
  }).then(response => {
    console.log(response);
    res.send(response.jsonBody.businesses[0].name);
  }).catch(e => {
    console.log(e);
    res.send(e)
  });
});


module.exports = router;
