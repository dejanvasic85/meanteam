'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var SeasonSchema = new Schema({
  name: String,
  codeName : String,
  leagueName: String,
  active: Boolean,
  managers: [{ 
  	name : String, 
  	email : String }],
  fixtures: [{ 
	opposition : String, 
	oppositionGoals : Number,
	teamGoals : Number,
	location : String, 
	date : Date, 
	highlights : [String] 
	}]
});

module.exports = mongoose.model('Season', SeasonSchema);
