'use strict';

angular.module('meanteamApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/season/:seasonName', {
        templateUrl: 'app/season/season.html',
        controller: 'SeasonCtrl',
        authenticate: true 
      });
  });