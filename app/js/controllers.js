var myAngle = angular.module('myAngle', []);

myAngle.controller (
	'PhoneListCtl', function($scope) {
		$scope.phones = [
			{
				name: 'Phone A'
				, description: 'A hypothetical phone represented by the letter A.'
				, age: 2
			}
			, {
				name: 'Phone B'
				, description: 'A hypothetical phone represented by the letter B.'
				, age: 1
			}
		];
		$scope.order = 'age';
	}
);
