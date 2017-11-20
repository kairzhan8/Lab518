angular
	.module("myApp")
	.controller("navigationBottomPageController", ["$scope",function($scope){
		$(function () {
		  $('[data-toggle="tooltip"]').tooltip()
		})
		var ctrl=this;
		ctrl.page="afjk";
	}])