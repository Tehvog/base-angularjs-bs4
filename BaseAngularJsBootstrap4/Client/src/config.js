
(function () {

    angular
        .module('app')
        .config(function ($routeProvider) {

            $routeProvider
                .when('/view1',
                    {
                        controller: 'cheeseController as vm',
                        templateUrl: '/Client/Views/View1.html'
                    })
                .when('/view2',
                    {
                        controller: 'cheeseController as vm',
                        templateUrl: '/Client/Views/View2.html'
                    })
                .otherwise({ redirectTo: '/view1' });

        });

})();
