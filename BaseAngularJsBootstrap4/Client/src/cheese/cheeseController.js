
(function () {
    'use strict';

    angular
      .module('app')
      .controller('cheeseController', cheeseController);

    cheeseController.$inject = ['$scope', 'cheeseService'];

    function cheeseController($scope, cheeseService) {
        var vm = this;
        vm.title = 'Is Tasty!';
        vm.cheeses = null;

        cheeseService
            .getData()
            .success(function (cheeses) {
                vm.cheeses = cheeses;
            });

        $scope.addCheese = function() {
            vm.cheeses.push(
            {
                name: $scope.newCheese.name,
                texture: $scope.newCheese.texture
            });

            $scope.newCheese.name = '';
            $scope.newCheese.texture = '';
        };
    }

})();
