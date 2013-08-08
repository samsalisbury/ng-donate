function DonateCtrl($scope) {
	$scope.currencies = [
		{code: "AED", symbol: "d", min: "10", max: "50000"},
		{code: "CAD", symbol: "$", min: "5", max: "25000"},
		{code: "EUR", symbol: "€", min: "3", max: "15000"},
		{code: "GBP", symbol: "£", min: "2", max: "10000", "default": true},
		{code: "SGD", symbol: "$", min: "4", max: "20000"},
		{code: "USD", symbol: "$", min: "3.5", max: "17500"}
	];
}