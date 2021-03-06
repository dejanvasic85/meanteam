'use strict';

var _ = require('lodash');
var Season = require('./season.model');
var Schema = require('mongoose');

// Get list of seasons
exports.index = function (req, res) {
  Season.find(function (err, seasons) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(200, _.first(seasons));
  });
};

// Get a single season
exports.show = function (req, res) {
  Season.findById(req.params.id, function (err, season) {
    if (err) {
      return handleError(res, err);
    }
    if (!season) {
      return res.send(404);
    }
    return res.json(season);
  });
};

// Creates a new season in the DB.
exports.create = function (req, res) {
  Season.create(req.body, function (err, season) {
    if (err) {
      return handleError(res, err);
    }
    return res.json(201, season);
  });
};

// Updates an existing season in the DB.
exports.update = function (req, res) {
  if (req.body._id) {
    delete req.body._id;
  }

  Season.findById(req.params.id, function (err, season) {
    if (err) {
      return handleError(res, err);
    }
    if (!season) {
      return res.send(404);
    }
    var updated = _.extend(season, req.body);

    updated.save(function (err) {
      if (err) {
        return handleError(res, err);
      }
      return res.json(200, season);
    });
  });
};

// Deletes a season from the DB.
exports.destroy = function (req, res) {
  Season.findById(req.params.id, function (err, season) {
    if (err) {
      return handleError(res, err);
    }
    if (!season) {
      return res.send(404);
    }
    season.remove(function (err) {
      if (err) {
        return handleError(res, err);
      }
      return res.send(204);
    });
  });
};

// Deletes a season from the DB.
exports.addFixture = function (req, res) {

  Season.findByIdAndUpdate(
    req.params.id,
    {
      $push: {
        fixtures: req.body
      }
    }, function(err, model){
      if(err){
        return handleError(err);
      }
      return res.send(200);
    });
};


function handleError(res, err) {
  return res.send(500, err);
}
