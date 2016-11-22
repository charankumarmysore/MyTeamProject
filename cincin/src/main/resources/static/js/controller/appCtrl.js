angular.module('cincin').controller(
		"appCtrl",
		function($state, $scope, loginService, $localStorage, employeeService) {

			$scope.employeeList = [];
			$scope.roleName = $localStorage.user.role.name;
			$scope.userName=$localStorage.user.username;
			console.log($scope.userName);

			/* Page Transfers */
			
			$scope.goToDashBoardPage = function() {
				if ($localStorage.user.role.name == 'Admin') {
					$state.go('myCheck.dashboard');
				} else {
					$state.go('myCheck.userDashboard');
				}
			};
			$scope.goToUserDashboard = function() {
				$state.go('myCheck.userDashboard');
			};

		});
