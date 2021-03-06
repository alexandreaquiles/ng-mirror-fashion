var app = angular.module("MirrorFashion", [])
.config(['$httpProvider', '$locationProvider', function ($httpProvider, $locationProvider) {
    //Fixes cross domain requests
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $locationProvider.html5Mode(true);
}])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'js/view/carrinho-angular.html'
    })
    .when('/produtos/:id', {
        templateUrl: 'js/view/produto-angular.html'
    })
    .when('/pesquisa', {
        templateUrl: 'js/view/pesquisa-angular.html'
    })
    .otherwise({redirectTo: '/'});
}]);

