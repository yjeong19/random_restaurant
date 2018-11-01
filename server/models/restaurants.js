const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantsModel = new Schema({
  restaurant: {
    id: String,
    name: String,
    location: {
      address1: String,
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
    phone: String,
  },
  likes: {
    likes: Number,
    dislikes: Number,
    percentage: Number,
  },
  reviews: {
    // user: [Object],
    comments: [Object]
  }

});

module.exports = mongoose.model('restaurants', restaurantsModel)
