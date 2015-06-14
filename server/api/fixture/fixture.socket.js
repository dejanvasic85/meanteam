/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Fixture = require('./fixture.model');

exports.register = function(socket) {
  Fixture.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Fixture.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('fixture:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('fixture:remove', doc);
}