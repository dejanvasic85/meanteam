'use strict';

angular.module('meanteamApp').directive('mtNewFixture', function($log, $timeout){
	return{
		restrict : 'EA',
		templateUrl : 'app/fixture/newFixture/newFixture.html',
		scope : {
			season : '=',
			fixtureSaved : '&onFixtureSaved'
		},
		link : function(scope, element, attrs){

			scope.saving = false; // Flag used for button loader
			scope.datePickerOpened = false;

			scope.save = function(fixture){
				
				if(!scope.newFixtureForm.$valid || scope.newFixtureForm.$pristine) {
					return;
				}
				scope.saving = true;
				scope.season.fixtures.push(angular.copy(fixture));
				scope.season.$update(function(){
					scope.saving = false;
				});	
				scope.fixture = {};
				scope.newFixtureForm.$setPristine();
				
			};

			scope.isValid = function(inputName){
				var formElement = scope.newFixtureForm[inputName];
				var isValid = (formElement.$dirty && formElement.$valid) || formElement.$pristine;
				return isValid;
			};

			scope.openDatePicker = function($event){
				$event.preventDefault();
    			$event.stopPropagation();
				scope.datePickerOpened = !scope.datePickerOpened;
			}

			scope.isPastFixture = function(){
				if(scope.fixture === undefined){
					return true;
				}

				if(scope.fixture.date === undefined){
					return true;
				}

				var now = new Date();
				return scope.fixture.date < now;
			}
		}
	}
});

