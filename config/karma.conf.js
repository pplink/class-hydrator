var webpackConfig = require('./webpack.test.js');

module.exports = function(config){
  var _config = {
    basePath: '',

    frameworks:['jasmine'],

    files:[
      {pattern: './config/karma-test-shim.js'}
    ],

    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap']
    },

    webpack:webpackConfig,

    webpackMiddleware:{
      stats:'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress','verbose'],
    port:9876,
    colors:true,
    logLevel: config.LOG_INFO,
    autoWatch:true,
    browsers:['PhantomJS'],
    singleRun: false
  };

  config.set(_config);
};