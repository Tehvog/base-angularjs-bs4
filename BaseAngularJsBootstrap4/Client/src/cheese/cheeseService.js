
(function () {
    'use strict';

    angular
      .module('app')
      .factory('cheeseService', cheeseService);

    cheeseService.$inject = ['$http'];

    function cheeseService($http) {
        var service = {
            getData: getData
        };

        return service;
        ////////////////

        function getData() {
            return $http.get('/api/cheese');
        }
    }
})();
