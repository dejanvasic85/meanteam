'use strict';

angular.module('meanteamApp')
.factory('Fixture', function ($resource) {
	return $resource('api/fixtures/:id', { id: "@_id" }, { update : {method:'PUT'}  });
});
