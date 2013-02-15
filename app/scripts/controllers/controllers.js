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

    app.controller('ContainerCtrl', function($scope){
        $scope.toggleMenu = function($event){

          var sideMenu = $('#side-menu');
          var className = $event.target.className;

          if (('menu-switch' === className) || ('switch-bar' === className)) {

            if (sideMenu.hasClass('opened')) {
              sideMenu.removeClass('opened');
              sideMenu.addClass('closed');
            } else {
              sideMenu.removeClass('closed');
              sideMenu.addClass('opened');
            }
          } else {
            if (sideMenu.hasClass('opened')) {
              sideMenu.removeClass('opened');
              sideMenu.addClass('closed');
            }
          }
        };
    });

    app.controller('SideMenuCtrl', function($scope){
      $scope.lists = [
        {text: '相簿', href: 'http://www.pixnet.net/album'},
        {text: '娛樂丸', href: 'http://www.pixnet.net/album'},
        {text: '化妝台', href: 'http://www.pixnet.net/album'},
        {text: '電影圈', href: 'http://www.pixnet.net/album'},
        {text: '運動邦', href: 'http://www.pixnet.net/album'},
        {text: '讀創館', href: 'http://www.pixnet.net/album'},
        {text: '好康活動', href: 'http://www.pixnet.net/album'},
        {text: '部落格', href: 'http://www.pixnet.net/album'},
        {text: '應用市集', href: 'http://www.pixnet.net/album'},
        {text: '公益家', href: 'http://www.pixnet.net/album'},
        {text: '手機', href: 'http://www.pixnet.net/album'},
        {text: 'NBA', href: 'http://www.pixnet.net/album'},
        {text: '痞一物', href: 'https://buy.pixnet.tw'},
        {text: '7Headlines', href: 'http://www.7headlines.com'},
      ];
    });

    return app;
});
