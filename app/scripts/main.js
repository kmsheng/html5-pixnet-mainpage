require.config({
  shim: {
    'angular': {exports: 'angular'},
    'angular-resource': {deps:['angular']},
    'lodash': {exports: '_'}
  },

  paths: {
    hm: 'vendor/hm',
    esprima: 'vendor/esprima',
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min',
    lodash: 'vendor/lodash.min',
    modernizr: 'vendor/modernizr.min',
    angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.0.1/angular.min'
  }
});

require(['app'], function(app){
    app.init();
});
