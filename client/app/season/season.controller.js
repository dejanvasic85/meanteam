'use strict';

angular.module('meanteamApp')
  .controller('SeasonCtrl', function ($scope, $routeParams, $log, Season, CurrentSeason) {

    /*
     *  Scope view model
     */
    $scope.vm = {
      season: null,
      deleteSeason: deleteSeason,
      showFixtureForm: false,
      toggleFixtureForm: toggleFixtureForm
    };

    activate();

    /*
     *  Ctrl methods
     */


    function activate() {
      CurrentSeason.get($routeParams.seasonName).then(function (response) {
        $scope.events = _.map(response.data.fixtures, function(f){
          return {
            
          }
        })
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

        $scope.vm.season = response.data;
      });
    }

    function deleteSeason() {
      alert('are you sure?');
    }


    function toggleFixtureForm() {
      $scope.vm.showFixtureForm = !$scope.vm.showFixtureForm;
    }

  });
