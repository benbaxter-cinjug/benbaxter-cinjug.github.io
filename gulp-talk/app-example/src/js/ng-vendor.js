angular.module('cp-app')

.controller('VendorInfoController', [ '$scope', '$rootScope', '$mdToast', '$filter',
	function($scope, $rootScope, $mdToast, $filter) {

		$scope.criteria = $scope.criteria || {};
		$scope.criteria.vendorStatus = {
			active : true,
			terminated : true
		};

		$scope.vendorTypes = [{
			label: 'Dynamic VCN',
			value: 'Dynamic VCN'
		}, {
			label: 'Fixed VCN',
			value: 'Fixed VCN'
		}];

		$scope.resetSearch = function() {
			$scope.criteria = {};
			$scope.criteria.vendorStatus = {
				active : true,
				terminated : true
			};			
		};

		$scope.resetSearch();

		$scope.results = [];
		$scope.search = function() {

			var results = [];
			angular.forEach(summaries(), function(item) {
				var include = true;
				include &= (!$scope.criteria.vendor || $scope.criteria.vendor === "" || item.name === $scope.criteria.vendor );
				include &= (!$scope.criteria.vendorId || $scope.criteria.vendorId === "" || item.vendorId === $scope.criteria.vendorId );
				include &= (!$scope.criteria.masterVendorId || $scope.criteria.masterVendorId === "" || item.masterVendorId === $scope.criteria.masterVendorId );
				include &= (!$scope.criteria.vendorType || !$scope.criteria.vendorType.value || $scope.criteria.vendorType.value === "" || item.vendorType === $scope.criteria.vendorType.value );
				if( $scope.criteria.vendorStatus ) {
					if( $scope.criteria.vendorStatus.active && $scope.criteria.vendorStatus.terminated ) {
						include &= true;
					} else {
						include &= (( $scope.criteria.vendorStatus.active && item.status === "Active" ) ||  ( $scope.criteria.vendorStatus.terminated && item.status === "Terminated" ));
					}
				}
				
				if( include ) {
					results.push(item);
				}
			});
			console.log(results);
			
			$scope.results = results;
			
			console.log($scope.results);
		};

		$scope.hasResults = function() {
			return $scope.results.length > 0;
		};

		var summaries = function() {
			return [{
				"id": 1,
				"name" : "Allied Supplies",
				"status" : "Active",
				"vendorId" : "111222333",
				"vendorType": 'Fixed VCN',
				"masterVendorId": "9510"
			}, {
				"id": 2,
				"name" : "Baltic Cable Company",
				"status" : "Active",
				"vendorId" : "222444666",
				"vendorType": 'Dynamic VCN',
				"masterVendorId": ""
			}, {
				"id": 3,
				"name" : "Johnson Technologies",
				"status" : "Active",
				"vendorId" : "999888777",
				"vendorType": 'Dynamic VCN',
				"masterVendorId": ""
			}, {
				"id": 4,
				"name" : "Newly Added Vendor",
				"status" : "Active",
				"vendorId" : "123456789",
				"vendorType": 'Dynamic VCN',
				"masterVendorId": ""
			}, {
				"id": 5,
				"name" : "Office Supply Company",
				"status" : "Terminated",
				"vendorId" : "444555666",
				"vendorType": 'Dynamic VCN',
				"masterVendorId": "9510"
			}];
		};

	}])


;