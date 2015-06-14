'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FixtureSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Fixture', FixtureSchema);