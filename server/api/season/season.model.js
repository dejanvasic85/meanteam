'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SeasonSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  managers: [{ name : String, email : String }]
});

module.exports = mongoose.model('Season', SeasonSchema);