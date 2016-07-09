angular.module('AppAutored', ['ngResource','ui.router', 'ui.bootstrap'])

    .factory("Product", function($resource) {
      return $resource("products/:id", { id: '@id' }, {
        index:   { method: 'GET', isArray: true, responseType: 'json' }
      });
    })

    .factory("Lineasprod", function($resource) {
      return $resource("lineasprods/:id", { id: '@id' }, {
        index:   { method: 'GET', isArray: true, responseType: 'json' }
      });
    })

    .controller('ProductsCtrl', [
        '$scope',
        'Product',
        function($scope, Product) {

            $scope.products = Product.index()

            //Product.query({id: 'F-76A14'}, function(elemento){$scope.producto = elemento});

            $scope.clear =function(){
                $scope.filtro = {};
            };
        }
    ])
