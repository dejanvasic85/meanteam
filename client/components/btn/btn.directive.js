'use strict';

angular.module('meanteamApp')
	.directive('mtButton', function($log){
		return {
			restrict : 'E',
			replace : true,
			transclude : true,
			template : '<button class="btn btn-default"><ng-transclude></ng-transclude></button>',
			link : function(scope, element, attributes){
				if(attributes["size"]){
					element.addClass("btn-" + attributes["size"]);
				}

				scope.$watch(attributes["load"], function(val){
					if(val === true){ 
						element.button('loading');
					}
					else{
						element.button('reset');	
					}					
				});
			}
		}
	});