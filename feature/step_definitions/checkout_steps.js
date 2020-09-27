var {Then} = require('cucumber');
var {When} = require('cucumber');
var {Given} = require('cucumber');
const expectChai = require('chai').expect;

Given(/^i click on the proceed to check out button$/, function () {
    const proceedToCheckOut1 = $('a[title=\'Proceed to checkout\'] > span')
    proceedToCheckOut1.waitForClickable(5000);
    proceedToCheckOut1.click()

});
Given(/^i click on the second proceed to check out button$/, function () {
    const proceedToCheckOut2 = $('div#center_column  a[title=\'Proceed to checkout\'] > span')
    proceedToCheckOut2.click();

});
Given(/^i click on the third proceed to check out button$/, function () {
    const proceedToCheckout3 =$('div#center_column > form[method=\'post\']  button > span')
    proceedToCheckout3.click()

});
Given(/^i agree to the terms and conditions$/, function () {
    const terms = $('input#cgv')
    terms.click()

});
Given(/^i click on the fourth proceed to check out button$/, function () {
    const proceedToCheckOut4 = $('form#form  button > span')
    proceedToCheckOut4.click()

});
Given(/^i verify i am on payment page "([^"]*)"$/, function (expectedMessage) {
    const actualMessage = $('div#center_column > .page-heading').getText();
    console.log(actualMessage)
    expectChai(expectedMessage, actualMessage)

});

Given(/^i select payment by check method$/, function () {
    const payByCheck = $('a[title=\'Pay by check.\']')
    payByCheck.click();

});
When(/^i click on order confirmation button$/, function () {
    const orderConfirmationButton = $('p#cart_navigation  span')
    orderConfirmationButton.click()

});
Then(/^i verify order confirmation message: "([^"]*)"$/, function (expectedOderMessage) {
    const actualOrderMessage = $('div#center_column > .alert.alert-success').getText()
    console.log(actualOrderMessage)
    expectChai(expectedOderMessage, actualOrderMessage)

});