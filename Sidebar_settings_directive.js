 angular
	.module("myApp")
	.directive("sidebarSettings",function(){
		return {
			restrict: "E",
			templateUrl: "Sidebar_settings.html",
			controller: "sidebarSettingsController",
			controllerAs: "ctrl",
		}
	});