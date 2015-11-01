'use strict';

angular.module('meanteamApp')
  .controller('NavbarCtrl', function ($scope, $location, $log, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    },
      {'title': 'My Seasons',
      'link' : '/season/united-2015'}];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {

      return route === $location.path();
    };
  });
