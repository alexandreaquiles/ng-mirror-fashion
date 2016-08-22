app.controller("ConsultaCepController", ['$scope', '$http', 'cepService', function ($scope, $http, cepService) {
    $scope.cep = "";
    $scope.endereco = "";
    $scope.consulta = function(){
        if($scope.cep){
            cepService.busca($scope.cep)
            .then(function(resultado) {
                $scope.endereco = resultado;
            }, function(erro){
                $scope.endereco = erro;
            });
        }
    }
}]);
