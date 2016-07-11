angular.module('AppAutored', ['ngResource','ui.router', 'ui.bootstrap'])

    .factory("Product", function($resource) {
      return $resource("products/:id/:marca/:modelo/:anhio", { id: '@id', marca: '@marca', modelo: '@modelo', anhio: '@anhio'}, {
        index:   { method: 'GET', isArray: true, responseType: 'json' }
      });
    })

    .controller('MainCtrl', [
        '$scope',
        'Product',
        function($scope, Product) {
            //$scope.getProducts = function () {
                $scope.products = Product.index({id: $scope.model_codigo});
            //}

            $scope.clear =function(){
                $scope.filtro = {};
            };
        }
    ]);
