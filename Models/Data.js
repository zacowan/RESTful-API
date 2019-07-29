const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Data', DataSchema);
