angular.module('cincin').controller(
		"loginctrl",
		function($state, $scope, loginService, $localStorage,notify) {

			$scope.user = {};
			$scope.gotoDashBoard = function() {
				var authorization = "Basic "
						+ btoa($scope.user.username + ":"
								+ $scope.user.password);
				$localStorage.authorization = authorization;
				$localStorage.$save();
				loginService.doLogin($scope.user).then(function(response) {
					console.log(response.data);
					/*$localStorage.employeeId = response.data.employeeId;*/
					if (response.data.role.name == 'Admin') {
						$state.go('cincin.dashboard');
					} else {
						alert("Not a Admin...");
					}

					$localStorage.user = response.data;
					$localStorage.$save();
				}, function(error) {
					alert("invalid credentials.");
				});
			};
		});