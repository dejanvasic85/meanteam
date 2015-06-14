'use strict';

angular.module('meanteamApp')
.controller('SeasonCtrl', function ($scope, $routeParams, $log, Season) {

	var season = Season.get({name : $routeParams.seasonName}, function(s){
		$log.log(s);

		s.info = "h what!";
		s.$update();
	});


	$scope.vm = {
		seasons : [{
			name : "Williamstown 2015"
		}]
	}
});
