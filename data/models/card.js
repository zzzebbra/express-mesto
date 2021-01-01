import user from './user';

const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  owner: {
    user: user._id,
    required: true,
  },
  likes: {

  },
  createdAt: {
    type: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
