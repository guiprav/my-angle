var myAngle = angular.module('myAngle', []);

myAngle.controller (
	'PhoneListCtl', function($scope) {
		$scope.phones = [
			{
				name: 'Phone A'
				, description: 'A hypothetical phone represented by the letter A.'
			}
			, {
				name: 'Phone B'
				, description: 'A hypothetical phone represented by the letter B.'
			}
		];
	}
);
