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
			.when (
				'/phones/:phoneId', {
					templateUrl: 'partials/phone-detail.html'
					, controller: 'PhoneDetailCtl'
				}
			)
			.otherwise ({
				redirectTo: '/phones'
			})
		;
	}
]);
