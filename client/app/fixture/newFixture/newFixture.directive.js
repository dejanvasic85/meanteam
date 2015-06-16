'use strict';

angular.module('meanteamApp').directive('mtNewFixture', function(Fixture){
	return{
		restrict : 'EA',
		templateUrl : 'app/fixture/newFixture/newFixture.html',
		scope : {
			season : '=',
			fixtureSaved : '&onFixtureSaved'
		},
		link : function(scope, element, attrs){

			scope.fixture = new Fixture();

			scope.save = function(){
				scope.fixtureSaved({fixture : scope.fixture});
			}
		}
	}
});