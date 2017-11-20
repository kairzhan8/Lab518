 angular
	.module("myApp")
	.directive("navigationBottomPage",function(){
		return {
			restrict: "E",
			templateUrl: "NavigationBottomPage.html",
			controller: "navigationBottomPageController",
			controllerAs: "controller",
		}
	});