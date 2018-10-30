const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8081;
// dotenv.config()
// const dotenv = require('dotenv');
require('dotenv').config();
const yelp = require('yelp-fusion');
const yelpAPI = require('./api/yelp');
const routes = require('./controller/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//yelp routes
app.use('/yelp', yelpAPI);
//api Routes
app.use('/', routes);



app.listen(PORT, ()=>{
  console.log(`app listening on port ${PORT}`);
});
