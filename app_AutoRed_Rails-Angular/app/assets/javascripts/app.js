var myApp = angular.module('AppAutored', ['ngResource','ui.router', 'ui.bootstrap'])

/*
        myApp.filter('unique', function() {
            return function(input, key) {
                var unique = {};
                var uniqueList = [];
                for (var i = 0; i < input.length; i++) {
                    if (typeof unique[input[i][key]] == "undefined") {
                        unique[input[i][key]] = "";
                        uniqueList.push(input[i]);
                    }
                }
                return uniqueList;
            };
        });
*/

        myApp.factory("Product", function($resource) {
          return $resource("products/:cod_prod/:marca/:modelo/:anhio", { cod_prod: '@cod_prod', marca: '@marca', modelo: '@modelo', anhio: '@anhio'}, {
            index:   { method: 'GET', isArray: true, responseType: 'json' }
          });
        })

        myApp.factory("Brand", function($resource){
            return $resource("brands/:marca", {marca: '@marca'}, {
            index:   { method: 'GET', isArray: true, responseType: 'json' }
          });
        })

        myApp.controller('MainCtrl', [
            '$scope',
            'Product',
            'Brand',
            function($scope, Product, Brand) {

                function sortArray(arr) {
                    var tmp = [];
                    for (var i = 0; i < arr.length; i++) {
                        if (tmp.indexOf(arr[i]) == -1) {
                            tmp.push(arr[i]);
                        }
                    }
                    return tmp;
                }

                $scope.getProducts = function () {
                    $scope.products = Product.index({cod_prod: $scope.model_codigo});

                    $scope.brands   = Brand.index(function(){ 
                        $scope.marcas = [];

                        $scope.brands.forEach(function(brands) {
                            $scope.marcas.push(brands.marca)
                        })
                    });
                }

                $scope.combo_modelos = function(marcaSeleccionada){
                    var modelos = []
                    $scope.products.forEach(function(producto){
                        if (producto.marca === marcaSeleccionada && !modelos[marcaSeleccionada]) {
                            modelos.push(producto.modelo)
                        }
                    })
                    $scope.modelos = sortArray(modelos).sort();
                };    

                $scope.combo_anhios = function(modeloSeleccionado){
                    var anhios = []
                    $scope.products.forEach(function(producto){
                        if (producto.modelo === modeloSeleccionado && !anhios[modeloSeleccionado]) {
                            anhios.push(producto.anhio)
                        }
                    })
                    $scope.anhios = sortArray(anhios).sort(function(a, b){return b-a});
                };

                $scope.clear = function(){
                    $scope.filtro = {};
                    $scope.modelos = [];
                    $scope.anhios = [];
                };

            }
        ]);