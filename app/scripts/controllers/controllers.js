'use strict';

define(['jquery', 'app'], function($, app){

    app.controller('IndexCtrl', function($scope, $routeParams, $http){

        var url = 'http://emma.pixnet.cc/blog/articles?user=raindog';
        /*$http.post(url, {})
        .success(function(data){
            console.log(data);
        });*/
        $.get(url, function(data){
            console.log(data);
        });


        $scope.awesomeThings = [
            'dig',
            'harder',
            'dug'
        ];
    });

    return app;
});
