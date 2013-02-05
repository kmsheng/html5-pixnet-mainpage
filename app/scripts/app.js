define([], function() {
    return angular.module('pixnet', [])
   .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'views/index.html'
        });
        $routeProvider.when('/test', {
            templateUrl: 'views/test.html'
        });
        $routeProvider.otherwise({
            redirectTo: '404'
        });
   }]);
});
