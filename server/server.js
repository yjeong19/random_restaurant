const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8081;
// dotenv.config()
// const dotenv = require('dotenv');
require('dotenv').config();
//yelp routes
const yelp = require('yelp-fusion');
const yelpAPI = require('./api/yelp');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/yelp', yelpAPI);

app.listen(PORT, ()=>{
  console.log(`app listening on port ${PORT}`);
});
