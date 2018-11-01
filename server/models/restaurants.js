const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantsModel = new Schema({
  restaurant: {
    id: String,
    name: String,
    address: String,
    location: {
      address: String,
      address2: String,
      city: String,
      state: String,
      zipcode: Number,
      country: String,
    },
    type: String,
    rating: Number,
    price: String,
    url: String,
  },
  likes: {
    likes: Number,
    dislikes: Number,
    percentage: Number,
  }

});

module.exports = mongoose.model('restaurants', restaurantsModel)
