'use strict';

angular.module('meanteamApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/season-setup', {
        templateUrl: 'app/season/setup/setup.html',
        controller: 'SetupCtrl'
      });
  });
