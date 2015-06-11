'use strict';

angular.module('meanteamApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/profile/:username', {
        templateUrl: 'app/userprofile/userprofile.html',
        controller: 'UserprofileCtrl'
      });
  });
