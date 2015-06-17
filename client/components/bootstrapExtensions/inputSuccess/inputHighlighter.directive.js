'use strict';

angular.module('meanteamApp')
.directive('mtInputHighlighter', function($log){
	return {
		restrict : 'A',
		require : '^form',
		link : function(scope, element, attributes, formCtrl){
			if(!element.hasClass('form-group')) {
				$log.error('form-success must be used on an element with form-group class');
				return;
			}

			// Success
			scope.$watch(isValid, function(val){
				if(val === true){
					element.addClass('has-success');
					element.append('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
				}else{
					element.removeClass('has-success');
					element.children('.glyphicon-ok').remove();
				}
			});


			// Error - Invalid
			scope.$watch(isNotValid, function(val){
				if(val === true){
					element.addClass('has-error');
					element.append('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>')
				} else {
					element.removeClass('has-error');
					element.children('.glyphicon-remove').remove();
				}
			});

			function isValid(){
				var formElement = formCtrl[attributes['mtInputHighlighter']];
				return formElement.$dirty && formElement.$valid;
			}


			function isNotValid(){
				var formElement = formCtrl[attributes['mtInputHighlighter']];
				return formElement.$dirty && !formElement.$valid;
			}

		}
	}
})