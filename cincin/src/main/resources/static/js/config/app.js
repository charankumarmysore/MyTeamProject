var cincin = angular
		.module('cincin', [ 'ui.router', 'ngStorage', 'cgNotify', ]);
cincin.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/login');
	$stateProvider.state('login', {
		templateUrl : 'views/login.html',
		url : '/login',
		controller : 'loginctrl'
	}).state('cincin', {
		abstract : true,
		templateUrl : 'views/Commons/content.html',
		url : '/',
		controller : 'appCtrl'
	}).state('cincin.dashboard', {
		templateUrl : 'views/dashboard.html',
		url : '/dashboard',
		controller : 'dashboardCtrl'
	});
});
