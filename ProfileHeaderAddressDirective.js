angular
	.module("myApp")
	.directive("profileHeaderAddress",function(){
		return {
			restict: "E",
			templateUrl: "ProfileHeaderAddress.html",
			controller: "profileHeaderAddressCtrl",
			controllerAs: "ctrl", 
		}
	});