function DonateCtrl($scope) {
	$scope.currencies = [
		{code: "AED", symbol: "d", min: "10", max: "50000", amounts: [50,100,400,1000]},
		{code: "CAD", symbol: "$", min: "5", max: "25000", amounts: [20,40,100,200]},
		{code: "EUR", symbol: "€", min: "3", max: "15000", amounts: [15,30,50,100]},
		{code: "GBP", symbol: "£", min: "2", max: "10000", amounts: [10,20,50,100], "default": true},
		{code: "SGD", symbol: "$", min: "4", max: "20000", amounts: [25,50,100,150]},
		{code: "USD", symbol: "$", min: "3.5", max: "17500", amounts: [15,25,50,100]}
	];

	$scope.selected_currency = function() {
		for(var i in $scope.currencies) {
			if($scope.currencies[i].code == $scope.selected_currency_code) {
				return $scope.currencies[i];
			}
		}
	}
}