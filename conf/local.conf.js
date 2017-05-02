exports.config = {
  user: 'user',
  key: 'key',
  server: 'hub-cloud.browserstack.com',

  capabilities: [{
    browserName: 'chrome',
    name: "local_test",
    build: "cucumber-js-browserstack",
    'browserstack.local': true
  }]
}
