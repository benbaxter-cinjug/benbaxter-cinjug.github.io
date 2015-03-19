angular.module('cp-app')

.controller('MenuController', [ '$scope', '$rootScope', '$mdToast',
	function($scope, $rootScope, $mdToast) {

		$scope.menu = [
			{
				title : "Approve Vendor Contact",
				sref : "coming-soon"
			}
			, {
				title : "Vendor File Status",
				sref : "coming-soon"
			}
			, {
				title : "Vendor Information",
				sref : "vendor-info"
			}
			, {
				title : "Release Payment File",
				sref : "coming-soon"
			}
			, {
				title : "Payment File Status",
				sref : "coming-soon"
			}
			, {
				title : "Payment Request History",
				sref : "coming-soon"
			}
			, {
				title : "VCN Information",
				sref : "coming-soon"
			}
			, {
				title : "Reports",
				sref : "reports"
			}
		];


	  	$scope.showComingSoonToast = function(item) {
	  		if( item.sref === "coming-soon" ) {
	  			 $mdToast.show(
			      $mdToast.simple()
			        .content('This feature will be coming soon!')
			        .position("")
			        .hideDelay(10)
			    );
	  		}
	  	}

	}])

;