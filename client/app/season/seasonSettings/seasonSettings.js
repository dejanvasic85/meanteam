'use strict';

angular.module('meanteamApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/season/:seasonName/settings', {
        templateUrl: 'app/season/seasonSettings/seasonSettings.html',
        controller: 'SeasonSettingsCtrl'
      });
  });
