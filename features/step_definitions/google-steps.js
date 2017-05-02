'use strict';

var assert = require('cucumber-assert');
var webdriver = require('selenium-webdriver');

module.exports = function() {

  this.When(/^I type URL in browser as "([^"]*)"$/, function (searchQuery, next) {
    this.driver.get('https://www.browserstack.com');
    next();
  });

  this.Then(/^I click on "([^"]*)"$/, function (next) {
    
    this.driver.findElement({ linkText: 'Sign in' })
      .click();
  });
  
  this.Then(/^I enter email as "([^"]*)"$/, function (next) {
	  
		  this.driver.findElement({ name: 'user[login]' })
	      .sendKeys('email');
	    
	  });
  
  this.Then(/^I enter password as "([^"]*)"$/, function (next) {
	  
		  this.driver.findElement({ name: 'user[password]' })
	      .sendKeys('password');
	    
	  });
  
  this.Then(/^I submit$/, function (next) {
	    var self = this;
	    this.driver.findElement({ name: 'commit' })
	      .click()
	      .then(function() {
	        next();
	      });
	  });
  
  this.Then(/^I skip local installation popup$/, function (next) {
	    var self = this;
	    this.driver.findElement({ id: 'skip-local-installation' })
	      .click()
	      .then(function() {
	        next();
	      });
	  });
  
  this.Then(/^I select the browser$/, function (next) {
	    var self = this;
	    this.driver.findElement({ xpath: '//*[@id=\"rf-browsers\"]/div/div[2]/div[4]/ul/li[1]/a' })
	      .click()
	      .then(function() {
	        next();
	      });
	  });
  
  this.Then(/^I should see title "([^"]*)"$/, function (titleMatch, next) {
	    this.driver.getTitle()
	      .then(function(title) {
	        assert.equal(title, titleMatch, 'Expected title to be ' + titleMatch);
	        next();
	      });
	  });

};