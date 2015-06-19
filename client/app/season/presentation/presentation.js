'use strict';

angular.module('meanteamApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/season/:seasonName/presentation', {
        templateUrl: 'app/season/presentation/presentation.html',
        controller: 'PresentationCtrl'
      });
  });
