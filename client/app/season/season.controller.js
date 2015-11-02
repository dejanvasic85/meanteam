'use strict';

angular.module('meanteamApp')
  .controller('SeasonCtrl', function ($scope, $routeParams, $log, Season, CurrentSeason) {

    /*
     *  Scope view model
     */
    $scope.vm = {
      season: null,
      deleteSeason: deleteSeason,
      fixtureAdded: fixtureAdded,
      showFixtureForm: false,
      toggleFixtureForm: toggleFixtureForm
    };

    $scope.events = [{
      badgeClass: 'info',
      badgeIconClass: 'glyphicon-check',
      title: 'First heading',
      content: 'Some awesome content.'
    }, {
      badgeClass: 'warning',
      badgeIconClass: 'glyphicon-credit-card',
      title: 'Second heading',
      content: 'More awesome content.'
    }];

    activate();

    /*
     *  Ctrl methods
     */


    function activate() {
      $log.debug($routeParams.seasonName);
      CurrentSeason.get($routeParams.seasonName).then(function (response) {
        $scope.vm.season = response.data;
      });
    }

    function deleteSeason() {
      alert('are you sure?');
    }

    function fixtureAdded(fixture) {
      $log.debug('fixture added');
    }

    function toggleFixtureForm() {
      $scope.vm.showFixtureForm = !$scope.vm.showFixtureForm;
    }

  });
