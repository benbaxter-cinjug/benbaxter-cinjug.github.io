angular.module('cp-app')

.controller('HomeController', [ '$scope', '$rootScope', '$mdToast',
	function($scope, $rootScope, $mdToast) {

		$scope.menuDone = true;
		$scope.vendorInfoPage = true;
		$scope.vendorSearchDone = true;
		$scope.vendorSearchResultsDone = true;

	}])
;