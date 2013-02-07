'use strict';

define(['jquery', 'app'], function($, app){

    app.controller('IndexCtrl', function($scope, $routeParams, $http, $q, $rootScope){

        $scope.userArticles = [];

        var userArticles = [],
            users = [
            'raindog',
            'ananchen',
            'shamusshoot',
            'oldhobo17'
        ];
        var getBlogArticles = function(users){

            var params = {
                    callback: 'JSON_CALLBACK',
                    per_page: 100,
                },
                done = 0,
                d = $q.defer(),
                url = 'http://emma.pixnet.cc/blog/articles?';

            var countDone = function(){
                done++;
                if (users.length === done) {
                    d.resolve();
                }
            };

            angular.forEach(users, function(user){
                params.user = user;
                $http.jsonp(url + $.param(params))
                     .success(function(data, status, headers, config){
                         userArticles.push(data.articles);
                         countDone();
                     })
                     .error(function(data, status, headers, config){
                         return d.reject(status);
                     });
            });
            return d.promise;
        };

        getBlogArticles(users)
            .then(function(){
                $scope.userArticles = userArticles;
            });


    });

    return app;
});
