app.controller("RecomendacoesController", ['$scope', '$http', function ($scope, $http) {
    function buscaRecomendacoes(){
        $http.jsonp("http://mirrorfashion.caelum.com.br/produtos?callback=JSON_CALLBACK")
        .success(function(dados) {
            $scope.produtos = dados.produtos;
        });
    }
    buscaRecomendacoes();
    setInterval(buscaRecomendacoes, 5000);
}]);

