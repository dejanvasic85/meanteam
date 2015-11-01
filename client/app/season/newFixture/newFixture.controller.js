'use strict';

angular.module('meanteamApp')
  .controller('NewFixtureCtrl', function ($scope, $routeParams, CurrentSeason) {

    angular.extend($scope, {vm : {
      seasonName : $routeParams.seasonName,
      datePickerOpened : false,
      fixture: null,
      openDatePicker : function($event){
        $event.preventDefault();
        $event.stopPropagation();
        $scope.vm.datePickerOpened = !$scope.vm.datePickerOpened;
      },
      save : function(){
        console.log($scope.vm.fixture)
      }
    }});

    activate();


    /*
    * Controller Methods
     */
    function activate(){
      CurrentSeason.get($routeParams.seasonName).then(function(response){
        $scope.vm.season = response.data;
      });
    }

  });
