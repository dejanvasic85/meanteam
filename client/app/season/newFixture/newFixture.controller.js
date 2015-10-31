'use strict';

angular.module('meanteamApp')
  .controller('NewFixtureCtrl', function ($scope, $routeParams) {
    $scope.vm = {
      seasonName : $routeParams.seasonName
    }
  });
