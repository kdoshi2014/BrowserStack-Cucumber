'use strict';

var assert = require('cucumber-assert');
var webdriver = require('selenium-webdriver');

module.exports = function() {

  this.When(/^I open localhost$/, function (next) {
    this.driver.get('http://localhost/dashboard');
    next();
  });

  this.Then(/^I can see title "([^"]*)"$/, function (titleMatch, next) {
	    this.driver.getTitle()
	      .then(function(title) {
	        assert.equal(title, titleMatch, 'Expected title to be ' + titleMatch);
	        next();
	      });
	  });
};
