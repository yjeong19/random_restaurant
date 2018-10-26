const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantsModel = new Schema({
  restaurant: {
    name: String,
    address: String,
    location: String,
    type: String,
  }
})

module.exports = mongoose.model('restaurants', restaurantsModel)
