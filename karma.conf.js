module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      includeAllSources: true,
      dir: 'coverage/',
      reporters: [
        { type: 'text' },
        { type: 'text-summary' },
        { type: 'html', subdir: 'html/' },
      ],
    },
    browsers: ['ChromeHeadless'],
    preprocessors: { '**/*.ts': ['coverage'] },
    restartOnFileChange: true,
  });
};
