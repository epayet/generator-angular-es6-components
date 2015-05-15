exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: './node_modules/gulp-protractor/node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',
  directConnect: true,
  //specs: ['specs/e2e/dist/*.js'],

  params: {
    url: 'http://localhost:8002'
  },

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
