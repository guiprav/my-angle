'use strict';

var myControllers = angular.module('myControllers', []);

myControllers.controller (
	'PhoneListCtl', [
		'$scope'
		, '$http'
		, function($scope, $http) {
			$http.get('phones/phones.json')
				.success (
					function(data) {
						$scope.phones = data;
					}
				)
			;
			$scope.order = 'age';
		}
	]
);

myControllers.controller (
	'PhoneDetailCtl', [
		'$scope'
		, '$routeParams'
		, function($scope, $routeParams) {
			$scope.phoneId = $routeParams.phoneId;
		}
	]
);
