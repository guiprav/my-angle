var myAngle = angular.module('myAngle', []);

myAngle.controller (
	'PhoneListCtl', function($scope, $http) {
		$http.get('phones/phones.json')
			.success (
				function(data) {
					$scope.phones = data;
				}
			)
		;
		$scope.order = 'age';
	}
);
