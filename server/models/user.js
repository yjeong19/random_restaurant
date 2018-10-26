const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//bcrypt and stuff here for passwords

const userSchema = new Schema({
  username: {
    name: String,
    // required: true,
    // unique: true,
  },
  email: {
    address: String,
    // required: true,
    // unique: true,
  },
  restaurants: {
    liked: [Object],
    disliked: [Object],
  },
  posts: {
    comment: Array,
    likes: Array,
    disliked: Array,
  },
  //do passwords later
});

module.exports = mongoose.model('user', userSchema);
