angular
	.module("myApp")
	.directive("historyList", historyListDirective) 
	function historyListDirective(){
		return {
			restrict: "E",
			templateUrl: "HistoryList.html",
			controller: "historyListController",
			controllerAs: "ctrl",
		}
	};