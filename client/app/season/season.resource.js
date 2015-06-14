'use strict';

angular.module('meanteamApp')
.factory('Season', function ($resource) {
	return $resource('api/seasons/:id', { id: "@_id" }, { update : {method:'PUT'}  });
});
