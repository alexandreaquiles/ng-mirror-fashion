app.controller("ConsultaCepController", ['$scope', '$http', function ($scope, $http) {

    $scope.cep = "";
    $scope.endereco = "";
    
    $scope.consulta = function(){
        if($scope.cep){
        $http.get("http://cep.correiocontrol.com.br/"+$scope.cep+".json", {timeout: 2000})
            .success(function(resultado) {
                $scope.endereco = resultado.logradouro + ", " +
                                    resultado.bairro + ", " +
                                    resultado.localidade + " - " +
                                    resultado.uf;
            })
            .error(function(){
                $scope.endereco = "Não foi possível obter o endereço. Tente novamente mais tarde."
            });
        }
    }
}]);
