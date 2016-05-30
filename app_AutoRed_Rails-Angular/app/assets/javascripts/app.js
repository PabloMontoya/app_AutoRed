angular.module('AppAutored', ['ui.router', 'ui.bootstrap'])

    .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/home.html',
          controller: 'MainCtrl'
        });

      $urlRouterProvider.otherwise('home');
    }])

    .factory('products', [function(){
        var o = {
            products: [
                { id: 'EA-1231H',   name: 'Soporte Frontal',        brand: 'Honda', model: 'Accord', year:'2007', price: '250', location:'Victoria',  quantity:'31' },
                { id: 'EA-1233-H',  name: 'Soporte Derecho',        brand: 'Honda', model: 'Accord', year:'2007', price: '350', location:'Barrancos', quantity:'45' },
                { id: 'EA-4436',    name: 'Soporte de Motor',       brand: 'Honda', model: 'Accord', year:'2007', price: '450', location:'Calzada',   quantity:'10' },
                { id: 'EA-1232-H',  name: 'Soporte Trasero',        brand: 'Honda', model: 'Accord', year:'2007', price: '120', location:'Sanalona',  quantity:'65' },
                { id: 'EA-1230',    name: 'Soporte Transmision',    brand: 'Honda', model: 'Accord', year:'2007', price: '600', location:'Navolato',  quantity:'12' },
                { id: 'EA-1229',    name: 'Soporte Trans. Frontal', brand: 'Honda', model: 'Accord', year:'2007', price: '140', location:'Lombardo',  quantity:'5' },
                { id: 'EA-1611',    name: 'Soporte Trans. Central', brand: 'Honda', model: 'Accord', year:'2007', price: '200', location:'Calzada',   quantity:'7' },

                { id: 'IG-S-LX-615', name: 'Modulo',              brand: 'Honda',  model: 'Civic', year:'1992', price: '300', location:'Barrancos', quantity:'12' },
                { id: 'IG-S-PS-198', name: 'Bomba de Aceite',     brand: 'Honda',  model: 'Civic', year:'1992', price: '450', location:'Navolato',  quantity:'12' },
                { id: 'IG-S-TS-172', name: 'Bulbo Temp.',         brand: 'Honda',  model: 'Civic', year:'1992', price: '130', location:'Sanalona',  quantity:'6' },
                { id: 'IG-S-TX-37',  name: 'Sensor Refrigerante', brand: 'Honda',  model: 'Civic', year:'1992', price: '200', location:'Calzada',   quantity:'3' },
                { id: 'IG-S-UF-89',  name: 'Bobina',              brand: 'Honda',  model: 'Civic', year:'1992', price: '600', location:'Victoria',  quantity:'9' },

                { id: '1T1957',      name: 'Medias Lunas Cigueñal', brand: 'Honda',  model: 'CR-V', year:'2005', price: '450', location:'Navolato',  quantity:'15' },
                { id: '4B1972H-10',  name: 'Metal Biela',           brand: 'Honda',  model: 'CR-V', year:'2005', price: '200', location:'Lombardo',  quantity:'45' },
                { id: '5M1959H-10',  name: 'Metal Bancada',         brand: 'Honda',  model: 'CR-V', year:'2005', price: '100', location:'Calzada',   quantity:'31' },
                { id: 'EA-1356',     name: 'Soporte Motor',         brand: 'Honda',  model: 'CR-V', year:'2005', price: '300', location:'Barrancos', quantity:'23' },
                { id: 'H-2C5147-30', name: 'Anillos',               brand: 'Honda',  model: 'CR-V', year:'2005', price: '250', location:'Victoria',  quantity:'12' },
                { id: 'HG12-106',    name: 'Empaques Cabeza',       brand: 'Honda',  model: 'CR-V', year:'2005', price: '320', location:'Navolato',  quantity:'4' },

                { id: '1459',      name: 'Metales Levas',  brand: 'Ford',  model: 'Fiesta', year:'1980', price: '500', location:'Victoria',  quantity:'4' },
                { id: '4250',      name: 'Valvula Escape', brand: 'Ford',  model: 'Fiesta', year:'1980', price: '210', location:'Victoria',  quantity:'6' },
                { id: 'BAC-K-86B', name: 'Bomba Aceite',   brand: 'Ford',  model: 'Fiesta', year:'1980', price: '564', location:'Lombardo',  quantity:'13' },
                { id: 'BD-15355',  name: 'Banda',          brand: 'Ford',  model: 'Fiesta', year:'1980', price: '213', location:'Barrancos', quantity:'14' },
                { id: 'EL-231',    name: 'Cable Bujia',    brand: 'Ford',  model: 'Fiesta', year:'1980', price: '345', location:'Calzada',   quantity:'12' },

                { id: '5s-7f57e',  name: 'Empaque',        brand: 'Ford',  model: 'Focus',  year:'2007', price: '450', location:'Barrancos', quantity:'13' },
                
                { id: '18456-10', name: 'Metal Biela',       brand: 'Nissan', model: 'Pathfinder',   year:'1995', price: '120', location:'Calzada',   quantity:'5' },
                { id: '2488',     name: 'Valvulas Admision', brand: 'Nissan', model: 'Pathfinder',   year:'1995', price: '442', location:'Victoria',  quantity:'9' },
                { id: '2517',     name: 'Valvulas Escape',   brand: 'Nissan', model: 'Pathfinder',   year:'1995', price: '125', location:'Sanalona',  quantity:'32' },
                { id: '7099-10',  name: 'Metal Bancada',     brand: 'Nissan', model: 'Pathfinder',   year:'1995', price: '346', location:'Lombardo',  quantity:'8' },
                { id: '9124TW',   name: 'Tensor',            brand: 'Nissan', model: 'Pathfinder',   year:'1995', price: '500', location:'Calzada',   quantity:'45' },

                { id: '9rr-12',   name: 'Bomba de agua',     brand: 'Nissan', model: 'Sentra',       year:'2015', price: '400', location:'Calzada',   quantity:'32' },

                { id: '455-1f1',  name: 'Bomba de agua',   brand: 'Jeep',   model: 'Cherokee', year:'1999', price: '500', location:'Calzada',   quantity:'23' }
                ]
        };
        return o;
    }])


    .controller('MainCtrl', [
        '$scope',
        'products',
        function($scope, products) {

            $scope.products = products.products;

            $scope.resetFilter =function(){
                $scope.filtro = {};
            };

        }
    ]);