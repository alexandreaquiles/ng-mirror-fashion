app.controller('AvisoController', ['$scope', function ($scope){
    var ESCONDER = "Esconder";
    var MOSTRAR = "Mostrar";
    $scope.rotuloBotao = ESCONDER;
    $scope.mostraAviso = true;
    $scope.alternarAviso = function(){
        if($scope.mostraAviso){
            $scope.mostraAviso = false;
            $scope.rotuloBotao = MOSTRAR;
        } else {
            $scope.mostraAviso = true;
            $scope.rotuloBotao = ESCONDER;
        }
    }
}]);