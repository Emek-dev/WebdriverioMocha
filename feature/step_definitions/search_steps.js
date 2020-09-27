var {Then} = require('cucumber');
var {Given} = require('cucumber');
const expectChai = require('chai').expect;

Given(/^i search for "([^"]*)" in the search input box$/, function (item) {
    const searchBox = $('input#search_query_top')
    searchBox.setValue(item)
    const selectFirstItem = $('.ac_results ul li:nth-of-type(1)')
    selectFirstItem.click()
    browser.pause(2000)

});
Then(/^i see see a product definition page with title "([^"]*)"$/, function (expectedTitle) {
    const actualTitle = $('h1').getText();
    console.log(actualTitle);
    expectChai(expectedTitle, actualTitle)
    browser.pause(3000);

});