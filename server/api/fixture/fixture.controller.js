'use strict';

var _ = require('lodash');
var Fixture = require('./fixture.model');

// Get list of fixtures
exports.index = function(req, res) {
  Fixture.find(function (err, fixtures) {
    if(err) { return handleError(res, err); }
    return res.json(200, fixtures);
  });
};

// Get a single fixture
exports.show = function(req, res) {
  Fixture.findById(req.params.id, function (err, fixture) {
    if(err) { return handleError(res, err); }
    if(!fixture) { return res.send(404); }
    return res.json(fixture);
  });
};

// Creates a new fixture in the DB.
exports.create = function(req, res) {
  Fixture.create(req.body, function(err, fixture) {
    if(err) { return handleError(res, err); }
    return res.json(201, fixture);
  });
};

// Updates an existing fixture in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Fixture.findById(req.params.id, function (err, fixture) {
    if (err) { return handleError(res, err); }
    if(!fixture) { return res.send(404); }
    var updated = _.merge(fixture, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, fixture);
    });
  });
};

// Deletes a fixture from the DB.
exports.destroy = function(req, res) {
  Fixture.findById(req.params.id, function (err, fixture) {
    if(err) { return handleError(res, err); }
    if(!fixture) { return res.send(404); }
    fixture.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}