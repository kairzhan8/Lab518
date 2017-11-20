angular
	.module("myApp")
	.controller("sidebarSettingsController", function(){
		var ctrl = this;
		ctrl.showButtons = false;
		ctrl.state = 0;

		ctrl.agree = function() {
			ctrl.showButtons = false;
			ctrl.state = 0;
		}
		ctrl.dissmiss = function() {
			ctrl.showButtons = false;
			ctrl.state = 0;
		}
		ctrl.changeState = function(value) {
			ctrl.state = value;
			ctrl.showButtons = true;
		}

})