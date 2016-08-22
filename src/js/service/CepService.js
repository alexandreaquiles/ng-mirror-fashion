angular.module("MirrorFashion")
.factory('cepService', ['$q', '$http', function($q, $http) {
    return {
        busca: function (cep) {
            var deferred = $q.defer();
            var CEP_URL = 'https://viacep.com.br/ws/';
            $http.get(CEP_URL + cep+"/json", {timeout: 2000})
                .success(function(resultado) {
                    deferred.resolve(resultado.logradouro + ", " +
                            resultado.bairro + ", " +
                            resultado.localidade + " - " +
                            resultado.uf);
                })
                .error(function(){
                    deferred.reject("Não foi possível obter o endereço. Tente novamente mais tarde.");
                });
            return deferred.promise;
        }
    };
}]);