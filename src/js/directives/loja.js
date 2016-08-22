angular.module("MirrorFashion")
.directive('cabecalho', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/directives/partials/cabecalho.html'
    }
})
.directive('aviso', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/directives/partials/aviso.html'
    }
})
.directive('carrinho', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/directives/partials/carrinho.html'
    }
})
.directive('recomendacoes', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/directives/partials/recomendacoes.html'
    }
})
.directive('consultaFrete', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/directives/partials/consulta-frete.html'
    }
})
.directive('rodape', function(){
    return {
        restrict: 'E',
        templateUrl: 'js/directives/partials/rodape.html'
    }
});