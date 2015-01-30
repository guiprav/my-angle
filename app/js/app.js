'use strict';

var myAngle = angular.module (
	'myAngle', [
		'ngRoute'
		, 'myControllers'
	]
);

myAngle.config ([
	'$routeProvider'
	, function($routeProvider) {
		$routeProvider
			.when (
				'/phones', {
					templateUrl: 'partials/phone-list.html'
					, controller: 'PhoneListCtl'
				}
			)
			.otherwise ({
				redirectTo: '/phones'
			})
		;
	}
]);
