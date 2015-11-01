'use strict';

angular.module('meanteamApp')
  .controller('SeasonSettingsCtrl', function ($scope, $routeParams, $log) {
  	$scope.vm = {
  		seasonName : $routeParams.seasonName
  	}
  });
