app.controller("ProdutoController", ['$scope', '$routeParams', 'produtoService', function ($scope, $routeParams, produtoService) {
    produtoService.detalhaProduto($routeParams.id)
    .success(function(dados){
        $scope.produto = dados;
    });
    
}]);