'use strict';

var myAngle = angular.module('myAngle', []);

myAngle.controller (
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
