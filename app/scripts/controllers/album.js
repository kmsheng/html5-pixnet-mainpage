'use strict';

define(['app', 'jquery'], function(app, $){

    return app.controller('AlbumCtrl', function($scope, $location){
        $scope.click = function() {
            alert('i got clicked');
            console.log('here');
        };
    });
});
