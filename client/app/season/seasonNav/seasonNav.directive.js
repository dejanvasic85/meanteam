'use strict';

angular.module('meanteamApp')
	.directive('mtSeasonNavbar', function(){
		return {
			restrict : 'EA',
			templateUrl : 'app/season/seasonNav/seasonNav.html',
			scope: {
				codeName : '=',
				selectedItem : '@'
			}
		}
	});
