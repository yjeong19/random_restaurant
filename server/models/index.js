const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/random_restaurant';
mongoose.connect(uri, {useNewUrlParser: true});
mongoose.set('debug', true);
mongoose.Promise = Promise;


//below -- module.exports to export mongoose model
module.exports.restaurants = require('./restaurants');
module.exports.user = require('./user');
