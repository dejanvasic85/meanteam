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

			scope.saving = false;
			scope.save = function(fixture){
				
				if(!scope.newFixtureForm.$valid || scope.newFixtureForm.$pristine) {
					return;
				}
				scope.saving = true;
				scope.season.fixtures.push(angular.copy(fixture));
				scope.season.$update(function(){
					scope.saving = false;
				});	
			};

			scope.isValid = function(inputName){
				var formElement = scope.newFixtureForm[inputName];
				var isValid = formElement.$touched && formElement.$valid;				
				return isValid;
			}
		}
	}
});

