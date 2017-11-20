angular
	.module("myApp")
	.directive("profileHeaderTitle",function(){
		return {
			restrict: "E",
			templateUrl: "ProfileHeaderTitle.html",
			controller: "profileHeaderTitleCtrl",
			controllerAs: "ctrl",
		}
	});