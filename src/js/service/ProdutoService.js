angular.module("MirrorFashion")
.factory('produtoService', ['$http', function($http) {
    return {
        obtemProdutos: function(){
           return $http.get('http://localhost:3000/carrinho');
        },
        deletaProduto: function(id){
            return $http.delete('http://localhost:3000/carrinho/'+id);
        },
        detalhaProduto: function(id){
            return $http.get('http://localhost:3000/produtos/'+id);
        }
    };
}]);