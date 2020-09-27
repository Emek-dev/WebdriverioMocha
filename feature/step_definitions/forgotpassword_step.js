var {Then} = require('cucumber');
var {When} = require('cucumber');
var {Given} = require('cucumber');
const expectChai = require('chai').expect;

Given(/^i click the forgot password link$/, function () {
     $('a[title=\'Recover your forgotten password\']').click();


});
When(/^i click on retrieve password button$/, function () {
    const retrievePasswdBtn = $('.submit span');
    retrievePasswdBtn.click();
    browser.pause(2000)

});
Then(/^i get successful message "([^"]*)"$/, function (expectedMessage) {
    const actualMessage = $('.alert.alert-success').getText();
    console.log(actualMessage);
    expectChai(expectedMessage, actualMessage);
    browser.pause(5000);

});