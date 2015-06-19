'use strict';

angular.module('meanteamApp')
.controller('SeasonCtrl', function ($scope, $routeParams, $log, Season) {

	/*
	 *  Scope view model
	 */
	 $scope.vm = {
	 	season : null,
	 	deleteSeason : deleteSeason,
	 	fixtureAdded : fixtureAdded,
	 	showFixtureForm : false,
	 	toggleFixtureForm : toggleFixtureForm
	 };

	 activate();

	/*
	 *  Ctrl methods
	 */


	 function activate(){
	 	Season.get({name : $routeParams.seasonName}, function(response){
	 		$scope.vm.season = response;
	 		$log.log(response);
	 	});
	 }

	 function deleteSeason(){
	 	alert('are you sure?');
	 }

	 function fixtureAdded(fixture){
	 	$log.log('fixture added');
	 }

	 function toggleFixtureForm(){
	 	$scope.vm.showFixtureForm = !$scope.vm.showFixtureForm;
	 }

});
