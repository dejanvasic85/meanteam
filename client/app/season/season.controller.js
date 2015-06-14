'use strict';

angular.module('meanteamApp')
.controller('SeasonCtrl', function ($scope, $routeParams, $log, Season) {

	/*
	 *  Scope view model
	 */
	$scope.vm = {
		season : null,
		deleteSeason : deleteSeason
	};

	activate();

	/*
	 *  Ctrl methods
	 */


	function activate(){

		Season.get({name : $routeParams.seasonName}, function(response){
			$scope.vm.season = response;
		});		
	}

	function deleteSeason(){
		alert('are you sure?');
	}
});
