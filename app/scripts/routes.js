define([
    'app',
    'controllers/controllers'
], function(app, controllers){

    return app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
           controller: controllers.IndexCtrl,
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
