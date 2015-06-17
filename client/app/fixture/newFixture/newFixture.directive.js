'use strict';

angular.module('meanteamApp').directive('mtNewFixture', function(){
	return{
		restrict : 'EA',
		templateUrl : 'app/fixture/newFixture/newFixture.html',
		scope : {
			season : '=',
			fixtureSaved : '&onFixtureSaved'
		},
		link : function(scope, element, attrs){

			scope.save = function(fixture){
				
				if(!scope.newFixtureForm.$valid) {
					return;
				}

				scope.season.fixtures.push(angular.copy(fixture));
				scope.season.$update();
			}
		}
	}
});

