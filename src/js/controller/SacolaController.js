app.controller("SacolaController", ['$scope', function ($scope) {
    "use strict";
    $scope.sacola = new Sacola();
    $scope.comprar = function(){
        $scope.sacola.incrementarTotal();
    };
}]);