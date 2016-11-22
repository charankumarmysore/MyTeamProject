angular.module('cincin').service("loginService",
		function($http, CINCIN_CONSTANTS) {
			this.doLogin = function(user) {
				return $http.post(CINCIN_CONSTANTS.DO_LOGIN(), user);
			};

		});