'use strict';

angular.module('meanteamApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/season/:seasonName/newFixture', {
        templateUrl: 'app/season/newFixture/newFixture.html',
        controller: 'NewFixtureCtrl',

      });
  });
