const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/random_restaurant';
mongoose.connect(uri);
mongoose.set('debug', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true)
mongoose.Promise = Promise;


//below -- module.exports to export mongoose model
module.exports.restaurants = require('./restaurants');
module.exports.user = require('./user');
