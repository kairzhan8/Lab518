angular
	.module("myApp")
	.controller('profileHeaderCtrl', ["$scope", function($scope) {
		var ctrl = this;
		ctrl.state = "address";
	}])