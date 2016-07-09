var productsSearch = angular.module('ProductsSearch', ['ngResource']);

    productsSearch.factory("Product", function($resource) {
      return $resource("products/:id", { id: '@id' }, {
        index:   { method: 'GET', isArray: true, responseType: 'json' },
        update:  { method: 'PUT', responseType: 'json' }
      });
    })

    productsSearch.controller("productsController", function($scope, Product) {
      $scope.products = Product.index()
    })
