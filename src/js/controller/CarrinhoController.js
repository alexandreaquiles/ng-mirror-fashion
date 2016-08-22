app.controller("CarrinhoController", ['$scope', 'produtoService', function ($scope, produtoService) {

    produtoService.obtemProdutos().success(function(dados){
        $scope.produtos = dados;
    });
    
    $scope.validaQuantidade = function(produto){
        produto.quantidade = produto.quantidade.replace(/\D/g, "");
    };
    
    $scope.total = function(){
        var total = 0;
        
        angular.forEach($scope.produtos, function(produto){
            total += produto.preco * produto.quantidade;
        });
        
        return total;
    }
    
    $scope.excluir = function(produto) {
       produtoService
       .deletaProduto(produto.id)
       .success(function(dados){
            for(var i = 0; i < $scope.produtos.length; i++) {
                if($scope.produtos[i].id == produto.id) {
                    $scope.produtos.splice(i, 1);
                    break;
                }
            }
        }); 
    }
}]);
