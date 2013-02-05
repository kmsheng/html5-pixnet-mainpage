'use strict';

define(['app'], function(app){
    app.controller('IndexCtrl', function($scope, $location){
        $scope.awesomeThings = [
            'dig',
            'harder'
        ];
    });

    return app;
});
