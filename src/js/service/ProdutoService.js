angular.module("MirrorFashion")
.factory('produtoService', ['$http', function($http) {
    var SERVER_URL = 'http://localhost:3000/api';
    return {
        obtemProdutos: function(){
           return $http.get(SERVER_URL + '/carrinho');
        },
        deletaProduto: function(id){
            return $http.delete(SERVER_URL + '/carrinho/'+id);
        },
        detalhaProduto: function(id){
            return $http.get(SERVER_URL + '/produtos/'+id);
        }
    };
}]);