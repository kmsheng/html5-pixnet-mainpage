require.config({
  shim: {
    'backbone': {
        deps: ['jquery', 'lodash'],
        exports: "Backbone"
    }
  },

  paths: {
    hm: 'vendor/hm',
    esprima: 'vendor/esprima',
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min',
    lodash: 'vendor/lodash.min',
    backbone: 'vendor/backbone.min',
    modernizr: 'vendor/modernizr.min'
  }
});

require(['app'], function(app){
    app.init();
});
