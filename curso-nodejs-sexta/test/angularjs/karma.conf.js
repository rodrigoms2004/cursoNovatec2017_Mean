// test/angularjs/karma.conf.js


// in command line run
// npm run karma
module.exports = function(config) {
  const APP_FILES = [
      'test/angularjs/before.js',
      'public/bower_components/angular-mocks/angular-mocks.js',

      'public/app/**/*.module.js',
      'public/app/**/*!(module).js',

      'test/angularjs/**/*.js'
  ];

  var userConfig = {
    basePath : '../../',

    files : [
      'public/bower_components/angular/angular.min.js',
      'public/bower_components/angular-ui-router/release/angular-ui-router.js'
    ],

    preprocessors : {
      'public/app/**/*.js': 'coverage'
    },

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    reporters : ['progress', 'coverage'],

    plugins : [
      // 'karma-chrome-launcher',
      'karma-jasmine',
      'karma-coverage',
      'karma-phantomjs-launcher'
    ],

    coverageReporter : {
      type : 'html',
      dir : 'coverage-angular/'
    }
  };

  userConfig.files = userConfig.files.concat(APP_FILES);

  userConfig.phantomjsLauncher = {
    exitOnResourceError: true
  };

  config.set(userConfig);
};
