angular
	.module("myApp")
	.controller("profileHeaderTitleCtrl", ["$scope", function($scope){
		var ctrl = this;
		ctrl.salonName = "Салон красоты Аврора";
	}])