'use strict';

angular.module('meanteamApp')
  .controller('PresentationCtrl', function ($scope, $routeParams) {
    $scope.vm = {
    	seasonName : $routeParams.seasonName
    }
  });
