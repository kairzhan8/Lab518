angular
	.module("myApp")
	.directive("profileHeader", function() {
		return {
			restrict: "E",
			templateUrl: "ProfileHeader.html",
			controller: "profileHeaderCtrl",
			controllerAs: "controller",
		}
	});